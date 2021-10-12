import React from "react";
import Config from "../Config/Config";

const Divice = (props) => {
  return (
    <div>
      <h1>My Divice:{props.name}</h1>
      <h4>Cureent Steps:{props.steps}</h4>
      <Config price={props.price} steps={props.steps} />
    </div>
  );
};

export default Divice;
