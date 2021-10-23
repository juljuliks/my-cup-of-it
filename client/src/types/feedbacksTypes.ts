import { IAddNewTechnologyAction } from './technologiesTypes';

export interface IFeedbackData {
  title: string,
  description: string,
}

export interface IChangeFeedbackStatusData {
  id: string,
  status: 'complete' | 'accept' | 'pending' | 'reject',
}

export interface IFeedback extends IFeedbackData{
  id: string,
  status: 'complete' | 'accept' | 'pending' | 'reject',
  userId: string,
  firstname: string,
  lastname: string,
}

export interface IFeedbackState {
  data: IFeedback[],
  isLoading: boolean,
  error: string | null,
}

export interface IAddNewFeedbackAction {
  type: string,
  payload: IFeedbackData
}

export interface IChangeFeedbackStatusAction {
  type: string,
  payload: IFeedback
}
