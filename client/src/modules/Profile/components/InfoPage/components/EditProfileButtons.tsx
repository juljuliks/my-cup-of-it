import React from 'react';
import { Button, Popover } from 'antd';
import { BtnsWrapper } from '../style';
import { IEditButtons } from '../types';
import EditUserProfileModal from './EditUserModal/EditUserModal';
import EditSocialModal from './EditSocialModal/EditSocialModal';

const EditProfileButtons: React.FC<IEditButtons> = ({
  profileData, changeRole, changeStatus, editProfile, editSocials, disableChangeRole,
}) => {
  const content = 'Отмените все встречи для смены роли';
  return (
    <BtnsWrapper>

      {disableChangeRole ? (
        <Popover content={content}>
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={changeRole}
            disabled
          >
            {profileData.isMentor ? 'Перестать быть ментором' : 'Cтать ментором'}
          </Button>
        </Popover>
      ) : (
        <Button
          type="primary"
          onClick={changeRole}
          disabled={false}
        >
          {profileData.isMentor ? 'Перестать быть ментором' : 'Cтать ментором'}
        </Button>
      )}

      <EditUserProfileModal editProfile={editProfile} profileData={profileData} />

      {disableChangeRole ? (
        <Popover content={content}>
          <Button
            style={{ width: '100%' }}
            onClick={changeStatus}
            disabled
          >
            {profileData.isActive ? 'Сменить статус на неактивный' : 'Сменить статус на активный'}
          </Button>
        </Popover>
      ) : (
        <Button
          onClick={changeStatus}
          disabled={false}
        >
          {profileData.isActive ? 'Сменить статус на неактивный' : 'Сменить статус на активный'}
        </Button>
      )}

      <EditSocialModal socials={profileData.socials} editSocials={editSocials} />
    </BtnsWrapper>
  );
};

export default EditProfileButtons;
