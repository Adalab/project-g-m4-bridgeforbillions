import React from 'react';
import { PageHeader } from 'antd';
import '../styles/header.css';

const Header = () => {
  return (
    <PageHeader className="header__title" title={<div className="header__logo" />} />
  );
};

export default Header;
