import React from 'react';
import { Select, Input } from 'antd';
import '../styles/filters.css';


const Filters = () => {
  const { Option } = Select;

  return (
    <div className="filter__container">
      <label className="filter__label" htmlFor="name__filter">Your name</label>
      <Input id="name__filter" placeholder="Enter your name" className="filter__input-name" />

      <label className="filter__label" htmlFor="job__filter">Your job title</label>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Choose your job title"
        id="job__filter"
        className="filter__input-job"
      >
        <Option value="Graduate">Graduate</Option>
        <Option value="JuniorFrontEndDeveloper">Junior Front-end Developer</Option>
        <Option value="JuniorBackEndDeveloper">Junior Back-end Developer</Option>
        <Option value="IntermediateFullStackDeveloper">Intermediate Full-stack Developer</Option>
        <Option value="SeniorFullStackDeveloper">Senior Full-stack Developer</Option>
        <Option value="ScrumMaster">Scrum Master</Option>
        <Option value="ProductManager">Product Manager</Option>
        <Option value="SystemsAdmin">Systems Admin</Option>
        <Option value="DevOps">DevOps</Option>
      </Select>
    </div>
  );
};

export default Filters;
