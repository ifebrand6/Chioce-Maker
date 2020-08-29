import React from 'react'
function Form(props) {
    const btn_style = {
        background: 'white',
        border: 'aliceblue',
        borderBottom: '1px solid #999',
        fontSize: 'x-large'
    }
    const arr = props.data.possible_choices.map((dd,index)=>{
       return <div className="form-group" key={index}>
       <div className="flexContainer">
           <label ><i className="zmdi zmdi-puzzle-piece"></i>
           </label>
           <input type="text"  placeholder={`${index}: Enter possible option`}  onChange={props.handleOnchange} name="possible_choices" id={index}/>
           <button type="button" id={index} onClick={props.removeInput} style={btn_style}><i
           className="zmdi zmdi-delete"></i></button>
       </div>
   </div>

    })
    return (
        <div className="signup-content">
        <div className="signup-form">
                <h2 className="form-title">Chioce Maker</h2>
                <h5>Life may be confusing, and decison hard to pull -use chocie maker to make life choices easier for you</h5>

                <form className="register-form" onSubmit={props.handleOnSubmit}>
                <h4>Question</h4>
                <div className="form-group">
                    <div className="flexContainer">
                        <label><i className="zmdi zmdi-help"></i>
                        </label>
                        <input type="text" name="question" placeholder="Q: Enter Your Quesion" onChange={props.handleOnchange} />
                    </div>
                </div>
                <h4>Possible Choices</h4>
                {arr}
                <div className="form-group">
                        <button onClick={props.addNewInput} type="button">Add more Option <i className="zmdi zmdi-plus-circle"></i>
                        </button>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" className="form-submit"
                            value="Get Choice!" />
                    </div>
                </form>
        </div>
        <div className="signup-image">
            <figure><img src="images/signup-image.jpg" alt="happy"/></figure>
            <a href="https://www.github.com/ifebrand6" target="blank" className="signup-image-link">Visit my other works</a>
        </div>
    </div>
    )
}
export default Form

