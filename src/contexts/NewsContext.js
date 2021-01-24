import React, { createContext, useEffect, useState } from "react";
import api, { endpoints } from '../api';

const API_KEY = `${process.env['REACT_APP_API_KEY']}`;
export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getNewsContent = async () => {
      const req = await api({
        url: endpoints.ALL_NEWS,
        params: {
          "q": "all",
          "api-key": API_KEY,
        },
      });
      const res = await req.data.response;
      setData(res);      
    }
    getNewsContent();
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};