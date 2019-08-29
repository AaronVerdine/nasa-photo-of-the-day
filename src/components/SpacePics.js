import React from 'react';

function SpacePics(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} />
            <div>{props.date}</div>
            <p>
                {props.explanation}
            </p>
        </div>
    )
}

export default SpacePics;