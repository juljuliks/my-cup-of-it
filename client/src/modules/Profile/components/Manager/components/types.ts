import { ReactElement } from 'react';
import { IMeet } from '../../../../../types/usersTypes';

export interface IMeetButton {
  buttonText: string
  clickHandler: () => void;
}

export interface IMeetCard {
  isMentor: boolean
  buttons: ReactElement<IMeetButton>[] | []
  meetData: IMeet
}

export interface ICalendar {
  meets: IMeet[] | false
}

export interface IEditMeetDateModalProps {
  meet: any
  isModalVisible: boolean
  setIsModalVisible: (value: boolean) => void
  changeMeetsDate: (date: string, id: string) => void
}
