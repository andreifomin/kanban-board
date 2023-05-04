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

function UpdateTaskModal(props) {
  const { task, updateTask } = props;

  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleClear = () => {
    setModal(!modal);
    setName(task.name);
    setDescription(task.description);
    setStatus(task.status);
    setPriority(task.priority);
  };

  const handleUpdate = () => {
    const updatedTask = { name, description, status, priority };
    updateTask(task._id, updatedTask);
    toggleClear();
  };

  return (
    <>
      <Button
        color="white"
        className="btn btn-outline-warning"
        style={{minWidth: "80px"}}
        onClick={toggle}
      >
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update task</ModalHeader>
        <ModalBody>
          <div>
            {/* Input Task_name, Task_description */}
            <InputGroup>
              <InputGroupText>Name</InputGroupText>
              <Input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupText>Description</InputGroupText>
              <Input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </InputGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* Button Update */}
          <Button
            color="primary"
            onClick={handleUpdate}
            disabled={
              name === task.name &&
              description === task.description &&
              status === task.status &&
              priority === task.priority
            }
          >
            Update
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

export default UpdateTaskModal;
