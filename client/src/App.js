
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AdobeDataCenter from './components/AdobeDataCenter';
import AllUsers from './components/AllUsers';
import {BrowserRouter,Routes,Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
    <Route path='/' element={<AdobeDataCenter></AdobeDataCenter>}/>
    <Route path='/add' element={<AddUser></AddUser>}/>
    <Route path='/all' element={<AllUsers></AllUsers>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
