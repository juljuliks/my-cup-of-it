import { IFeedbackData } from '../../../../../types/feedbacksTypes';

export interface IFeedbackForm {
  form: any
  onFinish: (values: any) => void
}

export type FeedbackSubmitType = (values: IFeedbackData) => void
