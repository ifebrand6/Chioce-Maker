import React from 'react'
export default function PopularityTracker(props) {
   const most_frequently_ask_question = props.most_frequently_ask_question
    return(
        <div>
        <span><h4>{most_frequently_ask_question} ?</h4></span>
        <span>Question Popularity Rank: 1</span> <br/>
        <span>No of times asked: </span>
       
        <br/>
        </div>
    )
};

