import { IMyProfile, IRegisterData } from '../../types/usersTypes';

export type RegisterSubmitType = (values: IRegisterData) => void

export type OnChangeRegisterValuesType = (
  changedValues: { [item: string]: string | boolean },
  allValues: IRegisterData
) => void

export interface IRegisterProps {
  registerData: IRegisterData;
  setRegisterData: (prevState: any) => void
  setFormStep: (prevState: any) => void
}
