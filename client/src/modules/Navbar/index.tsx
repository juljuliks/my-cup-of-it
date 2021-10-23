/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Menu, Button, PageHeader,
} from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { actions } from '../../redux/slices';
import { useAppDispatch } from '../../hooks';

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface INavbarProps {
  isAdmin: boolean,
}

const Navbar: React.FC<INavbarProps> = ({ isAdmin }) => {
  const dispatch = useAppDispatch();

  function logoutHandler() {
    if (isAdmin) {
      return dispatch(actions.logoutAdminPending());
    }
    return dispatch(actions.logoutUserPending());
  }

  return (
    <PageHeader style={{ padding: '0 0 10px' }}>
      <Menu style={{ display: 'flex', justifyContent: 'space-around', padding: '0 130px' }} theme="light" mode="horizontal" defaultSelectedKeys={['Home']}>
        <MenuItemWrapper>
          <NavLink to="/home" activeClassName="nav-link--active"><i className="fas fa-mug-hot nav-link" /></NavLink>
        </MenuItemWrapper>

        <MenuItemWrapper style={{ width: '60%' }}>
          <NavLink to="/users" activeClassName="nav-link--active">
            <Button>Найти собеседника</Button>
          </NavLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <NavLink to="/profile" style={{ lineHeight: 1 }} activeClassName="nav-link--active"><i className="fas fa-user-circle nav-link" /></NavLink>
          <Button type="link" style={{ color: 'black', padding: 0 }} onClick={logoutHandler}><i className="fas fa-sign-out-alt nav-link" /></Button>
        </MenuItemWrapper>
      </Menu>
    </PageHeader>
  );
};

export default Navbar;
