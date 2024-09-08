import { MdCamera } from 'react-icons/md';
import { useEffect } from 'react';
import { Flex, Steps } from 'antd';
import {
  Card,
  ImageBlock,
  LogoStyled,
} from '@shared/index';
import image from '@shared/assets/images/email-sent.gif';
import { useAntdStep } from '@shared/helpers/hooks';
import { CreateUserForm, RegistrationType, useRegistration } from './CreateUserContent';
import { RegistrationSteps } from '../lib';
import { DoneRegistration } from './DoneRegistration';
import { VerificationForm } from '../../Verification';

export const RegistrationComponent = () => {
  const { current, next } = useAntdStep();
  const {
    registrationMutation, isLoading, error, isSuccess, data,
  } = useRegistration();

  const submitForm = async (data: RegistrationType) => {
    await registrationMutation(data);
  };

  useEffect(() => {
    if (isSuccess) {
      next();
    }
  }, [isSuccess]);

  return (
    <Flex align="center" vertical gap={16}>
      <LogoStyled>
        <MdCamera />
      </LogoStyled>
      <Steps current={current} items={RegistrationSteps} />
      <Card minHeight={current !== 1} isMargin gap={12}>
        {current === 0 && (
          <CreateUserForm errorMsg={error?.response?.data.error} isLoading={isLoading} submitForm={submitForm} />
        )}
        {current === 1 && data && (
          <Flex vertical align="center">
            <ImageBlock height={240} width={250} src={image} />
            <VerificationForm setNextStep={next} email={data.user.email} />
          </Flex>
        )}
        {current === 2 && (
          <DoneRegistration />
        )}
      </Card>
    </Flex>
  );
};
