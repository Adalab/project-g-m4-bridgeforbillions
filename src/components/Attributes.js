import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const Attributes = (props) => {
  const { careerInfo } = props;
  return (
    <div className="attributes__container">
      <ul className="attributes__list">
        {careerInfo.map((item) => { 
          return (
            <li className="attributes__item" style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
              <Button type="primary" ghost>{`## | ${item.displayName}`}</Button>
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