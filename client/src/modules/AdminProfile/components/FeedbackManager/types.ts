import { IFeedback } from '../../../../types/feedbacksTypes';

export type GetFeedBackType = (status: string) => IFeedback[];

export type FeedbackFilterCallbackType = (feedback: IFeedback) => boolean;
