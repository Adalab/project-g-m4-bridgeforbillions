import React from 'react';
import { Typography, Empty } from 'antd';
import '../styles/description.scss';
import PropTypes from 'prop-types';
import Level from './Level';
import InfoLevel from './InfoLevel';

const Description = (props) => {
  const {
    attributeObject,
    getLevelInfo,
  } = props;
  const { Title } = Typography;

  return (
    <div className="description__container">
      {attributeObject ? (
        <div className="description__info">
          <Title className="description__subtitle" level={3}>2: Rank the area (5 levels of expertise)</Title>
          <Title className={`description__title--${attributeObject.category}`} level={2}>{attributeObject.displayName}</Title>
          <p className={`description__text--${attributeObject.category}`}>{attributeObject.description}</p>
          <div className={`description__level__container description__level__container--${attributeObject.category}`}>
            <Level className={`level__slider--${attributeObject.category}}`} getLevelInfo={getLevelInfo} levelSelected={attributeObject.currentLevel} />
            {attributeObject.currentLevel === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            <div className="levelInfo">
              {attributeObject.milestones
                .filter((milstone) => milstone.level.includes(attributeObject.currentLevel))
                .map((milestone) => {
                  return (
                    <InfoLevel milestone={milestone} attributeObject={attributeObject} />
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

Description.propTypes = {
  attributeObject: PropTypes.object,
  getLevelInfo: PropTypes.func.isRequired,
};

export default Description;
