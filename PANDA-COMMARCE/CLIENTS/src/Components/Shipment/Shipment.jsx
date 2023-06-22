import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { CartContext } from '../../App'; 
import Notification from '../Notification/Notification';
import "./Shipment.css"

function Shipment() {
  const [message, setMessage] = useState("")
  const [cart, setCart] = useContext(CartContext)
  const [order, SetOrder] = useState({
    name: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
    phone: "",
    city: "",
    zip: "",
    order: cart
  })
  const handleOrderChange = (e) => {
    SetOrder({ ...order, [e.target.name]: e.target.value })
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault() 
 
    fetch("http://localhost:8000/order/createOrder", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(order)
    }).then(res => res.json())
      .then(data => { 
        setMessage(data.message)
        if (data.message === "order is fully completed") {
          setCart([]); 
        }
      })
  }


  return (
    <div className="shipmentContainer">
     { message ===  "order is fully completed" ?  <Notification message={message} /> :  <h4 className='text-danger'>Form Must Be Fill Up</h4> }
      <h2 className='text-center  my-3'>Fill up the form to submit the order</h2>
      <Form onSubmit={handleOrderSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleOrderChange} name="name" type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={handleOrderChange} name="email" type="email" placeholder="Enter Email" />
          </Form.Group>
        </Row>
        {/*  address   */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Present Address</Form.Label>
            <Form.Control onChange={handleOrderChange} name="presentAddress" type="text" placeholder="Present Address" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Permanent Address</Form.Label>
            <Form.Control onChange={handleOrderChange} name="permanentAddress" type="text" placeholder="Permanent Address" />
          </Form.Group>
        </Row>


        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone No</Form.Label>
          <Form.Control onChange={handleOrderChange} type="number" name="phone" placeholder="Phone No" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>City</Form.Label>
            <Form.Select onChange={handleOrderChange} name="city" defaultValue="Choose...">
              <option>Dhaka</option>
              <option >Rangpur    </option>
              <option>Chittagong </option>
              <option>Rajshahi </option>
              <option>Khulna  </option>
              <option>Barisal  </option>
              <option>Sylhet   </option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={handleOrderChange} name="zip" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit Order
        </Button>
      </Form>

    </div>
  );
}

export default Shipment;