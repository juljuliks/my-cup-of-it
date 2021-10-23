import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconName, IconPrefix } from '../../../../../node_modules/@fortawesome/fontawesome-common-types/index.d';
import { MyCard } from './types';
import styles from './card.module.css';
import { getExperience } from '../../../common/getExperience';
import { useAppSelector } from '../../../../hooks';
import defaultUserPhotoUrl from '../../../common/defaultUserPhotoUrl';
import { iconsObject, iconsObject2 } from '../../../common/tools';
import Icons from '../../../common/Icons';

library.add(fab);
const { Meta } = Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.3rem;
  width: 80%;
`;

const UserCard: React.FC<MyCard> = ({
  mentor, showModal,
}) => {
  const currentUser = useAppSelector((state) => state.user.profile);

  return (
    <>
      <Link to={`users/${mentor.id}`}>
        <Card
          hoverable
          size="small"
          style={{
            width: 240,
            height: 450,
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
          }}
          cover={(
            <img
              alt="example"
              style={{
                height: '250px',
                maxHeight: '250px',
                objectFit: 'cover',
              }}
              src={mentor.userPhoto ? mentor.userPhoto : defaultUserPhotoUrl}
            />
          )}
        >
          <Meta title={mentor.firstname} />
          <Container>
            <div style={{ height: 120 }}>
              {mentor.isMentor && (
                <div className={styles.userDetails}>
                  <div>
                    Работает в:
                    {' '}
                    {mentor.company}
                  </div>
                  <div>
                    Опыт работы:
                    {' '}
                    {getExperience(mentor.careerStart)}
                  </div>
                  <IconsWrapper>
                    <Icons technologies={mentor.technologies} />
                  </IconsWrapper>
                  <div />
                </div>
              )}
            </div>

            <div className={styles.buttons}>
              {mentor.isMentor && !currentUser.isMentor && (
                <Button
                  type="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    showModal(mentor.id);
                  }}
                  disabled={!mentor.isActive || !currentUser.isActive}
                >
                  Постучаться
                </Button>
              )}
            </div>
          </Container>
        </Card>
      </Link>
    </>
  );
};

export default UserCard;
