export interface IAdminProfile {
  id: string,
  admin: string,
  adminPhoto: string,
  isAdmin: boolean,
}

export interface IAdminState {
  profile: IAdminProfile,
  isLoading: boolean,
  error: string | null,
}

export interface ILoginAdminData {
  admin: string,
  password: string,
}

export interface ILoginAdminAction {
  type: string,
  payload: ILoginAdminData,
}
