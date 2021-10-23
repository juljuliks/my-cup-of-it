export interface IMeetBody {
  interviewerId: string,
  mentorId: string,
  status: string,
  date: Date,
  comment: string,
}

export interface IWriteMeetingAction {
  type: string,
  payload: IMeetBody,
}
