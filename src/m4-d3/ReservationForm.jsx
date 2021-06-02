import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class ReservationForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPersons: 1,
      smoking: false,
      dateTime: "",
      specialRequests: "",
    },
  };

  inputChange = (e) => {
    this.setState({
      reservation: {
        ...this.state.reservation,
        [e.target.id]: e.target.value,
      },
    });
  };
  submitReservation = (e) =>{
      e.preventDefault()

  }
  render() {
    return (
      <Form onSubmit={this.submitReservation}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter email"
            value={this.state.reservation.name}
            onChange={(e) => this.inputChange(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="nme"
            id="phone"
            value={this.state.reservation.phone}
            onChange={(e) => this.inputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ReservationForm;
