import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to={"/Create"} className="nav-link">Add</Link></li>
          <li className="nav-item"><Link to={"/Edit"} className="nav-link">Edit</Link></li>
          <li className="nav-item"><Link to={"/View"} className="nav-link">View</Link></li>
        </div>
      </nav> 
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Home /> } /> 
          <Route path='/Create' element={ <Create /> } /> 
          <Route path='/Edit/:id' element={ <Edit /> } /> 
          <Route path='/View/:id' element={ <View /> } />       
        </Routes>
      </div>     
    </div>
  );
}

export default App;
