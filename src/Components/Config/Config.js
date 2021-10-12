import React from "react";

const Config = (props) => {
  return (
    <div>
      <p>Price:{props.price}</p>
      <p>Steps: {props.steps}</p>
    </div>
  );
};

export default Config;
