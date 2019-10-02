import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './../styles/attributes.css';

const Attributes = (props) => {
  const { careerInfo, getAttributeId } = props;
  return (
    <div className="attributes__container">
      <h2 className="attributes__title">1: Select an area (TBD)</h2>
      <ul className="attributes__list">
        {careerInfo.map((item) => {
          return (
            <li className="attributes__item" key={item.newid} style={{ padding: '0px 0px 10px 30px' }}>
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
