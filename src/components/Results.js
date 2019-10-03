import React from 'react';
import { Typography, Progress, Row, Col } from 'antd';
import '../styles/results.scss';

const Results = () => {
  const { Title } = Typography;

  return (
    <div className="results__container">
      <Title className="results__title" level={1}>Results</Title>
      <Row className="points__section">
        <Col xs={{ span: 24 }} sm={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }}>
          <div className="points__container">
            <div className="points__number">###</div>
            <p className="points__subtitle">Total points</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }}>
          <div className="points__container">
            <div className="points__number">###</div>
            <p className="points__subtitle">Total points</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }}>
          <div className="points__container">
            <div className="points__number">###</div>
            <p className="points__subtitle">Points to next level</p>
          </div>
        </Col>
      </Row>
      <div className="percentage__section">
        <Progress className="percentage__circle" type="circle" percent={75} strokeColor="#5C5CEA" strokeWidth={10} />
        <Progress className="percentage__circle" type="circle" percent={70} strokeColor="#A8BC3B" strokeWidth={10} />
        <Progress className="percentage__circle" type="circle" percent={89} strokeColor="#CA1551" strokeWidth={10} />
        <Progress className="percentage__circle" type="circle" percent={56} strokeColor="#FDB833" strokeWidth={10} />
      </div>
    </div>
  );
};

export default Results;
