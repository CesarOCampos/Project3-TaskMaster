import React, { useState} from "react";
import "./style.css";

const TaskModal = ({ show, close }) => {
    const [taskName, setTaskName] = useState();
    const [taskDesc, setTaskDesc] = useState();
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
            if (taskName && taskDesc) {
                const response = await fetch("/api/tasks", {
                    method: 'post',
                    body: JSON.stringify({ taskname: taskName, taskdesc: taskDesc }),
                    headers: { 'Content-Type': 'application/json' },
                });
                (response.ok) ? console.log('We are good!') : alert(response.statusText);
        };
    }

    return (
        <div
        className="modal-wrapper"
        style={{
            transform: show ? "translate(0vh)" : "translate(-100vh)",
            opacity: show ? "1" : "0",
        }}>
            <div className="modal-header">
                <p>Create a New Task</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Task Name</h4>
                    <input
                        className="input-name"
                        onchange={event => setTaskName(event.target.value)}
                        name="taskname"
                        placeholder="Task Name"
                    ></input>
                    <h4>Task description</h4>
                    <input
                        className="input-desc"
                        onchange={event => setTaskDesc(event.target.value)}
                        name="taskdesc"
                        placeholder="Task Description"
                    ></input>
                    {/* <h4>Team Members (if any) </h4>
                    <input className="input-team"></input> */}
                </div>
                <div className="modal-footer">
                    <button className="btn-submit"
                        disabled={!(taskName && taskDesc)}
                        onclick={handleFormSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;