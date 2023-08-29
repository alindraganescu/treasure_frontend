// import React from 'react';
// import '../styles/BigNews.css';

// function preview(string) {
//   return string.split(' ').slice(0, 80).join(' ');
// }

// const BigNews = ({ newsData, setNewsPage, newsPage }) => {
//   // console.log({ newsData });
//   return (
//     <div className="z-depth-2" id="big-news">
//       <h5>CRYPTOCURRENCY NEWS:</h5>
//       {newsData.results.map((article, index) => {
//         return (
//           <div key={index}>
//             {article.image_url && (
//               <img
//                 src={article.image_url}
//                 alt={article.image_url}
//                 className="image_news"
//               />
//             )}
//             <h6>
//               {index + 1}.&emsp;{article.title}
//             </h6>
//             <p className="flow-text text">{preview(article.description)}...</p>
//             <p>
//               Source: {article.source_id}
//               :&emsp;
//               <a
//                 className="news-link"
//                 href={article.link}
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 Link to article
//               </a>
//               &emsp; Date: {article.pubDate}
//             </p>
//           </div>
//         );
//       })}

//       <div className="row parent-buttons">
//         <div className="child-buttons">
//           {newsPage >= 1 && (
//             <button
//               className="btn z-depth-2"
//               id="white_equal_size_button"
//               onClick={() => setNewsPage(newsPage - 1)}
//             >
//               <i class="material-icons left">navigate_before</i>
//               Previous
//             </button>
//           )}
//         </div>
//         <div className="child-buttons">
//           {newsData.nextPage && (
//             <button
//               className="btn z-depth-2"
//               id="white_equal_size_button"
//               onClick={() => setNewsPage(newsData.nextPage)}
//             >
//               <i className="material-icons right">navigate_next</i>
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BigNews;

import React from 'react';
import '../styles/BigNews.css';

function preview(string) {
  return string.split(' ').slice(0, 80).join(' ');
}

const BigNews = ({ newsData, setNewsPage, newsPage }) => {
  // Ensure that newsData and newsData.results are available, else render nothing
  if (!newsData || !newsData.results) {
    return null;
  }

  return (
    <div className="z-depth-2" id="big-news">
      <h5>CRYPTOCURRENCY NEWS:</h5>
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
            <h6>
              {index + 1}.&emsp;{article.title}
            </h6>
            <p className="flow-text text">{preview(article.description)}...</p>
            <p>
              Source: {article.source_id}
              :&emsp;
              <a
                className="news-link"
                href={article.link}
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
              <i className="material-icons">navigate_before</i>
              Previous
            </button>
          )}
        </div>
        <div className="child-buttons">
          {newsData.nextPage && (
            <button
              className="btn z-depth-2"
              id="white_equal_size_button"
              onClick={() => setNewsPage(newsData.nextPage)}
            >
              Next
              <i className="material-icons">navigate_next</i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigNews;
