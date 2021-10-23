import React from 'react';
import {
  Menu, PageHeader,
} from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NonAuthNavbar: React.FC = () => (
  <PageHeader style={{ padding: '0 0 10px' }}>
    <Menu style={{ display: 'flex', justifyContent: 'space-around' }} theme="light" mode="horizontal" defaultSelectedKeys={['Home']}>
      <MenuItemWrapper>
        <NavLink to="/home" activeClassName="nav-link--active"><i className="fas fa-mug-hot nav-link" /></NavLink>
      </MenuItemWrapper>

      <MenuItemWrapper>
        <NavLink to="/register" style={{ margin: '0 20px' }} activeClassName="nav-link--active">Зарегистрироваться</NavLink>
        <NavLink to="/login" style={{ margin: '0 20px' }} activeClassName="nav-link--active">Войти</NavLink>
      </MenuItemWrapper>

    </Menu>
  </PageHeader>
);

export default NonAuthNavbar;
