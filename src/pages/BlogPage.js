import React from 'react';
import BlogArticle from '../components/BlogArticle';

const articles = [
  {
    id: 1,
    title: "Artículo Científico 1",
    description: "Descripción del Artículo Científico 1.",
    publishedOn: "01-01-2023"
  },  
  {
    id: 2,
    title: "Artículo Científico 2",
    description: "Descripción del Artículo Científico 2.",
    publishedOn: "01-01-2023"
  },
  
];

function BlogPage() {
  return (
    <div>
      <h1>Blog de Artículos Científicos</h1>
      {articles.map(article => (
        <BlogArticle
          key={article.id}
          title={article.title}
          description={article.description}
          publishedOn={article.publishedOn}
        />
      ))}
    </div>
  );
}

export default BlogPage;
