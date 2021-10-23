import ISocial from '../../../../types/socialsTypes';
import { IMyProfile, IProfile } from '../../../../types/usersTypes';

export interface IInfoPageProps {
  isMe: boolean,
  profileData?: any,
  disableChangeRole?: boolean,
}

export interface IEditButtons {
  profileData: IProfile,
  changeRole: () => void,
  changeStatus: () => void,
  editProfile: (values: IProfile) => void,
  editSocials: (values: ISocial[]) => void,
  disableChangeRole?: boolean,
}

export interface IEditUserProfile {
  profileData: IProfile;
  editProfile: (values: IProfile) => void
}

export interface IEditSocials {
  socials: ISocial[];
  editSocials: (values: ISocial[]) => void
}

export interface IEditUserProfileForm extends IEditUserProfile {
  form: any
}

export interface IEditSocialsForm extends IEditSocials {
  form: any
}
