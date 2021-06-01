import {Component} from "react"
import LabelComponent from "./LabelComponent"

class Counter extends Component {
    state = {
        amount: 0
    }

    increase  = () => this.setState({amount:this.state.amount+1})
    render(){
        return(
            <div>
                <button onClick={this.increase}>+</button>
                <div>{this.state.amount}</div>
                <button onClick={() =>this.setState({amount:this.state.amount-1})}>-</button>
                <LabelComponent counter={this.state.amount}/>
            </div>
        )
    }
}
export default Counter