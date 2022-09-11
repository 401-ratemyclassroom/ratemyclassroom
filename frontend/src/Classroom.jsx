import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom"
import NewReview from './newReview';
import { getReviewList } from "./service"

const Classroom = () => {
    const { id } = useParams()
    const [reviewList, setReviewList] = useState([])
    useEffect(async() => {
        const res = await getReviewList(id)
        setReviewList(res)
    }, [])

    return (
        <div>
            <NewReview id={id}/>
            <h1>Classroom { id }</h1>
            {reviewList.map((review) => {
                console.log(review)
                return(
                    <div key={review.title}>
                        {review.rating}
                    </div>
                )
            })}
        </div>
    )
}

export default Classroom;
