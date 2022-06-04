import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchData } from '../services/fetchData';
import { FREQUENCIES } from '../data/consts';
import determineTimeInterval from '../helpers/determineTimeInterval';

const TwitterDataContextState = createContext();
const TwitterDataContextUpdater = createContext();

const useTwitterDataContextState = () => {
  const context = useContext(TwitterDataContextState);

  if (context === undefined) {
    throw new Error('useTwitterDataContextState was used outside of its Provider');
  }

  return context;
};

const useTwitterDataContextUpdater = () => {
  const context = useContext(TwitterDataContextUpdater);

  if (context === undefined) {
    throw new Error('TwitterDataContextUpdater was used outside of its Provider');
  }

  return context;
};

const TwitterDataContextProvider = ({ children }) => {
  const [twitterData, setTwitterData] = useState(
    {
      data: null,
      loading: true,
      err: null,
    });

  const updateData = async (frequency) => {
    try {
      setTwitterData(
        {
          data: null,
          loading: true,
          err: null,
        });

      const res = await fetchData(frequency);

      if (res?.data?.statusCode === 200) {
        return setTwitterData(
          {
            data: res?.data?.body,
            loading: false,
            err: null,
            frequency: frequency,
            timeInterval: determineTimeInterval(frequency),
          }
        );
      }

      return setTwitterData(
        {
          data: null,
          loading: false,
          err: res?.data,
        }
      );
    } catch (err) {
      setTwitterData((prev) => ({
        ...prev,
        error: err,
      }));
      console.error(err.message);
    } finally {
      setTwitterData((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    updateData(FREQUENCIES.weekly);
  }, []);

  return (
    <TwitterDataContextState.Provider value={twitterData}>
      <TwitterDataContextUpdater.Provider value={updateData}>
        {children}
      </TwitterDataContextUpdater.Provider>
    </TwitterDataContextState.Provider>
  );
};

TwitterDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TwitterDataContextProvider, useTwitterDataContextState, useTwitterDataContextUpdater };
