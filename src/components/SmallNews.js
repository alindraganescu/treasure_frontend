import React from 'react';
import '../styles/SmallNews.css';

const SmallNews = ({ newsData }) => {
  // console.log(newsData);
  return (
    <div className="z-depth-3 small-news">
      <h4>Cryptocurrency News:</h4>

      {newsData.map((article, index) => {
        return (
          <div key={index}>
            {/* {article.image_url && (
              <img
                src={article.image_url}
                alt={article.image_url}
                className="image_news"
              />
            )} */}
            <p>
              {index + 1}.&emsp;{article.title}
            </p>
            <p>
              Source: {article.source_id}
              :&emsp;
              <a
                href={article.link}
                className="small-news-link"
                rel="noreferrer"
                target="_blank"
              >
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

export default SmallNews;
