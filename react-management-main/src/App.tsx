import "reset-css"; // a githu= burrb

// import './assets/styles/global.scss';
import "@/assets/styles/global.scss"
// import 'antd/dist/antd.css' // or 'antd/dist/antd.less' 全局引入， 全部组件的样式都引入
import TopBar from './components/TopBar';
import { Link, useRoutes } from 'react-router-dom';
import router from './router';

function App() {
  // const [count, setCount] = useState(0);
  const outlet = useRoutes(router);
  console.log("outlet routes=>", outlet);


  return (
    <div className='app'>
      <div>
        {/* <TopBar></TopBar>
        <Link to={'/home'}>Home</Link>|
        <Link to={'/about'}>About</Link>|
        <Link to={'/user'}>User</Link>| */}
        {/* <Outlet></Outlet> */}

        {outlet}
      </div>
    </div>
  )
}

export default App
