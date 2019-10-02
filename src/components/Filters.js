import React from 'react';
import { Select, Input } from 'antd';
const { Option } = Select;

const Filters = () => {
  return (
    <div className="filter__container">
      <label className="name__container" htmlFor="name__filter">Your name</label>
      <Input id="name__filter" placeholder="Enter your name" />

      <label className="job__container" htmlFor="job__filter">Your job title</label>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Choose your job title"
        id="job__filter"
      >
        <Option value="Job 1">Job 1</Option>
        <Option value="Job 2">Job 2</Option>
        <Option value="Job 3">Job 3</Option>
      </Select>
    </div>
  );
};

export default Filters;