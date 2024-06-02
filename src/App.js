// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AuthPage from './pages/Auth/AuthPage';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import ContactPage from './pages/Contact/Contact';
import OursPage from './pages/Ours/Ours';
import ConsultPage from './pages/Consult/Consult';
import Modal from './modal/Modal';
import Footer from './components/footer/Footer';
import BookTicket from './pages/BookTicket/BookTicket';
import PaymentDetail from './pages/PaymentDetail/PaymentDetail';
import PaymentStatus from "./pages/PaymentStatus/PaymentStatus";
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
    return ( 
    <BrowserRouter >
        <Header > </Header> 
        <Modal > </Modal> 
        <Routes>
            <Route path = "/" Component = { Home } > </Route> 
            <Route path = "/login" Component = { AuthPage } > </Route> 
            <Route path = "/lien-he" Component = { ContactPage } > </Route> 
            <Route path = "/ve-chung-toi" Component = { OursPage } > </Route> 
            <Route path = "/tra-cuu-ve" Component = { ConsultPage } > </Route> 
            <Route path = "/chon-tuyen/:id" Component = { BookTicket } > </Route>
            <Route path = "/payment" Component = { PaymentDetail } > </Route>
            <Route path = "/vnpay-payment" Component = { PaymentStatus } > </Route>

            <Route path = "/dashboard" Component = { DashBoard } > </Route> 
        </Routes> 
        <Footer > </Footer> 
    </BrowserRouter>
    );
}

export default App;