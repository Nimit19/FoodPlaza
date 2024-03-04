import React from "react";

import classes from "./ShowcaseFood.module.css";

const ShowcaseFood = () => {
  return (
    <section className={classes["showcase"]}>
      <div className={classes["showcase-title"]}>
        <h1>Our best delivered cuisines</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className={classes["showcase-boxes"]}>
        <div className={classes["showcase-box"]}>
          <img
            src="https://images.pexels.com/photos/6940976/pexels-photo-6940976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Noodles</h3>
        </div>
        <div className={classes["divide-line"]} />
        <div className={classes["showcase-box"]}>
          <img
            src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>French Fries</h3>
        </div>
        <div className={classes["divide-line"]} />
        <div className={classes["showcase-box"]}>
          <img
            src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Salad</h3>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseFood;
