import * as React from "react";
import './App.css';
import MyForm from './APIBinding/form'
import Users from './APIBinding/users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={localStorage.getItem('token') != null ? <Users/> : <MyForm/>}/> */}
          <Route path="/" element={<MyForm/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
