import React, { useState } from "react";
import "./style.css";

const TaskModal = ({ show, close }) => {
    const [taskname, settaskname] = useState();
    //const [taskDesc, setTaskDesc] = useState();
    const [taskStatus, setTaskStatus] = useState();
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
            if (taskname && taskStatus) {
                const response = await fetch("/api/task", {
                    method: 'POST',
                    body: JSON.stringify({ TaskName: taskname, taskStatus: taskStatus }),
                    //body: JSON.stringify({ taskname: taskname, taskdesc: taskDesc}),
                    headers: { 'Content-Type': 'application/json' },
                });
                (response.ok) ? window.location.reload(false) : alert(response.statusText);
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
                    onchange={event => settaskname(event.target.value)} 
                    name="taskname" 
                    placeholder="Task Name"
                    ></input>
                    {/* <h4>Task description</h4>
                    <input 
                    className="input-desc" 
                    onchange={event => setTaskDesc(event.target.value)} 
                    name="taskdesc" 
                    placeholder="Task Description"
                    ></input> */}
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
    );
};

export default TaskModal;