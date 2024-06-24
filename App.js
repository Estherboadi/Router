
import Navbar from './Pages/Navbar.js';
//import Home from './Home.js';
//import Login from './Pages/Login.js';
import Report from './Pages/Report.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReportForm from './Pages/ReportForm.js';


function App() {


  return (
    <Router>
    <div className="App-header">
      <Navbar />
     <div className='main-content'>
     <Switch>
        <Route exact path = "report" element={Report } />
         <Route path ='reportform' element={ReportForm } />
      </Switch>
      </div>
      </div>
      </Router>
     
  );
}

export default App;

      {/*
        const title = "Welcome to the new blog";
        const likes = 50;
        const link = 'https://www.google.com';
        <div className='content'>
        <h1>{ title }</h1>
        <p>Liked { likes } times.</p>
        <p>{Math.random() * 10}</p>
        <a href= {link}>Google Site</a>
      </div>*/}