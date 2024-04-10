// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AuthPage from './pages/Auth/AuthPage';
import Header from './components/header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={AuthPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
