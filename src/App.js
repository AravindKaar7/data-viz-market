import logo from './logo.svg';
import './App.css';

import {Routes,Route,Navigate} from "react-router-dom";
import Home from './Pages/Home';
import Pipelines from './Pages/Pipelines';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Pipelines/:id' element={<Pipelines/>}/>
      <Route path='*' element={<Navigate to ="/"/>}/>
    </Routes>
  </div>
  );
}

export default App;
