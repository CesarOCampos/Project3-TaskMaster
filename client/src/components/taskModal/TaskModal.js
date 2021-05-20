import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const TaskModal = ({ see, close }) => {

        const classes = useStyles();
        const [student, setStudent] = React.useState('');
        const [taskName, setTaskName] = useState();

        const handleChange = (event) => {
            setStudent(event.target.value);
        };

        const handleFormSubmit = async (event) => {
            event.preventDefault();
            
            let myNewTaskObj = {
                taskname: taskName,
                status: "IN PROGRESS",
                student_id: student,
                project_id: 2
            }

            const response = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(myNewTaskObj),
                headers: { 'Content-Type': 'application/json' },
                });
            
                if (response.ok) {
                console.log("task");
                window.location.reload(false);
                
                } else {
                alert(response.statusText);
                }
        }

        return (
            <div
                className="modal-wrapper"
                style={{
                    transform: see ? "translate(0vh)" : "translate(-100vh)",
                    opacity: see ? "1" : "0",
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
                        <input className="input-team"
                            onChange={event => setTaskName(event.target.value)}
                            name="taskname"
                            placeholder="Task Name"
                        />
                        <h4>Team Members: </h4>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Team Members:</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={student}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Cesar Campos</MenuItem>
                                <MenuItem value={2}>George Huliaris</MenuItem>
                                <MenuItem value={3}>Matthew Miller</MenuItem>
                                <MenuItem value={4}>Susan Fujii</MenuItem>
                            </Select>
                        </FormControl>



                    </div>
                    <div className="modal-footer">
                    <button
                    className="btn-submit"
                    onClick={handleFormSubmit}
                    >Submit</button>
                    </div>
                </div>
            </div>
        );
    };

    export default TaskModal;
