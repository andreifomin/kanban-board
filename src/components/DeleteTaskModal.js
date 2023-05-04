import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";

function DeleteTaskModal(props) {
  const { task, deleteTask } = props;

  const [enteredName, setEnteredName] = useState("");

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleClear = () => {
    setModal(!modal);
    setEnteredName("");
  };

  const handleDelete = () => {
    deleteTask(task._id);
    toggleClear();
  };

  return (
    <>
      <Button
        color="white"
        className="btn btn-outline-danger"
        style={{minWidth: "80px"}}
        onClick={toggle}
      >
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete task</ModalHeader>
        <ModalBody>
          <div>
            <p>Enter task name to confirm:</p>
            <p className="fs-5 fw-semibold text-center">{task.name}</p>
          </div>

          {/* Input Task_name */}
          <div style={{ marginTop: "24px" }}>
            <InputGroup>
              <InputGroupText>Name</InputGroupText>
              <Input
                value={enteredName}
                onChange={(event) => setEnteredName(event.target.value)}
              />
            </InputGroup>
          </div>
        </ModalBody>

        <ModalFooter>
          {/* Button Delete */}
          <Button
            color="danger"
            onClick={handleDelete}
            disabled={enteredName !== task.name}
          >
            Delete
          </Button>{" "}
          {/* Button Cancel */}
          <Button color="secondary" onClick={toggleClear}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default DeleteTaskModal;
