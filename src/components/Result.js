import React,{ useState } from 'react';

export default function Result(props) {
        let item  = props.data.possible_choices[Math.floor(Math.random() * props.data.possible_choices.length)];
        const [option, setOption] = useState(item);
    return (
            <div className="signin-content">
                <div className="signin-image">
                    <figure><img src="images/signin-image.jpg" alt="sing up "/></figure>
                    <a href="https://www.github.com/ifebrand6" target="blank" className="signup-image-link">Do more by viewing other works!</a>
                </div>
                <div className="signin-form">
                    <h2>Choice Result </h2>
                    <div>
                        <h1 className="form-title">{props.data.question} ?</h1>
                    </div>
                    <div>
                    <ul>
                            {props.data.possible_choices.map((element,key)=>{
                                return <li key={key}><h4>{element}</h4></li>
                            })}
                        </ul>
                        <p>Choosen option: {option}</p>
                    </div>
                    <div className="social-login">
                        <span className="social-label"><button type="button" onClick={() => setOption(props.data.possible_choices[Math.floor(Math.random() * props.data.possible_choices.length)])}>Get another choice</button></span>
                        <span className="social-label"><button onClick={props.resetQuestion}>Ask another Question</button></span>
                    </div>
                </div>
            </div>
    )
};
