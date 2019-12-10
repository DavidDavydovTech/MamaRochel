import React from 'react';
import {
    Container,
    Row
} from 'reactstrap';


class Body extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            image: undefined
        }
    }

    componentDidMount = () => {
        if(this.props.image){
            this.setState({
                image: this.props.image
            })
        }
    }

    
    render(){return (
        <Container 
        className={this.props.fill? "cardFixer card bodyPadding": "bodyPadding"}>
            <Row className="d-flex justify-content-center">
                {this.props.content}
            </Row>
        </Container>
    )}
}

export default Body;