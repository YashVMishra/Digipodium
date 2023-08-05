import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todo from './components/Todo';
import Chat from './components/Chat';
import ContactForm from './components/ContactForm';
import Browse from './components/Browse';
import Product from './components/Product';
import ManageUser from './components/ManageUser';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
        <Toaster position='top-center'></Toaster>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}></Route>
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='events' element={<EventHandling/>}/>
          <Route path='state' element={<StateManagement/>}/>
          <Route path='todo' element={<Todo/>}/>
          <Route path='chat' element={<Chat/>}/>
          <Route path='contact' element={<ContactForm/>}/>
          <Route path='browse' element={<Browse/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='manageuser' element={<ManageUser/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
