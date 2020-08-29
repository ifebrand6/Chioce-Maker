import React from 'react'
import Result from './Result'
import Form from './Form'
import PopularityTracker from './PopularityTracker'


const tracker = (localStorage.length < 1) ? []: JSON.parse(localStorage.getItem('question'));
class Main extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                question: "This is a random dummy question",
                possible_choices: ["1st dummy choice!", "2nd dummy choice!"],
                submitted: false,
                most_frequently_ask_question: ''
            }
    }
    handleOnchange = (e)=>{
        let value = e.target.value
        let foramttedValue  = value.replace('?', "")
        let name = e.target.name
        if (name === 'question') {
            this.setState({
                [name]: foramttedValue
            })
            } else if (name === 'possible_choices') {
                let id = e.target.id
                let items = [...this.state.possible_choices];
                let item = {...items[id]};
                item = value;
                items[id] = item;
                this.setState({
                    possible_choices: items
                });
                
            }
       
       
    }
    addNewInput = ()=> {
        this.setState({ 
            possible_choices: this.state.possible_choices.concat(['Random Dummy Choice'])
            })
        
    }
    removeInput = (e)=> {
        var array = [...this.state.possible_choices]; 
        var index = e.target.id
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({possible_choices: array});
        }
    }
    resetQuestion = ()=>{
        this.setState({
            question: "This is a dummy question",
            possible_choices: ["1st dummy ans", "2nd Second ans "],
            submitted: false
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
       tracker.push(this.state.question.trim().toUpperCase())
       localStorage.setItem('question', JSON.stringify(tracker))
       if (this.state.possible_choices.length > 1) {
        this.setState({
            submitted: true,
            most_frequently_ask_question: getMostPopularQuestion(JSON.parse(localStorage.getItem('question')))
        })  
       }else{
           console.log("You must have more than 2 options")
       }

    }
    componentDidMount(){
       if (localStorage.length > 0){
            this.setState({
                most_frequently_ask_question: getMostPopularQuestion(JSON.parse(localStorage.getItem('question')))
            })
       }
    }
     openForm() {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("settings-trigger").style.display = "none";
        }
        
         closeForm() {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("settings-trigger").style.display = "flex";

        }
    render() { 
        const evalutor = this.state.submitted ? <Result data={this.state} resetQuestion={this.resetQuestion}/> : <Form data={this.state} handleOnSubmit={this.handleOnSubmit} handleOnchange={this.handleOnchange} addNewInput={this.addNewInput} removeInput={this.removeInput} />
        const popularityEvalutor = (localStorage.length >= 1) ? <PopularityTracker most_frequently_ask_question={this.state.most_frequently_ask_question}/> : <div>NO Most Popular question yet</div>
        return ( 
            <div className="main">
            <section className="signup">
                <div className="container">
                          {evalutor}
                    </div>
             </section>
             <div id="settings-trigger" onClick={this.openForm}><i className="zmdi zmdi-comment-list"></i>
</div>
            <div className="chat-popup" id="myForm">
            <form action="/action_page.php" className="form-container">
                <h5>Popular Question Report</h5>

                {popularityEvalutor}

                <button type="button" className="btn cancel" onClick={this.closeForm}>X</button>
            </form>
            </div>
            </div>
         );
    }
}
export default Main;
function getMostPopularQuestion(questionTracker) {
    if(questionTracker.length === 0)
    return null;
var frequencyMap = {};
var maxAskedQuestion = questionTracker[0], maxCount = 1;
for(var i = 0; i < questionTracker.length; i++)
{
    var question = questionTracker[i];
    if(frequencyMap[question] == null)
        frequencyMap[question] = 1;
    else
        frequencyMap[question]++;  
    if(frequencyMap[question] > maxCount)
    {
        maxAskedQuestion = question;
        maxCount = frequencyMap[question];
    }
}
return maxAskedQuestion;
    }