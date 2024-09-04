import { MdCamera } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Flex, Steps } from 'antd';
import {
  Card,
  LogoStyled,
} from '../../../shared';
import { CreateUserForm, RegistrationType, useRegistration } from './CreateUserContent';
import { RegistrationStepsItems } from '../lib';
import { VerificationForm } from './VerificationContent';
import { DoneRegistration } from './DoneRegistration';

export const RegistrationComponent = () => {
  const [current, setCurrent] = useState(0);

  const {
    registrationMutation, isLoading, error, isSuccess, data,
  } = useRegistration();

  const submitForm = async (data: RegistrationType) => {
    await registrationMutation(data);
  };

  const next = () => {
    setCurrent(current + 1);
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
      <Steps current={current} items={RegistrationStepsItems} />
      <Card minHeight={current !== 1} isMargin gap={12}>
        {current === 0 && (
          // @ts-ignore
          <CreateUserForm errorMsg={error?.response?.data.error} isLoading={isLoading} submitForm={submitForm} />
        )}
        {current === 1 && data && (
          <VerificationForm setNextStep={next} email={data.user.email} />
        )}
        {current === 2 && (
          <DoneRegistration />
        )}
      </Card>
    </Flex>
  );
};
