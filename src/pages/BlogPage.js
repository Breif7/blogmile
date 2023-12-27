import React, { useState, useEffect, useContext } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext'; 
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

function BlogPage() {
    const [articles, setArticles] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        loadArticles(setArticles);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h2" gutterBottom>
                Blog de Artículos Científicos
            </Typography>
            {user && (
                <Button variant="contained" color="primary" style={{ marginBottom: 20 }}>
                    Agregar Artículo
                </Button>
            )}
            <Grid container spacing={3}>
              {articles.map(article => (
                <Grid item xs={12} md={6} lg={4} key={article.id}>
                  <BlogArticle
                    title={article.title}
                    description={article.description}
                    publishedOn={article.created_at}
                  />
                </Grid>
              ))}
            </Grid>
        </div>
    );
}

export default BlogPage;
