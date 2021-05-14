import React from "react";
import "./style.css";

const TaskModal = ({ show, close }) => {
    return (
        <div
        className="modal-wrapper"
        style={{
            transform: show ? "translate(0vh)" : "translate(-100vh)",
            opacity: show ? "1" : "0",
        }}
        >
        <div className="modal-header">
            <p>Create a New Task</p>
            <span onClick={close} className="close-modal-btn">
            x
            </span>
        </div>
        <div className="modal-content">
            <div className="modal-body">
            <h4>Task Name</h4>
            <input className="input-name"></input>
            <h4>Task description</h4>
            <input className="input-desc"></input>
            <h4>Team Members</h4>
            <input className="input-team"></input>
            </div>
            <div className="modal-footer">
            <button className="btn-submit">Submit</button>
            </div>
        </div>
        </div>
    );
};

export default TaskModal;
