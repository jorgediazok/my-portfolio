import React, { Component } from "react";
import faker from "faker";


const Comments = (props) =>{
    return(

        <div className="comment">
        <a href="/" className="avatar"><img alt="avatar" src={faker.image.avatar()}></img></a>
        <div className="content">
            <a href="/" className="autor">{props.author}</a>
            <div className="metadata">
                <span className="date" style={{color:"white", padding:"5px"}}>{props.timeAgo}</span>
            </div>
            <div className="text" style={{color: "#66dac7", fontSize: "16px"}}>{props.post}</div>
        </div>
    </div>
    );
};

export default Comments;