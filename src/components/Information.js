import React from 'react';
import { Box, Typography, Skeleton } from '@mui/material';

import { useTwitterDataContextState } from '../contexts/TwitterDataContext';
import { SKELETON_ARR_LENGTH } from '../data/consts';
import getComputedData from '../helpers/getComputedData';
import informationStyles from '../styles/informationStyles';

const Information = () => {
  const { data, err, loading } = useTwitterDataContextState();

  const { twitterHandles } = !loading && !err && getComputedData(data);

  const skeletonComponents = Array.from({ length: SKELETON_ARR_LENGTH }).map((_, idx) => (
    <Skeleton key={idx} animation="wave" />
  ));


  return (
    <Box sx={informationStyles.root}>
      <Typography variant="h5" gutterBottom sx={informationStyles.title}>
        about us
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.description}>
        Investors discuss interesting companies and opportunities on social media. If there is an opportunity other
        investors get excited and invest.
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.description}>
        There is so much social media content nobody is able stay on top of it all.
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.description}>
        We analyse Twitter posts and understand what companies are being discussed so you can discover the hype
      </Typography>
      <Typography variant="h5" gutterBottom sx={informationStyles.title}>
        how do we analyse a post?
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.description}>
        We created a program to read through a post, when it detects a company ticker (the 3 or 4 letter code) we take a
        note of how many comments it has. We analyse a lot of posts from a list of top twitter handles, then share with
        you the companies that are being discussed the most, as the top tweets.
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.description}>
        {loading ? <Skeleton animation="wave" />
          : `Here is a list of handles we keep an eye on, let us know if we forgot anyone:`}
      </Typography>
      <Box sx={{ mb: 3 }}>
        {loading && skeletonComponents}
        {twitterHandles && twitterHandles.map((item, idx) => (
          <Typography key={idx} variant="body1" gutterBottom sx={informationStyles.handles}>
            {`@${item?.handle} with ${item?.count}k followers`}
          </Typography>
        ))}
      </Box>
      <Typography variant="h5" gutterBottom sx={informationStyles.title}>
        who are we?
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.handles}>
        We are just 3 friends that wanted to start a business and hopefully work for ourselves.
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.handles}>
        We all invest in our free time and had a similar idea. After seeing what happened with
      </Typography>
      <Typography variant="body1" gutterBottom sx={informationStyles.handles}>
        GameStop and being influenced by other sites, we decided to give it a shot.
      </Typography>
    </Box>
  );
};

export default Information;