import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Inventories from './components/Inventories/Inventories';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Blogs from './components/Home/Blogs/Blogs';
import Login from './components/Login/Login';
import Features from './components/Features/Features';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventories></Inventories>}></Route>
        <Route path='/feature/:featureId' element={<Features></Features>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
