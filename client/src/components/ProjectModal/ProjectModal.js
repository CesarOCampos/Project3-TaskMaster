import React, { useState} from 'react';
import "./style.css"
//import { Input } from "../Form";

const ProjectModal = ({ show, close }) => {

    const [projectName, setProjectName] = useState();
    const [projectDesc, setProjectDesc] = useState();
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
            if (projectName && projectDesc) {
                const response = await fetch('/api/projects', {
                    method: 'POST',
                    body: JSON.stringify({ projectname:projectName, projectdesc:projectDesc }),
                    headers: { 'Content-Type': 'application/json' },
                    });
                
                    if (response.ok) {
                    console.log("ya");
                    window.location.reload(false);
                    
                    } else {
                    alert(response.statusText);
                    }
            };
    }
    
    return(
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translate(0vh)' : 'translate(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <p>Create a New Project</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Project Name</h4>
                    <input
                onChange={event => setProjectName(event.target.value)}
                name="projectname"
                placeholder="enter project name"
                />
                    <h4>Project Description</h4>
                    <input
                onChange={event => setProjectDesc(event.target.value)}
                name="projectdesc"
                placeholder="enter project description"
                />
                </div>
                <div className="modal-footer">
                    <button
                    className="btn-submit"
                    disabled={!(projectName && projectDesc)}
                    onClick={handleFormSubmit}
                    
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}; 

export default ProjectModal;