import { Flex } from 'antd';
import { AuthButtonsConfig } from '../lib';
import { AuthButton } from './AuthButton';

export const AuthButtons = () => {
  return (
    <Flex justify="space-between" align="center" vertical gap={12}>
      {AuthButtonsConfig.map(({
        Icon, backgroundColor, iconColor, serviceName, textColor, onClick, to,
      }) => (
        <AuthButton
          textColor={textColor}
          onClick={onClick}
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
