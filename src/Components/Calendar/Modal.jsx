import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Example = (props) => {
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [selectedTimeStart, setSelectedTimeStart] = useState("10:00");
  const [selectedTimeEnd, setSelectedTimeEnd] = useState("10:00");

  const handleTimezoneChange = (newTimezone) => {
    console.log(newTimezone.value);
    setSelectedTimezone(newTimezone.value);
  };

  const handleTimeChangeStart = (newTime) => {
    console.log(newTime);
    setSelectedTimeStart(newTime);
  };

  const handleTimeChangeEnd = (newTime) => {
    console.log(newTime);
    setSelectedTimeEnd(selectedTimeEnd);
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
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Example;
