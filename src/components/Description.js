import React from 'react';
import Level from './Level';
import LevelInfo from './LevelInfo';

const Description = (props) => {
  const { careerInfo, attributeSelected } = props;
  // const attributeObject = careerInfo.find((item) => item.newid === attributeSelected);
  // console.log(attributeObject);
  const attributeObject = careerInfo.filter((item)=>item.newid === attributeSelected);
  console.log(attributeObject);


  return (
    <div> hola
    </div>

  );
};

export default Description;