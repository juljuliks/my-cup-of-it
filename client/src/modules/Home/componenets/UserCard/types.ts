import { IProfile } from '../../../../types/usersTypes';

export interface MyCard {
  mentor: IProfile
  showModal: (id1: string) => void;
}
