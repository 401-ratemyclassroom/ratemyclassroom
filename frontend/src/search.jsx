import React, { useState, useEffect } from 'react';
import { getClassroom } from './service';
import './search.css';

const Search = ({setClassroomList}) => {
  const [searchText, setSearchText] = useState("")

  useEffect(async() => {
    if (searchText !== ""){
      const data = await getClassroom(searchText);
      console.log(data);
      setClassroomList(data)
    } else {
      setClassroomList([])
    }
  }, [searchText])

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const val = document.getElementById('header-search').value;
    const data = await getClassroom(searchText);
    console.log(data);
    setClassroomList(data)
    // document.getElementById('header-search').value = '';
  };


  return (
    <div className="search">
      <form>
        <label htmlFor="header-search">
          <input
            type="text"
            id="header-search"
            placeholder="Search for a classroom"
            name="s"
            value={searchText}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default Search;
