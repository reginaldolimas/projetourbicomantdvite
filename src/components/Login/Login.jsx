import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import useAuthentication from './useAuthenticationHook';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading,  login } = useAuthentication();

  const onFinish = ({ myEmail, myPassword }) => {
    login(myEmail, myPassword)
      .then(token => {
        if (token) {
          dispatch({
            type: 'user/login',
            payload: token,
          });
          navigate('/dashboard');
        }
      });
  };

  return <LoginForm onFinish={onFinish} loading={loading} />;
};

export default Login;
