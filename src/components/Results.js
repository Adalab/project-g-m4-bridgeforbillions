import React from 'react';
import { Progress } from 'antd';

const Results = () => {
  return (
    <div className="results__container">
      <h2 className="results__title">Results</h2>
      <div className="points__section">
        <div className="points__container">
          <div className="points__number">##</div>
          <p className="points__subtitle">Total points</p>
        </div>
        <div className="points__container">
          <div className="points__number">##</div>
          <p className="points__subtitle">Total points</p>
        </div>
        <div className="points__container">
          <div className="points__number">##</div>
          <p className="points__subtitle">Points to next level</p>
        </div>
      </div>
      <div className="percentage__section">
        <Progress type="circle" percent={75} strokeColor="#5C5CEA" strokeWidth={10} gapPosition="right"/>
        <Progress type="circle" percent={70} strokeColor="#A8BC3B" strokeWidth={10} />
        <Progress type="circle" percent={89} strokeColor="#CA1551" strokeWidth={10} />
        <Progress type="circle" percent={56} strokeColor="#FDB833" strokeWidth={10} />
      </div>


    </div>
  )
}

export default Results;