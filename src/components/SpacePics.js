import React from 'react';
import './SpacePics.scss';
import { Card } from 'semantic-ui-react';

function SpacePics(props) {
    console.log(props);
    return (
        <Card className="space-pics">
            <h2>{props.title}</h2>
            <img src={props.url} />
            <div>{props.date}</div>
            <p>
                {props.explanation}
            </p>
        </Card>
    )
}

export default SpacePics; 