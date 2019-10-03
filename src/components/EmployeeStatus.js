import React from 'react';
import { Typography, Col, Row, Progress } from 'antd';
import '../styles/employeeStatus.scss';
import Filters from './Filters';
import Results from './Results';


const EmployeeStatus = () => {
  const { Title } = Typography;

  return (
    <div className="employeeStatus__container">
      <Row>
        <Col span={24}>
          <div className="page__description__container">
            <Title className="page__title" level={2}>Tealify</Title>
            <ul className="description__list">
              <li className="list__item"> Tealify is a transparency tool to define career paths in Tech teams. </li>
              <li className="list__item">  By selecting each area, grouped in categories, the user can inspect the different levels of expertise (ranked from 0 to 5 points). Each level represents a list of expected behaviours and tasks. </li>
              <li className="list__item"> Once all the areas have been ranked, the progress circle visualization will show us the percentage of mastery in each category. Based on that, a dropdown will suggest different names for job titles.</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 8 }}>
          <Filters />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 23, offset: 1 }} md={{ span: 24 }} lg={{ span: 22, offset: 2 }} xl={{ span: 15, offset: 1 }}>
          <Results />
        </Col>
      </Row>
      <Progress
        className="employee-status__line"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={100}
        showInfo={false}
        strokeWidth={2}
      />
    </div>
  );
};

export default EmployeeStatus;
