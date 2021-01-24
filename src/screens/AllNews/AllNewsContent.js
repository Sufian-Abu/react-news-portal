import React, { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";
import NewsArticle from "../../components/NewsArticle";

function AllNewsContent() {
  const { data } = useContext(NewsContext);

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

export default AllNewsContent;