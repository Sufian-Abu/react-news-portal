import React, { useEffect, useState } from "react";
import NewsArticle from "../../components/NewsArticle";
import api, { endpoints } from '../../api';

const API_KEY = `${process.env['REACT_APP_API_KEY']}`;

function LifeStyleNews() {
    const [data, setData] = useState();

    useEffect(() => {
      const getSportsNewsContent = async () => {
        const req = await api({
          url: endpoints.ALL_NEWS,
          params: {
            "q": "lifestyle",
            "api-key": API_KEY,
          },
        });
        const res = await req.data.response;
        setData(res);      
      }
      getSportsNewsContent();
    }, []);    
    return (
        <div>
            <div className="all__news">
                {data &&
                    data.results.map((news) => (
                        <NewsArticle data={news} key={news.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default LifeStyleNews;