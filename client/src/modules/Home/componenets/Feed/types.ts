import { IProfile } from '../../../../types/usersTypes';

export type modalFunc = (id1: string) => void
export type modalFuncHandle = () => void
export type shuffleArrayFunc = (array: IProfile[], n:number) => IProfile[];
