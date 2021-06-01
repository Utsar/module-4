import {Carousel, Col, Container, Row} from "react-bootstrap"
import dishes from "../data/menu.json"
import {Component} from "react"


class Home extends Component {


    state = {
        selected: null
    }

    render(){
        return(
<Container>
    <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
        <Carousel>
            {
          dishes.map((dish, i) =>(  
            <Carousel.Item key={dish.id} onClick={()=>this.setState({
                selected: dish
            })}>
            <img
              className="d-block w-100"
              src={dish.image}
              alt={"First slide" + (i +1)}
            />
            <Carousel.Caption>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </Carousel.Caption>
          </Carousel.Item>)
          )
          }
</Carousel>
        </Col>
    </Row>

</Container>
        )
}
}

export default Home