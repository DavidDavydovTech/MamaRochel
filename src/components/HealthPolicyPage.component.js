import React from 'react';
import {
    Container
} from 'reactstrap';

//Components
import Jumbotron from './Jumbotron.component';
import Body from './Body.component';
import banner from '../resources/images/temp-firefighter.jpg'

class HealthPolicyPage extends React.Component {


    render(){ return (<>
        <Jumbotron
            header={"Health Policy"}
            
            mini={true}
            
            image={banner}
        />

        <Container className="rowColor1" fluid={true}>

            <Body fill={false} content={<>
                wow
            </>}/>
        </Container>
    </>)}
}

export default HealthPolicyPage;