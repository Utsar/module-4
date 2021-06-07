import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class D4Form extends React.Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmOTc4M2JlOWIxNTAwMTU1MDZlMmEiLCJpYXQiOjE2MjI5MzQxNjcsImV4cCI6MTYyNDE0Mzc2N30.bOPfkxKYrGxcDa3HLqUVf4UY7urlygOZ2VqeSgm8n0Q",
          },
        }
      );
      console.log(response);
      let comments = await response.json();
      this.setState({ comments });
    } catch (error) {}
  };
  render() {
    return (
      <InputGroup>
        <InputGroup.Text>Enter Your comments here</InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
    );
  }
}

export default D4Form;
