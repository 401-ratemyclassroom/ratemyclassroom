import React from 'react';
import './classroomItem.css';
import { Link } from 'react-router-dom';

const ClassroomItem = ({name}) => {
    let url = `/classrooms/${name}`
    return (
        <div className='classroomItem'>
            <Link className="item" to={url}>{name}</Link>
        </div>
    )
}

export default ClassroomItem