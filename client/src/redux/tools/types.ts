export interface IEditProfile {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  description: string,
  isMentor: boolean,
  careerStart?: string,
  company?: string,
}
