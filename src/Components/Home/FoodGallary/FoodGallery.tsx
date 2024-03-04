import React from "react";

import classes from "./FoodGallery.module.css";

const FoodGallery = () => {
  return (
    <>
      <div className={classes["showcase-pizza"]}>
        <div className={classes["showcase-pizza__text"]}>
          <p>
            fastest food <span>delivery</span> in
          </p>
          <p>the town</p>
        </div>
      </div>

      <section className={classes["grid_img-gallery"]}>
        <div className={classes["img_left"]}>
          <img src="" alt="" />
        </div>
        <div className={classes["img_right_1"]}></div>

        <div className={classes["img_right_2"]}></div>
      </section>
    </>
  );
};

export default FoodGallery;
