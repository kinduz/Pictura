import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { userId } = useParams();
  return (
    <div>{userId}</div>
  );
};

export default ProfilePage;
