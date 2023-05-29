// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Page from './Page';
import Contact from './Contact';
import { Routes, Route,Link } from 'react-router-dom';
import Footer from './Footer';
import Detail from './Detail';
import Cat from './Cat';
import Partical from './Components/Partical';

function App() {
  return (
<>  
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/page' element={<Page/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path='/cat/:ID' element={<Cat/>} />
    </Routes>
    

    <Footer/>
  
</>
  );
}

export default App;
