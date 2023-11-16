import * as React from "react";
import './App.css';
import MyForm from './APIBinding/form'
import Users from './APIBinding/users';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyForm />
      <Router>
        <Routes>
          <Route path="/login" element={<MyForm/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
