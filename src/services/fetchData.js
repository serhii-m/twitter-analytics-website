import axios from 'axios';

import { REACT_APP_API_URL } from '../config/config';

export const fetchData = async (arg) => {
  const url = `${REACT_APP_API_URL}` + arg;
  
  return await axios.get(url).catch(function (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

    return error;
  });
};
