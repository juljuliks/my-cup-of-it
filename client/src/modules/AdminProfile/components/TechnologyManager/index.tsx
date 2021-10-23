import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { actions } from '../../../../redux/slices';
import { useAppDispatch } from '../../../../hooks';
import AddCompanyForm from './components/AddTechnologyForm';
import TechnologyList from './components/TechnologyList';

const { TabPane } = Tabs;

const TechnologyManager: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getAllCompaniesPending());
  }, [dispatch]);

  return (
    <Tabs type="line">
      <TabPane tab="Все" key="all">
        <TechnologyList />
      </TabPane>

      <TabPane tab="Добавить технологию" key="add">
        <AddCompanyForm />
      </TabPane>
    </Tabs>
  );
};

export default TechnologyManager;
