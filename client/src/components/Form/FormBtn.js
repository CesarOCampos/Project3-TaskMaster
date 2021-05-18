import React from "react";

const FormBtn = (show, close) => (
    <div style={{
        transform: show ? 'translate(0vh)' : 'translate(-100vh)',
        opacity: show ? '1' : '0'
    }}>
    <button>Submit</button>
    </div>
);

export default FormBtn;


