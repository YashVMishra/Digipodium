import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todo from './components/Todo';
import Browse from './components/Browse';
import ManageUser from './components/ManageUser';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div>
      <Toaster position='top-center' />
      <BrowserRouter>
        <UserProvider>
        <Navbar />
        
          <Routes>
            <Route path='/' element={ <Navigate to="/home" /> } />
            <Route path='home' element={ <Home /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='signup' element={ <SignUp /> } />
            <Route path='event' element={ <EventHandling /> } />
            <Route path='state' element={ <StateManagement /> } />
            <Route path='todo' element={ <Todo /> } />
            <Route path='browse' element={ <Browse /> } />
            <Route path='manageuser' element={ <ManageUser /> } />
            <Route path='updateuser/:id' element={ <UpdateUser /> } />
          </Routes>
          </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;