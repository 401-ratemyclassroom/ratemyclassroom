import React, {useState} from 'react';
import './App.css';
import Search from './search';
import Navbar from './navbar';
import Classroom from './Classroom';
import { Link, Routes, Route } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ClassroomList from './classroomList';

function App() {

  const [classroomList, setClassroomList] = useState([])
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar/><Search setClassroomList={setClassroomList}/><ClassroomList classroomList={classroomList}/></>}/>
        <Route path="/classrooms/:id" element={<><Navbar/><Classroom/></>}/>
      </Routes>
    </>
  );
}

export default App;
