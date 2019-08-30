import React from 'react';
import './SpacePics.scss';
import { Card, Image } from 'semantic-ui-react';


function SpacePics(props) {
    console.log(props);
    return (
        <Card className="space-pics">
         <Image src={props.url} />
            <Card.Content>
            <h2>{props.title}</h2>
            <div>{props.date}</div>
            <Card.Description className="content">
                {props.explanation}
            </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default SpacePics; 