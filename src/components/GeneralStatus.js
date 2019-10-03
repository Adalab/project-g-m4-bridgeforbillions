import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import Attributes from './Attributes';
import Description from './Description';

const GeneralStatus = (props) => {
  const {
    attributeObject,
    getLevelInfo,
    defaultObject,
    careerInfo,
    getAttributeId
  } = props;

  return (
    <div className="generalStatus__container">
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
          <Attributes
            careerInfo={careerInfo}
            getAttributeId={getAttributeId}
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16, offset: 2 }}>
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
