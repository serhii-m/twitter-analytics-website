import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Link,
  Skeleton,
  Stack,
  Typography
} from '@mui/material';

import ButtonsGroup from './ButtonsGroup';
import { useTwitterDataContextState } from '../contexts/TwitterDataContext';
import getComputedData from '../helpers/getComputedData';
import { METRICS_SORT_VALUES, ARRAY_LENGTH } from '../data/consts';

import twitterMetricsStyles from '../styles/twitterMetricsStyles';
import detailsChevronStyle from '../styles/detailsChevronStyle';


const TwitterMetrics = () => {
  const [twitterMetrics, setTwitterMetrics] = useState([]);

  const { data, err, loading, timeInterval } = useTwitterDataContextState();
  const { topCommentTweets, topRetweetTweets, topLikeTweets } = !loading && !err && getComputedData(data);

  const handleOnChange = (e) => {
    setTwitterMetrics(e === 'most retweets' ?
      topRetweetTweets : e === 'most comments' ?
        topCommentTweets : topLikeTweets);
  };

  useEffect(() => topRetweetTweets && setTwitterMetrics(topRetweetTweets), [loading])

  const skeletonComponents = Array.from({ length: ARRAY_LENGTH }).map((_, idx) => (
    <Skeleton key={idx} animation="wave" width={230} height={70}/>
  ));

  const button = <ButtonsGroup state={twitterMetrics}
                               values={METRICS_SORT_VALUES}
                               onChange={handleOnChange}
                               sx={twitterMetricsStyles}
  />;


  return (
    <Box sx={twitterMetricsStyles.root}>
      <Typography variant="h5" gutterBottom sx={twitterMetricsStyles.title}>
        {loading ? `tweets` : `tweets over a ${timeInterval}`}
      </Typography>
      <Typography variant="h5" gutterBottom sx={twitterMetricsStyles.description}>
        {loading ? <Skeleton animation="wave"/>
          : `Select the buttons below to see what are the top tweets over the ${timeInterval}`}
      </Typography>
      <Stack direction="row" sx={twitterMetricsStyles.btnStack}>
        {loading ? (skeletonComponents) : button}
      </Stack>
      {twitterMetrics && twitterMetrics.map((item, idx) => (
        <Box key={idx} sx={twitterMetricsStyles.author}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 700 }}>
            {'@' + item?.author} {item?.date.slice(0, 16)}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            {item?.text}
          </Typography>
          <Stack direction="row" sx={twitterMetricsStyles.metricsStack}>
            <Box sx={twitterMetricsStyles.avatarBox}>
              <Avatar sx={twitterMetricsStyles.retweet} alt="retweet icon"
                      src="/images/retweet.svg"/>
              <Typography variant="h5" gutterBottom sx={twitterMetricsStyles.count}>
                {item?.metrics['retweet_count']}
              </Typography>
            </Box>
            <Box sx={twitterMetricsStyles.avatarBox}>
              <Avatar sx={twitterMetricsStyles.reply} alt="reply icon"
                      src="/images/reply.svg"/>
              <Typography variant="h5" gutterBottom sx={twitterMetricsStyles.count}>
                {item?.metrics['reply_count']}
              </Typography>
            </Box>
            <Box sx={twitterMetricsStyles.avatarBox}>
              <Avatar sx={twitterMetricsStyles.like}
                      alt="like icon" src="/images/like.svg"/>
              <Typography variant="h5" gutterBottom sx={twitterMetricsStyles.count}>
                {item.metrics['like_count']}
              </Typography>
            </Box>
            <Box>
              <Link href={item?.url}
                    target="_blank" rel="noreferrer" underline="none">
                <Button sx={detailsChevronStyle}>
                  <img src="images/btn-arrow.svg" alt="details"/>
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TwitterMetrics;