import React from "react";

import classes from "./Dining.module.css";

const Dining = () => {
  return (
    <section className={classes["dining-boxes"]}>
      <div className={classes["dining-box__details"]}>
        <img
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div>
          <h3>Dinning out</h3>
          <p>Explore curated lists of top restaurants,</p>
        </div>
      </div>
      <div className={classes["dining-box__details"]}>
        <img
          src="https://images.pexels.com/photos/2365526/pexels-photo-2365526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div>
          <h3>Dinning out</h3>
          <p>Explore curated lists of top restaurants,</p>
        </div>
      </div>
      <div className={classes["dining-box__details"]}>
        <img
          src="https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div>
          <h3>Dinning out</h3>
          <p>Explore curated lists of top restaurants,</p>
        </div>
      </div>
    </section>
  );
};

export default Dining;
