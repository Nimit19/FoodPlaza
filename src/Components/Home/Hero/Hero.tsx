import React, { useState } from "react";

import classes from "./Hero.module.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultList";

const Hero = () => {
  const [results, setResults] = useState([]);

  return (
    <section id="main" className={classes.main}>
      <div className={classes.hero}>
        <h1>Noodletown</h1>
        <p>Discover best food around you</p>

        <div className={classes["search-bar"]}>
          <SearchBar setResults={setResults} />
          {results.length > 0 ? <SearchResultsList results={results} /> : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
