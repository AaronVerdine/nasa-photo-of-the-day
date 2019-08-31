import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function ToggleButton()  {

    return (
        <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>READ MORE!</Button>
            <UncontrolledCollapse toggler='#toggler'>
                <Card>
                    <CardBody>
                        
                    </CardBody>
                </Card>

            </UncontrolledCollapse>
        </div>
    )
}

export default ToggleButton;