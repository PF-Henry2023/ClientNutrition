import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { loadStripe } from '@stripe/stripe-js';
const keyPublicStripe = "pk_test_51NiNMSL13IBKWmcBnqVCCI0Cc5913gnkwN8OVf2SWTDKiykqi1Ehb0i2bdTrMVTM5ZUpQLhCGgTWR81bvdxhU42w001HRMbgd9"
const stripePromise = loadStripe(keyPublicStripe);

const Example = (props) => {

  const handleClick = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;

    // Realizar una petición al backend para crear una sesión de pago
    const response = await fetch("http://localhost:3001/create-checkout-session", {
        method: "POST",
    });

    const session = await response.json();

    // Redirigir al flujo de pago de Stripe
    const result = await stripe.redirectToCheckout({
        sessionId: session.id,
    });

    if(result.error) {
        console.error(result.error.message);
    }
};


  return (
    <>
      <Modal
        show={props.show}
        fullscreen={props.fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header>
          <Modal.Title>Agendar cita:</Modal.Title>
          <Button variant="outline-danger" onClick={props.closedButton}>
            Close
          </Button>{" "}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripcion:</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>Inicio:</Form.Label>
              <TimePicker
                onChange={handleTimeChangeStart}
                value={selectedTimeStart}
              />
            </Form.Group> */}
            {/* <Form.Group>
              <Form.Label>Fin:</Form.Label>
              <TimePicker
                onChange={handleTimeChangeEnd}
                value={selectedTimeEnd}
              />
            </Form.Group> */}
            {/* <Button variant="outline-success" onClick={() => openNewWindow()}>Reservar cita</Button> */}
            <Button variant="outline-primary" onClick={handleClick}>Reservar cita</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Example;
