export interface IAddNewTechnologyData {
  category: string,
  title: string,
}

export interface IDeleteTechnologyData {
  id: string,
}

export interface ITechnology extends IAddNewTechnologyData{
  id: string,
}

export interface ITechnologiesState {
  data: ITechnology[],
  isLoading: boolean,
  error: string | null,
}

export interface IAddNewTechnologyAction {
  type: string,
  payload: IAddNewTechnologyData,
}

export interface IEditTechnologyAction {
  type: string,
  payload: ITechnology,
}

export interface IDeleteTechnologyAction {
  type: string,
  payload: IDeleteTechnologyData,
}
