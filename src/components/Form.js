import React from 'react'
function Form(props) {
    const arr = props.data.possible_question.map((dd,index)=>{
       return <div key={index}>
        <input type="text" placeholder="Enter Possible answer"  onChange={props.handleOnchange} name="possible_question" id={index}/>
        <button type="button" id={index} onClick={props.removeInput}>Remove field</button>
       </div>
    })
    return (
        <div>
        <hr/>
        <form onSubmit={props.handleOnSubmit}>
        <label>  question</label>
            <br/>
            <input type="text" placeholder="Enter Question"  onChange={props.handleOnchange} name="question"/>
            <br/>
            {arr}
            <button onClick={props.addNewInput} type="button">Add new field</button>
            <br/>
            <input type="submit" value="submit  "/>
        </form>
    

        
                <hr/>
        </div>
    )
}
export default Form