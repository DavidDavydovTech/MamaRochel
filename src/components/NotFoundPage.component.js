import React from 'react';
import {
    Container
} from 'reactstrap';


import '../resources/css/eyes.css';
class NotFoundPage extends React.Component {

    render(){ return (<>
        <Container className="rowColor1 eyes-container not-found " fluid={true}>
            <style>
                @import url('https://fonts.googleapis.com/css?family=Chango|Courgette&display=swap');
            </style> 

            <h3 style={{marginTop: "3rem"}}>Looks like you took a wrong turn....</h3>

            <h1>404</h1>
            <h2>Page not found.</h2>
            

            
        </Container>
    </>)}
}

export default NotFoundPage;