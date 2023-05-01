import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import styles from './Blog.module.css';
import Separator from '../../components/Common/Separator';

const Blog = () => {
  return (
    <>
      <AppBar sx={{ zIndex: 1, backgroundColor: 'black', padding: '16px 0', position: 'relative' }}>
        <Toolbar />
      </AppBar>
      <Container className={styles.blog}>
        <Typography variant="h3" className={styles.blogHeading}>
          My Blog
        </Typography>
        <Separator />
        <Typography className={styles.post}>Blogs are Coming Soon!</Typography>
      </Container>
    </>
  );
};

export default Blog;
