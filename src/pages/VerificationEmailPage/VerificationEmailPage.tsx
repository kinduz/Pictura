import { Navigate, useSearchParams } from 'react-router-dom';
import { Flex } from 'antd';
import { VerificationForm } from '../../features';
import { RoutePaths } from '../../app/routing/lib';
import { Card, ImageBlock } from '../../shared';
import image from '../../shared/assets/images/email-sent.gif';

const VerificationEmailPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  if (!email) {
    return <Navigate to={RoutePaths.authorization} />;
  }

  return (
    <Card minHeight={false}>
      <Flex vertical align="center">
        <ImageBlock height={240} width={250} src={image} />
        <VerificationForm email={email} />
      </Flex>
    </Card>
  );
};

export default VerificationEmailPage;
