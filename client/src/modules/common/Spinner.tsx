import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Spinner: React.FC = () => (
  <SpinnerWrapper>
    <Spin tip="Загрузка..." />
  </SpinnerWrapper>
);

export default Spinner;
