import React from 'react';
import '../styles/main.css';
import PropTypes from 'prop-types';
import GeneralStatus from './GeneralStatus';
import EmployeeStatus from './EmployeeStatus';

const Main = (props) => {
  const {
    attributeObject,
    getLevelInfo,
    defaultObject,
    careerInfo,
    getAttributeId,
    isClicked,
    attributeId
  } = props;

  return (
    <div className="main__container">
      <EmployeeStatus />
      <GeneralStatus
        careerInfo={careerInfo}
        getAttributeId={getAttributeId}
        attributeObject={attributeObject}
        getLevelInfo={getLevelInfo}
        defaultObject={defaultObject}
        isClicked={isClicked}
        attributeId={attributeId}
      />
    </div>
  );
};

Main.propTypes = {
  attributeObject: PropTypes.object,
  getLevelInfo: PropTypes.func.isRequired,
  defaultObject: PropTypes.object.isRequired,
  careerInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAttributeId: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  attributeId: PropTypes.number.isRequired
};

export default Main;
