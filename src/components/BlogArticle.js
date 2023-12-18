import React from 'react';

function BlogArticle({ title, description, publishedOn }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>Publicado el: {publishedOn}</small>
    </div>
  );
}

export default BlogArticle;
