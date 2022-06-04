import React from 'react';
import { Container } from '@mui/material';

import ErrorAlert from './ErrorAlert';
import Intro from './Intro';
import TimeFrame from './TimeFrame';
import TwitterTable from './TwitterTable';
import Charts from './Charts';
import TwitterMetrics from './TwitterMetrics';
import Information from './Information';

import { useTwitterDataContextState } from '../contexts/TwitterDataContext';
import contentWrapperStyles from '../styles/contentWrapperStyles';


const ContentWrapper = () => {
  const { err } = useTwitterDataContextState();

  return (
    <Container sx={contentWrapperStyles}>
      {err && <ErrorAlert/>}
      <Intro/>
      <TimeFrame/>
      {!err &&
      <React.Fragment>
        <TwitterTable />
        <Charts />
        <TwitterMetrics />
        <Information />
      </React.Fragment>
      }
    </Container>
  );
};

export default ContentWrapper;