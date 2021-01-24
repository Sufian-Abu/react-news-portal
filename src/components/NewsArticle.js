import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.webTitle}</h1>
      <p className="news__desc">{data.sectionName}</p>
      <span className="news__author">{data.pillarName}</span> <br />
      <span className="news__published">{data.webPublicationDate}</span>
      <span className="news__source">{data.pillarId}</span>
    </div>
  );
}

export default NewsArticle;