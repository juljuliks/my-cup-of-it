import React from 'react';
import { Tabs } from 'antd';

import FeedbackManager from './components/FeedbackManager';
import { Container, InnerContainer } from './style';
import CompanyManager from './components/CompanyManager';
import TechnologyManager from './components/TechnologyManager';

const { TabPane } = Tabs;

const AdminProfile: React.FC = () => (
  <Container>
    <InnerContainer>
      <Tabs type="card">
        <TabPane tab="Заявки" key="1">
          <FeedbackManager />
        </TabPane>
        <TabPane tab="Технологии" key="2">
          <TechnologyManager />
        </TabPane>
        <TabPane tab="Компании" key="3">
          <CompanyManager />
        </TabPane>
      </Tabs>
    </InnerContainer>
  </Container>
);

export default AdminProfile;
