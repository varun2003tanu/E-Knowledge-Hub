import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login';
import Projects from './components/Projects';
import Landing from './components/Landing';
import Post from './components/Post';

function App() {
  const isAuth = true; // setAuthorization by backend using jwt and formik and yup
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={isAuth ? <Home/> : <Login/>} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/:id' element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
