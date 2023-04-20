import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <>
      <AppBar sx={{ zIndex: 1, backgroundColor: 'black', position: 'relative' }}>
        <Toolbar />
      </AppBar>
      <Container className={styles.blog}>
        <Box>
          <Typography variant="h3" className={styles.blogHeading}>
            My Blog
          </Typography>
        </Box>
        <Box className={styles.seprator}>
          <hr></hr>
        </Box>
        <Box className={styles.post}>
          <Typography>Post Coming Soon!</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
