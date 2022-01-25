import React from "react";
import TerritoryList from "./TerritoryList";
import classes from "./TerritoryLists.module.css";

const TerritoryLists = (props) => {
  let lists = props.chunks.map((chunk, i) => {
    return <TerritoryList key={i} list={chunk} number={i + 1} />;
  });

  return <div className={classes.listsContainer}>{lists}</div>;
};

export default TerritoryLists;
