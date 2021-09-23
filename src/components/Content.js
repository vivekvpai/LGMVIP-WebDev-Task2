import React from 'react';

import classes from './Content.module.css';

const Content = (props) => {
  return (
    <li className={classes.content}>
      <div className={classes['card_box zoom-effect']}><img src={props.photo} alt=""></img></div>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Content;
