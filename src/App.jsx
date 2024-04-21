import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation2 from './components/Navigation2/Navigation2';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App;
