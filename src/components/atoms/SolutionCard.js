import React from 'react';

const SolutionCard = (props) => {
  return (
    <>
    <a>
      <h3>{props.children}</h3>
      <p>{props.desc}</p>
    </a>
    </>
  );
};

export default SolutionCard;
