import React, { useEffect, useState, useRef } from "react";
import Item from "./Item";
import axios from "axios";

const INITIAL_STATE = {
  term: "",
};

export const Search = () => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [ResponseData, setResponseData] = useState({});

  const inputSearch = useRef();

  useEffect(() => {
    inputSearch.current.focus();
  });

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      if (values.term) {
        runSearch(values.term);
      }
    }, 500);

    return () => {
      clearTimeout(timerSearch);
    };
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((presvState) => ({ ...presvState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runSearch(values.term);
  };

  const runSearch = (term) => {
    axios
      .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      .then((Response) => {
        setResponseData(Response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => {
        if (!values.term) {
          setValues(INITIAL_STATE);
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <input
          ref={inputSearch}
          onChange={handleChange}
          type="text"
          name="term"
          className="search-input"
          placeholder="Search..."
          value={values.term}
          autoComplete="off"
        />
      </form>
      <div>
        {ResponseData.drinks &&
          ResponseData.drinks
            .slice(0, 5)
            .map((item) => <Item key={item.idDrink} item={item} />)}
      </div>
    </>
  );
};
