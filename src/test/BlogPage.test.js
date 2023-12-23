import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BlogPage from '../pages/BlogPage';

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: 'Test Article', description: 'This is a test', created_at: '2021-01-01' }]),
    ok: true,
  })
);

beforeEach(() => {
  // Clear all mocks between tests
  fetch.mockClear();
});

describe('BlogPage Component', () => {
  test('renders with at least one article', async () => {
    render(<BlogPage />);

    // Use waitFor to handle asynchronous elements
    const articleElements = await screen.findAllByTestId('blog-article');
    expect(articleElements.length).toBeGreaterThan(0);
  });

  test('renders multiple articles', async () => {
    // Mock fetch to resolve with multiple articles
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([
        { id: 1, title: 'Test Article 1', description: 'This is a test', created_at: '2021-01-01' },
        { id: 2, title: 'Test Article 2', description: 'This is another test', created_at: '2021-01-02' },
      ]),
    });

    render(<BlogPage />);

    // Again, use waitFor for the asynchronous fetch
    const articles = await screen.findAllByTestId('blog-article');
    expect(articles.length).toBeGreaterThan(1);
  });

  test('handles fetch error', async () => {
    // Mock fetch to reject with an error
    fetch.mockRejectedValueOnce(new Error('API is down'));

    render(<BlogPage />);

    // Optionally, you can check for an error message in the UI
    // For example, if you display an error message to the user:
    // const errorMessage = await waitFor(() => screen.getByText(/error/i));
    // expect(errorMessage).toBeInTheDocument();
  });
});
