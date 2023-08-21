import React, { useState } from "react";
import { useEffect } from "react";

const SearchBarItem = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((user) => {
          return (
            value &&
            user &&
            user.username &&
            user.username.toLowerCase().includes(value)
          );
        });
        setResults(result);
        console.log(result);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  useEffect(() => {
    if (results > 0) {
      setLoading(true);
    }
  }, []);

  console.log(loading);
  return (
    <>
      <div className="search-box header-search-box">
        <form method="post" className="search-form">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button className="search-btn" type="submit">
            <i className="icofont-search-1"></i>
          </button>
        </form>
        <div className="results-list">
        {Array.isArray(results) && results.length > 0
          ? results.map((result, i) => {
              return (
            
                  <ul>
                    <li key={i}>
                      <a href={`/collection/${result.username}`}>
                        {result.username}
                      </a>
                    </li>
                  </ul>
              
              );
            })
          : ""}
            </div>
      </div>
    </>
  );
};

export default SearchBarItem;
