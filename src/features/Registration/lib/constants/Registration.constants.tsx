import {
  SmileOutlined, SolutionOutlined, UserOutlined,
} from '@ant-design/icons';
import { AntdSteps } from '@shared/lib';

export const RegistrationSteps: AntdSteps[] = [
  {
    title: 'Регистрация',
    icon: <UserOutlined />,
  },
  {
    title: 'Верификация',
    icon: <SolutionOutlined />,
  },
  {
    title: 'Готово!',
    icon: <SmileOutlined />,
  },
];
