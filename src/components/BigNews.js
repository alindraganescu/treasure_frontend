import React from 'react';

function preview(string) {
  return string.split(' ').slice(0, 80).join(' ');
}

const BigNews = ({ newsData, setNewsPage, newsPage }) => {
  // console.log({ newsData });
  return (
    <div>
      <h2>Big News Page</h2>
      {newsData.results.map((article, index) => {
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
            <p>{preview(article.description)}...</p>
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
      {newsPage >= 1 && (
        <a
          className="waves-effect waves-light btn"
          onClick={() => setNewsPage(newsPage - 1)}
        >
          <i class="material-icons left">navigate_before</i>Previous
        </a>
      )}

      {newsData.nextPage && (
        <a
          className="waves-effect waves-light btn"
          onClick={() => setNewsPage(newsData.nextPage)}
        >
          <i className="material-icons left">navigate_next</i>Next
        </a>
      )}
    </div>
  );
};

export default BigNews;
