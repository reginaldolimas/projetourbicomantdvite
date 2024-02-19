import { Form, Typography, Button, Divider } from 'antd';
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import './index.css'
import { getToken } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onHandleFinish = ({myEmail, myPassword}) => {
        getToken(myEmail, myPassword)
        .then(token => {
            if (token) {
                dispatch({
                    type: "user/login",
                    payload: token,
                })
                console.log('Token: ', token);
                navigate('/dashboard');
            } else {
                console.error('Token invalido')
            }
        })
        .catch(error => {('Erro ao obter o token: ', error)})
    }
    return (
        <div>
            <Form className='loginForm' onFinish={onHandleFinish}>
                <Typography.Title>Login</Typography.Title>
                <Form.Item label='Email' name={'myEmail'}>
                    <input placeholder='Entre com seu email' />
                </Form.Item>
                <Form.Item label='Senha' name={'myPassword'}>
                    <input placeholder='Entre com sua senha' />
                </Form.Item>
                <Button type='primary' htmlType='submit' block>Login</Button>
                <Divider style={{ borderColor: 'black' }}>Or login with</Divider>
                <div className='social-login'>
                    <GoogleOutlined />
                    <FacebookFilled />
                    <TwitterOutlined />
                </div>
            </Form>
        </div>
    )
}

export default Login