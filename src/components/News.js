import React from 'react';

const News = ({ newsData }) => {
  // console.log(newsData);
  return (
    <div>
      <h2>News Page</h2>

      {newsData.map((article, index) => {
        return (
          <div key={index}>
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.image_url}
                className="image_news"
              />
            )}
            <p>
              {index + 1}.&emsp;{article.title}
            </p>
            <p>
              Source: {article.source_id}
              :&emsp;
              <a href={article.link} rel="noreferrer" target="_blank">
                Link to article
              </a>
              &emsp; Date:&emsp;{article.pubDate}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default News;
