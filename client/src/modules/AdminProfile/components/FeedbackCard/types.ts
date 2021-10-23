import { IFeedback } from '../../../../types/feedbacksTypes';

export type FeedbackButtonClickType = (request: IFeedback) => void;

export interface IFeedbackItemProps {
  feedback: IFeedback,
  onComplete: FeedbackButtonClickType,
  onAccept: FeedbackButtonClickType,
  onReject: FeedbackButtonClickType,
}
