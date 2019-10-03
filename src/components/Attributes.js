import React from 'react';
import { Button, Typography } from 'antd';
import '../styles/attributes.css';
import PropTypes from 'prop-types';

const Attributes = (props) => {
  const { careerInfo, getAttributeId } = props;
  const { Title } = Typography;

  return (
    <div className="attributes__container">
      <Title level={3} className="attributes__title">1: Select an area of expertise</Title>
      <ul className="attributes__list">
        {careerInfo.map((item) => {
          return (
            <li className="attributes__item" key={item.newid}>
              <Button id={item.newid} onClick={getAttributeId} className={`button--${item.category}`} type="primary" ghost>{`${item.currentLevel || '##'} | ${item.displayName}`}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Attributes.propTypes = {
  careerInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAttributeId: PropTypes.func.isRequired
};

export default Attributes;
