import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/Login/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>

      <Footer />


      <ToastContainer />



    </div>
  );
}

export default App;
