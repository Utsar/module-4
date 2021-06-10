import { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Books extends Component {
  state = {
    name: "Kristian",
  };
  handleClick = () => {
    console.log(this);
  };

  componentDidMount=async()=> {
    console.log("ComponentDidMount");

    this.setState({
      state: "beer",
      toDoObject: null
    });

    Let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
    Let toDo = await response.json()
    this.setState({
        toDoObject: toDo
    })
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  render() {
    return <h1 onClick={this.handleClick}>{this.state.name}</h1>;
  }
}

export default Books;
