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

function CreateNewTaskModal(props) {
  const { priorities, statusesTitles, createNewTask } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(statusesTitles[0]);
  const [priority, setPriority] = useState(priorities[0]);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleClear = () => {
    setModal(!modal);
    setName("");
    setDescription("");
    setStatus(statusesTitles[0]);
    setPriority(priorities[0]);
  };

  const handleCreate = () => {
    const newTask = { name, description, status, priority };
    createNewTask(newTask);
    toggleClear();
  };

  return (
    <div style={{marginTop: "16px"}}>
      <Button
        color="white"
        className="btn btn-outline-success"
        onClick={toggle}
      >
        Create New Task
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create new task</ModalHeader>
        <ModalBody>
          <div>
            {/* Input Task_name, Task_description */}
            <InputGroup>
              <InputGroupText>Title</InputGroupText>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
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
            <br />

            {/* Select Status */}
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                {statusesTitles.map((status, i) => (
                  <option key={i} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelect">Select status</label>
            </div>
            <br />

            {/* Select Priority */}
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                {priorities.map((priority, i) => (
                  <option key={i} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelect">Select priority</label>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* Button Create */}
          <Button
            color="primary"
            onClick={handleCreate}
            disabled={name === "" || description === ""}
          >
            Create
          </Button>{" "}
          {/* Button Cancel */}
          <Button color="secondary" onClick={toggleClear}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateNewTaskModal;
