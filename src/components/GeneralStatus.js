import React from 'react';
import PropTypes from 'prop-types';
import Attributes from './Attributes';
import Description from './Description';
import { Col, Row } from 'antd';

const GeneralStatus = (props) => {
  const { attributeObject, getLevelInfo, defaultObject, careerInfo, getAttributeId } = props;

  return (
    <div className="generalStatus__container">
      <Row>
        <Col span={6}>
          <Attributes
            careerInfo={careerInfo}
            getAttributeId={getAttributeId}
          />
        </Col>
        <Col span={16} offset={2}>
          <Description
            attributeObject={attributeObject}
            getLevelInfo={getLevelInfo}
            defaultObject={defaultObject}
          />
        </Col>
      </Row>
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
