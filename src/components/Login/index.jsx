import { Form, Typography, Button, Divider } from 'antd';
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import './index.css'

const Login = () => {
    return (
        <div>
            <Form className='loginForm'>
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