import React , {Component} from 'react'
import Digit from './Digit'
import './Calc.css'

class Calc extends Component {
    state = {
        result:0,
        num1:'',
        opr:'',
        num2:'',
        flag:0
        
    }

    
    digitHandler = (event, num) => {
        switch(this.state.flag) {
            case 0: this.setState( 
                {
                    result:0,
                    num1:'',
                    opr:'',
                    num2:''
                }
            )
            this.setState({num1:num})
            this.setState({flag:1});break;
            case 1: this.setState({num1:this.state.num1+num});break;
            case 2: this.setState({num2:this.state.num2+num});break;
            default: return '';break;
        }
    }


    signHandler = (event, sign) => {
        this.setState({opr:sign})
        this.setState({flag:2});
    }

    reset = () =>{this.setState(
        {
        result:0,
        num1:'',
        opr:'',
        num2:'',
        flag:0
            }
        )
    }

    calculate = () => {
        let number1 = parseInt(this.state.num1)
        let number2 = parseInt(this.state.num2)
        let opr = this.state.opr
        this.setState({flag:0});
        switch(opr) {
            case '+': this.setState({result:number1+number2});break;
            case '-': this.setState({result:number1-number2});break;
            case ':': this.setState({result:number1/number2});break;
            case '*': this.setState({result:number1*number2});break;
            default: alert('wrong');break;
        }    
    }

    render(){
        return (
            <React.Fragment>
                <Digit sign="0" click={this.digitHandler}/>
                <Digit sign="1" click={this.digitHandler}/>
                <Digit sign="2" click={this.digitHandler}/>
                <Digit sign="3" click={this.digitHandler}/>
                <Digit sign="4" click={this.digitHandler}/>
                <Digit sign="5" click={this.digitHandler}/>
                <Digit sign="6" click={this.digitHandler}/>
                <Digit sign="7" click={this.digitHandler}/>
                <Digit sign="8" click={this.digitHandler}/>
                <Digit sign="9" click={this.digitHandler}/>
                <br/>
                <Digit sign="+" click={this.signHandler}/>
                <Digit sign="-" click={this.signHandler}/>
                <Digit sign=":" click={this.signHandler}/>
                <Digit sign="*" click={this.signHandler}/>
                <Digit sign='=' click={this.calculate} />
                <Digit sign='AC' click={this.reset} />
                <h1 className='result'>{this.state.num1}{this.state.opr}{this.state.num2}={this.state.result}</h1>
                
            </React.Fragment>
            
        )
    }

    
}

export default Calc;