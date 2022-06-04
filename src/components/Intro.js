import React from 'react';
import { Box, Typography } from '@mui/material';

import introStyles from '../styles/introStyles';


const Intro = () => {
  return (
    <Box sx={introStyles.root}>
      <Typography gutterBottom component="div" sx={introStyles.logo}>
        <img src="images/mh-logo-big.svg" alt="logo" />
      </Typography>
      <Typography variant="h5" gutterBottom sx={introStyles.introText}>
        We understand what companies are being discussed on social media so you can discover the hype
      </Typography>
    </Box>
  );
};

export default Intro;