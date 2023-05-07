import React from "react";

const View = ({ id,title,name }) => {
    return (
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>

            <h1>{title}</h1>
            <h1>{name}</h1>

        </div>
    );
};

export default View;
