import React from 'react';
import '../styles/SmallNews.css';

const SmallNews = ({ newsData, setNewsPage, newsPage }) => {
  // console.log(newsData);
  return (
    <div className="z-depth-2 small-news">
      <h5>Cryptocurrency News:</h5>

      {newsData.results.map((article, index) => {
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
                className="news-link"
                rel="noreferrer"
                target="_blank"
              >
                Link to article
              </a>
              &emsp; Date: {article.pubDate}
            </p>
          </div>
        );
      })}

      <div className="row parent-buttons">
        <div className="child-buttons">
          {newsPage >= 1 && (
            <button
              className="btn z-depth-2"
              id="white_equal_size_button"
              onClick={() => setNewsPage(newsPage - 1)}
            >
              <i class="material-icons left">navigate_before</i>
              Previous
            </button>
          )}
        </div>
        <div className="child-buttons">
          {newsData.nextPage && (
            <buton
              className="btn z-depth-2"
              id="white_equal_size_button"
              onClick={() => setNewsPage(newsData.nextPage)}
            >
              <i className="material-icons right">navigate_next</i>
              Next
            </buton>
          )}
        </div>
      </div>

    </div>
  );
};

export default SmallNews;
