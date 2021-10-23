import React from 'react';
import { List } from 'antd';
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

const TechnologyList: React.FC = () => {
  const technologies = useAppSelector((state) => state.technologies.data);
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={technologies}
        renderItem={(technology) => (
          <ListItemWrapper>

            <List.Item
              actions={[
                <EditButton key="edit" technology={technology} />,
                <DeletePopConfirm key="delete" technology={technology} />,
              ]}
            >
              <List.Item.Meta
                title={<a href={`/technologies/${technology.id}`}>{technology.title}</a>}
                description={technology.category}
              />
            </List.Item>
          </ListItemWrapper>
        )}
      />
    </>
  );
};

export default TechnologyList;
