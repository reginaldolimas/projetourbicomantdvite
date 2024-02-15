import { Form, Typography } from 'antd';
import './App.css';
import 'antd/dist/reset.css';

function App() {

  return (
      <div className='appBg'>
        <Form className='loginForm'>
          <Typography.Title>Login</Typography.Title>
          <Form.Item label='Email' name={'myEmail'}>
            <input placeholder='Entre com seu email' />
          </Form.Item>
          <Form.Item label='Senha' name={'myPassword'}>
            <input placeholder='Entre com sua senha' />
          </Form.Item>
        </Form>
      </div>

  )
}

export default App
