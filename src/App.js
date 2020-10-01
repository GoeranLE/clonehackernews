import React, { useState, useEffect, Fragment } from 'react';
import "./App.css";


const App = () => {
  const [hackernews, setHackernews] = useState(null);
  //const [searchBar, setSearchBar] = useState(" ");

  useEffect(() => {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?query="
    )
      .then((res) => res.json())
      .then((data) => setHackernews(data));
  }, []);

  console.log(hackernews);

  return (
    <>
      <div className="body">
        <div className="header"> 
        <h2 > CATerNews </h2>
        </div>
        <div className="main">
        <div className="searchBar">
          <form >
            <input type="search"></input>
            <input type="submit" value="Search"></input>
          </form>
          </div>
          {hackernews &&
            hackernews.hits.filter((news) => news.story_url).map((news) => {
                return (
                  <Fragment key={news.hits}>
                    <h2>
                      <a className="titleStyles" href={news.story_url}>
                        {news.story_title}
                      </a>
                    </h2>
                    <p> </p>
                    <p> author: {news.author}</p>
                    <p>{news.created_at}</p>
                    <br />
                  </Fragment>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default App;
