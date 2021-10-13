import React from 'react';

export default function Badge(props) {
    return (
      <div className="badge-container">
        <img src={props.img} height="15rem" width="15rem" />
        <p>{props.text}</p>
      </div>
    );
}
