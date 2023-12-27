import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import moment from 'moment';

function BlogArticle({ title, description, publishedOn }) {
  return (
    <Card data-testid="blog-article">
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="overline" color="textSecondary" display="block">
          Publicado el: {moment(publishedOn).format('DD/MM/YYYY')}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogArticle;