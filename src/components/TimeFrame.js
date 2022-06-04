import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { FREQUENCIES } from '../data/consts';

import { useTwitterDataContextUpdater } from '../contexts/TwitterDataContext';
import timeFrameStyles from '../styles/timeFrameStyles';
import ButtonsGroup from './ButtonsGroup';

const TimeFrame = () => {
  const [frequency, setFrequency] = useState('');

  const updateData = useTwitterDataContextUpdater();

  const handleOnChange = (e) => {
    setFrequency(e);
  };

  useEffect(() => frequency && updateData(frequency), [frequency]);

  return (
    <Box sx={timeFrameStyles.root}>
      <Typography variant="h5" sx={timeFrameStyles.question}>
        what timeframe would you like to analyze?
      </Typography>
      <ButtonsGroup state={frequency}
                    values={FREQUENCIES}
                    onChange={handleOnChange}
                    sx={timeFrameStyles}
      />
    </Box>
  );
};

export default TimeFrame;