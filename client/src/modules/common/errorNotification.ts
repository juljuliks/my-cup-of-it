import { notification } from 'antd';

const openNotification = (errorMes: string) => {
  notification.open({
    message: 'Произошла ошибка',
    description: errorMes,
  });
};

export default openNotification;
