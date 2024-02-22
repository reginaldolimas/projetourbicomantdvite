import { Form, Typography, Button, Divider } from 'antd';
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import './index.css'

const LoginForm = ({ onFinish, loading }) => {

    return (
        <div>
            <Form name='basic' className='loginForm' onFinish={onFinish} autoComplete='on'>
                <Typography.Title>Login</Typography.Title>
                <Form.Item label='Email' name={'myEmail'} initialValue={''} rules={[{ required: true, message: 'Por favor insira seu usuário!'}]}>
                    <input placeholder='Entre com seu email' />
                </Form.Item>
                <Form.Item label='Senha' name={'myPassword'} initialValue={''} rules={[{ required: true, message: 'Por favor insira sua senha!'}]}>
                    <input type='password' placeholder='Entre com sua senha' />
                </Form.Item>
                <Button type='primary' loading={loading} htmlType='submit' block>Login</Button>
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

export default LoginForm;