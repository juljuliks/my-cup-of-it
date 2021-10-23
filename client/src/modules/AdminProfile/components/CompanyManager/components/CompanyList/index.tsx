import React from 'react';
import { Empty, List } from 'antd';
import styled from 'styled-components';
import { useAppSelector } from '../../../../../../hooks';
import DeletePopConfirm from './components/DeleteButton';
import EditButton from './components/EditButton';

const ListItemWrapper = styled.div`
  padding: 0 1rem;
  &:hover {
    background-color: lightgray;
  }
`;

const CompanyList: React.FC = () => {
  const companies = useAppSelector((state) => state.companies.data);
  if (!companies.length) {
    return (
      <Empty description="Компаний пока нет" />
    );
  }

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={companies}
        renderItem={(company) => (
          <ListItemWrapper>
            <List.Item
              actions={[<EditButton key="edit" company={company} />, <DeletePopConfirm key="delete" company={company} />]}
            >
              <List.Item.Meta
                title={<a href={`/companies/${company.id}`}>{company.title}</a>}
                description=""
              />
            </List.Item>
          </ListItemWrapper>
        )}
      />
    </>
  );
};

export default CompanyList;
