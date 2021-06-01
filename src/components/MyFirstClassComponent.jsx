import {Component} from "react"

class MyFirstClassComponent extends Component{
// in every Class you need to have render()
// STATE
// 

state = {
    name: "Kristian"
}
    render(){
       return <h2 className={this.props.myClass} onClick={() => this.setState({name: "Kristian clicked"})}>{this.props.titleText}{this.state.name}</h2>
    }
}
export default MyFirstClassComponent