import { IMeet } from '../../../../types/usersTypes';

interface IManagerProps {
  isMentor: boolean
  meets: IMeet[] | false
  changeMeetsStatus: (status: string, id: string) => void
}
export interface IFeatureMeetsManagerProps extends IManagerProps {
  handleModalClick: (meet: any) => void
}

export interface IMeetsManagerProps extends IManagerProps {
  changeMeetsDate: (id: string, values: any) => void
}

export interface IMeetStatus {
  status: 'pending' | 'cancelled' | 'completed' | 'accepted'
}

export default IManagerProps;
