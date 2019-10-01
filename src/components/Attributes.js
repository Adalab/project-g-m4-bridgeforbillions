import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './../styles/attributes.css';

const Attributes = (props) => {
  const { careerInfo } = props;
  return (
    <div className="attributes__container">
      <ul className="attributes__list">
        {careerInfo.map((item) => { 
          return (
            <li className="attributes__item" key={item.newid} style={{ padding: '0px 0px 10px 30px' }}>
              <Button className={`button--${item.category}`} type="primary" ghost>{`## | ${item.displayName}`}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


Attributes.propTypes = {
  careerInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Attributes; 