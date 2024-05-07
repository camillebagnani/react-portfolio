import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
