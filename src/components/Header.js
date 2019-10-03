import React from 'react';
import { PageHeader } from 'antd';
import '../styles/header.scss';

const Header = () => {
  return (
    <PageHeader className="header__title" title={<div className="header__logo" />} />
  );
};

export default Header;
