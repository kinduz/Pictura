import { IconType } from 'react-icons';
import { FaVk } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaYandex } from 'react-icons/fa6';
import { useAuthVk } from '../../../../Integrations';

export type TAuthButtonConfig = {
    Icon: IconType;
    to?: string;
    serviceName: string;
    backgroundColor: string;
    textColor: string;
    iconColor?: string;
    onClick?: any;
}

const { handleLoginVk } = useAuthVk();

export const AuthButtonsConfig: TAuthButtonConfig[] = [
  {
    Icon: FcGoogle,
    backgroundColor: '#fff',
    serviceName: 'Google',
    to: '/google',
    textColor: '#757575',
  },
  {
    Icon: FaVk,
    backgroundColor: '#3C5A96',
    iconColor: '#fff',
    serviceName: 'ВКонтакте',
    to: '/vk',
    textColor: '#fff',
    onClick: handleLoginVk,
  },
  {
    Icon: FaYandex,
    backgroundColor: '#191818',
    iconColor: '#CE0B24',
    serviceName: 'Яндекс ID',
    to: '/yandex',
    textColor: '#fff',
  },
];
