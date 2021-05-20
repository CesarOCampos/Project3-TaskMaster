import React, { useState } from "react";
import "./style.css";

const TaskModal = ({ see, close }) => {
    const [taskname, settaskname] = useState();
    const [taskStatus, setTaskStatus] = useState();
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
            if (taskname && taskStatus) {
                const response = await fetch("/api/task", {
                    method: 'POST',
                    body: JSON.stringify({ TaskName: taskname, taskStatus: taskStatus }),
                    headers: { 'Content-Type': 'application/json' },
                });
                (response.ok) ? window.location.reload(false) : alert(response.statusText);
        };
    }

    return (
    <>
        <div
        className="modal-wrapper"
        style={{
            transform: see ? "translate(0vh)" : "translate(-100vh)",
            opacity: see ? "1" : "0",
        }}>
            <div className="modal-header">
                <p>Create a New Task</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
        <div className="modal-content">
            <div className="modal-body">
            <h4>Task Name</h4>
            <input className="input-name"></input>
            <h4>Task description</h4>
            <input className="input-desc"></input>
            <h4>Team Members (if any) </h4>
            <input className="input-team"></input>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Task Name</h4>
                    <input 
                    className="input-name" 
                    onchange={event => settaskname(event.target.value)} 
                    name="taskname" 
                    placeholder="Task Name"
                    ></input>
                    <h4>Task Status</h4>
                    <input 
                    className="input-desc" 
                    onchange={event => setTaskStatus(event.target.value)} 
                    name="taskstatus" 
                    placeholder="Task Status"
                    ></input>
                </div>
                <div className="modal-footer">
                    <button
                    className="btn-submit"
                    disabled={!(taskname && taskStatus)}
                    onClick={handleFormSubmit}
                    >Submit</button>
                </div>
            </div>
            </div>
        </div>
    </>
    );
};

export default TaskModal;