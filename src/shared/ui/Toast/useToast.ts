import { notification, NotificationArgsProps } from 'antd';

export const useNotification = () => {
  const openNotification = ({
    message,
    description,
    duration,
    type,
  }: NotificationArgsProps) => {
    const placement = 'bottomRight';
    notification[type || 'info']({
      className: 'toast',
      message,
      description,
      placement,
      duration,
    });
  };

  return openNotification;
};
