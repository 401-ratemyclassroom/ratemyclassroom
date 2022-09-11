import React from 'react';
import ClassroomItem from './classroomItem';

const ClassroomList = ({classroomList}) => {

    return(
        classroomList.map(classroom => <ClassroomItem key={classroom.name} name={classroom.name}/>)
    )
}

export default ClassroomList