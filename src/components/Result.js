import React,{ useState } from 'react';

export default function Result(props) {
        let item  = props.data.possible_question[Math.floor(Math.random() * props.data.possible_question.length)];
        const [option, setOption] = useState(item);
    return (
        <div>
        <hr/>
            <div id="section_for_question">
                <h3>{props.data.question}</h3>
                <ul>
                    {props.data.possible_question.map((element,key)=>{
                        return <li key={key}>{element}</li>
                    })}
                </ul>
                <p>Ans: {option}</p>
                <button onClick={() => setOption(props.data.possible_question[Math.floor(Math.random() * props.data.possible_question.length)])}>get another choice</button>
                <button onClick={props.resetQuestion}>Ask diff question</button>
            </div>
            <hr/>
        </div>
    )
};
