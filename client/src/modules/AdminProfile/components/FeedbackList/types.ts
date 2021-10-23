import { IFeedback } from '../../../../types/feedbacksTypes';
import { FeedbackButtonClickType } from '../FeedbackCard/types';

export interface IFeedbackListProps {
  feedbacks: IFeedback[],
  onCompleteFeedback: FeedbackButtonClickType,
  onAcceptFeedback: FeedbackButtonClickType,
  onRejectFeedback: FeedbackButtonClickType,
}
