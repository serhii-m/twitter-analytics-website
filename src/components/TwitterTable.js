import React, { lazy, Suspense } from 'react';

import {
  Box,
  Button,
  Skeleton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import PropTypes from 'prop-types';

import { useTwitterDataContextState } from '../contexts/TwitterDataContext';
const ExtendedTableData = lazy(() => import('./ExtendedTableData'));

import getComputedData from '../helpers/getComputedData';

import tableTwitterStyles from '../styles/tableTwitterStyles';
import detailsChevronStyle from '../styles/detailsChevronStyle';

const renderLoader = () => <Typography variant="h5">Loading...</Typography>;


const Row = ({ row = {} }) => {
  const { loading } = useTwitterDataContextState();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell sx={tableTwitterStyles.tCell}>
          {loading ? <Skeleton animation="wave" /> : <img src={`${row?.icon}`} alt="icon" height={42} />}
        </TableCell>
        <TableCell sx={tableTwitterStyles.tCell}>
          {loading ? <Skeleton animation="wave" /> : row?.ticker}
        </TableCell>
        <TableCell sx={tableTwitterStyles.tCell}>
          {loading ? <Skeleton animation="wave" /> : row?.company_name}
        </TableCell>
        <TableCell sx={tableTwitterStyles.tCellRight}>
          {loading ? (
            <Skeleton animation="wave" />
          ) : (
            <Button sx={detailsChevronStyle} onClick={() => setOpen(!open)}>
              <img src="images/btn-arrow.svg" alt="details"/>
            </Button>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={tableTwitterStyles.tcCollapse} colSpan={4}>
          <Suspense fallback={renderLoader()}>
            <ExtendedTableData open={open} row={row} />
          </Suspense>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

Row.propTypes = {
  row: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
  }).isRequired,
};


const TwitterTable = () => {
  const { data, err, loading } = useTwitterDataContextState();
  const { companies, tweet_num } = !loading && !err && getComputedData(data);

  const rows = companies;

  return (
    <Box sx={tableTwitterStyles.root}>
      <Typography variant="h5" gutterBottom sx={tableTwitterStyles.description}>
        {loading ?
          <Skeleton variant="rectangular" animation="wave" height={84} sx={{ borderRadius: '0.25rem' }} /> :
          `Every day we search through Tweets to understand what companies are being discussed, so you 
          can discover the hype. ${tweet_num} Tweets have been analysed, here is a Table of the Top 5. Click on the 
          Details to learn more about them`
        }
      </Typography>
      <TableContainer sx={tableTwitterStyles.container} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={tableTwitterStyles.theadRow}>
              <TableCell sx={tableTwitterStyles.tCell}>icon</TableCell>
              <TableCell sx={tableTwitterStyles.tCell}>ticker</TableCell>
              <TableCell sx={tableTwitterStyles.tCell}>company name</TableCell>
              <TableCell sx={tableTwitterStyles.tCellRight}>details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((row, idx) => <Row key={idx} row={row}/>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TwitterTable;