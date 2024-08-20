import { Flex } from 'antd';
import { AuthButtonsConfig } from '../lib';
import { AuthButton } from './AuthButton';

export const AuthButtons = () => {
  return (
    <Flex justify="center" gap={12}>
      {AuthButtonsConfig.map(({
        Icon, backgroundColor, iconColor, serviceName, to,
      }) => (
        <AuthButton
          Icon={Icon}
          key={serviceName}
          serviceName={serviceName}
          backgroundColor={backgroundColor}
          iconColor={iconColor}
          to={to}
        />
      ))}
    </Flex>
  );
};
