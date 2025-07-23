import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidebar'>

        </div>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
      <div className='footer-container'>

      </div>
    </div>
  );
}

export default App;