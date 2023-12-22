import React, { useState, useEffect } from 'react';
import BlogArticle from '../components/BlogArticle';

function loadArticles(setArticles) {
  fetch('http://localhost:8001/api/articles')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(articles => {
      setArticles(articles);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}


loadArticles();


function BlogPage() {
    const [articles, setArticles] = useState([]);
      useEffect(() => {
    loadArticles(setArticles);
  }, []); 
   return (
    <div>
      <h1>Blog de Artículos Científicos</h1>
      {articles.map(article => (
        <BlogArticle
          key={article.id}
          title={article.title}
          description={article.description}
          publishedOn={article.created_at}
        />
      ))}
    </div>
  );
}

export default BlogPage;
