import React from 'react';
import { Alert, Typography } from '@mui/material';

import errorAlertStyles from '../styles/errorAlertStyles';

const ErrorAlert = () =>
    <Alert severity="error" sx={errorAlertStyles}>
      <Typography variant="h2" align="center">Error on fetching data from server. Please try again</Typography>
    </Alert>


export default ErrorAlert;