import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <h1>
        <Home></Home>
        <Login></Login>
        <SignUp></SignUp>
      </h1>
    </div>
  );
}

export default App;
