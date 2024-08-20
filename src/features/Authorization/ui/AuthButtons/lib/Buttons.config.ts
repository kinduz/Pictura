import { IconType } from 'react-icons';
import { FaGoogle, FaVk, FaYandex } from 'react-icons/fa';

export type TAuthButtonConfig = {
    Icon: IconType;
    to: string;
    serviceName: string;
    backgroundColor: string;
    iconColor: string;
}

export const AuthButtonsConfig: TAuthButtonConfig[] = [
  {
    Icon: FaGoogle,
    backgroundColor: '#fff',
    iconColor: 'orange',
    serviceName: 'Google',
    to: '/google',
  },
  {
    Icon: FaVk,
    backgroundColor: 'blue',
    iconColor: 'blue',
    serviceName: 'ВКонтакте',
    to: '/vk',
  },
  {
    Icon: FaYandex,
    backgroundColor: 'black',
    iconColor: 'red',
    serviceName: 'Яндекс',
    to: '/yandex',
  },
];
