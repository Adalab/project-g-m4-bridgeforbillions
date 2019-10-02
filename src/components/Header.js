import { PageHeader } from 'antd';
import React from 'react';
import './../styles/header.css';

const Header = () => {
  return (
    <PageHeader className="header__title" title={<div className="header__logo" />} />
  );
};


export default Header;