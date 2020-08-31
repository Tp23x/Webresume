import React, {Component} from 'react';
import Progress from '../Progress';


export default class Ability extends Component {
    
   
   // 80 >= bg-info, 65 >= bg-success, 50 >= bg-warning,  <= 50 bg-danger
   state = {
    language: [
        {name: "C", percent: "80%", color: "bg-info"},
        {name: "JAVA", percent: "70%", color: "bg-info"},
        {name: "PHP", percent: "80%", color: "bg-info"},
        {name: "PYTHON", percent: "90%", color: "bg-danger"},
        {name: "HTML5", percent: "80%", color: "bg-info"},
        {name: "C#", percent: "70%", color: "bg-success"},
        {name: "JavaScript", percent: "84%", color: "bg-info"},
        {name: "SQL", percent: "82%", color: "bg-info"},
        {name: "XML", percent: "30%", color: "bg-danger"},
        {name: "CSS", percent: "75%", color: "bg-success"},
        {name: "jQuery", percent: "77%", color: "bg-success"},
        {name: "REACT", percent: "60%", color: "bg-warning"},
        {name: "REACT-NATIVE", percent: "66%", color: "bg-success"},
        {name: "IONIC", percent: "20%", color: "bg-danger"},
        {name: "ANGULAR", percent: "0%", color: "bg-danger"},
        {name: "Shell-Script", percent: "50%", color: "bg-danger"}
    ]
   }

        render(){
            return (
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm ">
                        <div className="card-header bg-dark">
                            <h4 className="my-0 font-weight-normal bg-dark text-white">Ability</h4>
                        </div>
                        <div className="card-body">
                            {this.state.language.map(obj => <Progress data={obj}></Progress>)}
                        </div>
                    </div>  
                </div>
            )
        }
     
}