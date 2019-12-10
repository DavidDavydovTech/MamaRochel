import React from 'react';
import {
    Col
} from 'reactstrap';


class BodyHeader extends React.Component {
    
    render(){return (<>
    <Col xs={4}></Col>
    <Col xs={10} md={4} style={{minHeight: "0px"}}>
        <h1 style={{marginTop: "1rem"}}>{this.props.content.toUpperCase()}</h1>

    </Col>
    <Col xs={4}></Col>
    </>)}
}

export default BodyHeader;