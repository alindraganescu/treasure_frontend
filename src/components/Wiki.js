import React, { useState, useEffect } from 'react';
import '../styles/Wiki.css';
import resources from '../utils/Resources';
import axios from 'axios';

const Wiki = ({ onRefreshUserData, userData }) => {
  const [wikiData, setWikiData] = useState({
    link: '',
    description: '',
  });

  console.log(userData);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        // 'https://treasure-backend.herokuapp.com/links',
        'https://treasure-backend.vercel.app/links',
        {
          user_id: 1,
          link: wikiData.link,
          description: wikiData.description,
        }
      );

      if (true) {
        onRefreshUserData();
      }
      e.target.reset();
      setWikiData({
        link: '',
        description: '',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteLink = async (link_id) => {
    try {
      await axios.delete(
        // `https://treasure-backend.herokuapp.com/links/${link_id}/1`
        `https://treasure-backend.vercel.app/links/${link_id}/1`
      );

      if (true) {
        onRefreshUserData();
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  function handleChange(e) {
    setWikiData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="z-depth-2" id="wiki">
      <h5>RESOURCES LIST:</h5>
      <div className="row">
        <div className="col s6">
          <h5>Your crypto resources:</h5>
          <table className="centered" id="rows-wiki">
            <thead>
              <tr>
                <th>Site</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((site, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="small-shadow"
                        >
                          {site.site}
                        </a>
                      </td>
                      <td>{site.description}</td>
                      <td>
                        <span className="material-icons tiny delete">
                          block
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
              {userData.links &&
                userData.links.map((item) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="small-shadow"
                          >
                            {item.description}
                          </a>
                        </td>
                        <td>Favourite</td>
                        <td>
                          <span
                            style={{ cursor: 'pointer' }}
                            className="material-icons tiny delete"
                            onClick={() => deleteLink(item.id)}
                          >
                            delete_forever
                          </span>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="col s6">
          <h5>Insert a favourite link:</h5>
          <form onSubmit={submit}>
            <input
              placeholder="Link Address"
              name="link"
              type="text"
              class="validate"
              onChange={handleChange}
            />
            <input
              placeholder="Name of the Site"
              name="description"
              type="text"
              class="validate"
              onChange={handleChange}
            />
            <button
              type="sumbit"
              className="btn-floating btn-small waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
