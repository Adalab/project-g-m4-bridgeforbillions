import React from 'react';
import PropTypes from 'prop-types';
import Attributes from './Attributes';
import Description from './Description';

const GeneralStatus = (props) => {
  const { attributeObject, getLevelInfo, defaultObject, careerInfo, getAttributeId } = props;

  return (
    <div>
      <Attributes
        careerInfo={careerInfo}
        getAttributeId={getAttributeId}
      />
      <Description
        attributeObject={attributeObject}
        getLevelInfo={getLevelInfo}
        defaultObject={defaultObject}
      />
    </div>
  );
};

GeneralStatus.propTypes = {
  attributeObject: PropTypes.object,
  getLevelInfo: PropTypes.func.isRequired,
  defaultObject: PropTypes.object.isRequired,
  careerInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAttributeId: PropTypes.func.isRequired
};

export default GeneralStatus;
