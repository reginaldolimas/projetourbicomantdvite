import './App.css';
import 'antd/dist/reset.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const initialState = useSelector((rootReducer) => rootReducer.userReducer);
  console.log(initialState)

  return (
      <div className='appBg'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
  )
}

function Dashboard() {
  return(
    <div>Dashboard</div>
  )
}

export default App
