import React, { useState, useEffect } from "react";
import Cardlist from "../Cardlist";

const Search = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://retoolapi.dev/9Q1LJb/data");
    const data = await response.json();
    setAllUsers(data);
    console.log(data);
  };

  return (
    <div class="columns">
      <div class="column"> </div>
      <div class="column is-half">
        <div class="container" fluid>
          <section
            className="Section"
            style={{ paddingTop: "100px" }}
          ></section>

          <Cardlist users={allUsers} />
        </div>
      </div>

      <div class="column"></div>
    </div>
  );
};

export default Search;
