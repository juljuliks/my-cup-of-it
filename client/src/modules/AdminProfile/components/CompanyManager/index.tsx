import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { actions } from '../../../../redux/slices';
import { useAppDispatch } from '../../../../hooks';
import CompanyList from './components/CompanyList';
import AddCompanyForm from './components/AddCompanyForm';

const { TabPane } = Tabs;

const CompanyManager: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getAllCompaniesPending());
  }, [dispatch]);

  return (
    <Tabs type="line">
      <TabPane tab="Все" key="all">
        <CompanyList />
      </TabPane>

      <TabPane tab="Добавить компанию" key="pending">
        <AddCompanyForm />
      </TabPane>
    </Tabs>
  );
};

export default CompanyManager;
