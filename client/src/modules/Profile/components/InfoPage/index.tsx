import React from 'react';
import {
  Image, Card, Timeline,
} from 'antd';
import { ITechnology } from '../../../../types/technologiesTypes';
import EditProfileButtons from './components/EditProfileButtons';
import {
  Container, CardWrapper, ImageWrapper, IconsWrapper,
} from './style';
import CommunicateButtons from './components/CommunicateButtons';
import { IInfoPageProps } from './types';
import { actions } from '../../../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import KnockingModal from '../../../Home/componenets/KnockingModal';
import defaultUserPhotoUrl from '../../../common/defaultUserPhotoUrl';
import { getExperience } from '../../../common/getExperience';
import Icons from '../../../common/Icons';

interface ISocialClasses {
  [key: string]: string
}

const socialClasses: ISocialClasses = {
  Telegram: 'fab fa-telegram social-icon',
  WhatsApp: 'fab fa-whatsapp social-icon',
  LinkedIn: 'fab fa-linkedin-in social-icon',
};

const InfoPage: React.FC<IInfoPageProps> = ({ isMe, profileData, disableChangeRole }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.profile);
  const technologies = useAppSelector((state) => state.technologies.data);

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const socialItems = profileData.socials.map((el: any) => Object.entries(el)[0]);

  function changeRole() {
    dispatch(actions.toggleUserRolePending({ id: profileData.id, isMentor: !profileData.isMentor }));
  }

  function changeStatus() {
    dispatch(actions.toggleUserStatusPending({ id: profileData.id, isActive: !profileData.isActive }));
  }

  function editProfile(values: any) {
    values.technologies = values.technologies.map((el: string) => technologies.find((elem: ITechnology) => elem.title === el)?.id);
    values.careerStart = values.careerStart ? values.careerStart.toISOString() : profileData.careerStart;
    const formData = new FormData();
    Object.entries(values).forEach((value: [string, any]) => {
      if (value[0] === 'userPhoto' && value[1]) formData.append(`${value[0]}`, value[1][0].originFileObj);
      else formData.append(`${value[0]}`, value[1]);
    });
    dispatch(actions.editUserProfilePending({ formData, userId: currentUser.id }));
  }

  function editSocials(values: any) {
    values = Object.entries(values).map((el) => {
      const [socialTitle, url] = el;
      if (url === '') return [socialTitle, ''];
      if (socialTitle === 'Telegram') el = [socialTitle, `https://t.me/${url}`];
      if (socialTitle === 'WhatsApp') el = [socialTitle, `https://wa.me/${url}`];
      if (socialTitle === 'LinkedIn') el = [socialTitle, `https://linkedin.com/in/${url}`];
      return el;
    });

    values = Object.fromEntries(values);

    if (!profileData.socials.length) {
      dispatch(actions.addUserSocialsPending({ id: profileData.id, socials: values }));
      return;
    }
    dispatch(actions.changeUserSocialsPending({ id: profileData.id, socials: values }));
  }

  return (
    <Container>
      <ImageWrapper>
        <Image
          preview={false}
          style={{
            objectFit: 'cover', width: '100%', height: 350, marginBottom: 20,
          }}
          src={profileData.userPhoto ? profileData.userPhoto : defaultUserPhotoUrl}
        />
        {
          isMe ? (
            <EditProfileButtons
              profileData={profileData}
              changeRole={changeRole}
              changeStatus={changeStatus}
              editProfile={editProfile}
              editSocials={editSocials}
              disableChangeRole={disableChangeRole}
            />
          ) : (profileData.isMentor && !currentUser.isMentor && <CommunicateButtons isDisabled={!currentUser.isActive} isActive={profileData.isActive} onKnock={setIsModalVisible} />)
        }
      </ImageWrapper>
      <CardWrapper>
        <Card title={`${profileData.firstname} ${profileData.lastname}`}>
          <Timeline>
            {(!profileData.company && !profileData.position && !profileData.careerStart && !profileData.technologies.length && !profileData.description)
              && <p style={{ color: '#2b2c3e' }}>{isMe ? 'Заполните информацию о себе в редактировании профиля' : 'Пользователь пока не заполнил информацию о себе'}</p>}
            {((profileData.company || profileData.position) && profileData.isMentor) && (
              <Timeline.Item>
                {`${profileData.position ? profileData.position : 'Работаю'} в ${profileData.company}`}
              </Timeline.Item>
            )}
            {(profileData.careerStart && profileData.isMentor) && (
              <Timeline.Item>
                {`Опыт работы: ${getExperience(profileData.careerStart)}`}
              </Timeline.Item>
            )}
            {profileData.technologies.length && (
              <Timeline.Item>
                <IconsWrapper>
                  <Icons technologies={profileData.technologies} />
                </IconsWrapper>
              </Timeline.Item>
            )}
            {profileData.description && (
              <Timeline.Item>
                {profileData.description}
              </Timeline.Item>
            )}
            {profileData.socials.length && (
              <Timeline.Item>
                <div>
                  <p style={{ margin: '0 10px 0 0' }}>Контакты:</p>
                  {socialItems.map((el: [string, string]) => {
                    const [socialTitle, url] = el;
                    return (
                      <a href={url} target="_blank" rel="noreferrer">
                        <i key={socialTitle} className={socialClasses[socialTitle]} />
                      </a>
                    );
                  })}
                </div>
              </Timeline.Item>
            )}
          </Timeline>
        </Card>
      </CardWrapper>
      <KnockingModal
        mentorId={profileData.id}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </Container>
  );
};

export default InfoPage;
