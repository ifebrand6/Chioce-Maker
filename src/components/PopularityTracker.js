import React from 'react'
export default function PopularityTracker(props) {
   const most_frequently_ask_question = props.most_frequently_ask_question
    return(
        <div>
            <h4>'{most_frequently_ask_question} ?'is most frequently asked question</h4>
        </div>
    )
};

