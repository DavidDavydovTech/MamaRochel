import React from 'react';
import {
  Link
} from "react-router-dom";
import {
    Container,
    Col,
    Button,
} from 'reactstrap';

class Jumbotron extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            image: undefined
        }
    }

    componentDidMount = () => {
        console.log(this.props.image)
        if(this.props.image){
            this.setState({
                image: this.props.image
            })
            console.log(this.state.image)
        }

        console.log(this.state.image)
    }

    renderButton = () => {

        if(this.props.button === true && this.props.buttonLink && this.props.buttonBody){
            
            return (<Link to={this.props.buttonLink}>
                <Button className="btn btn-success btn-lg">
                    {this.props.buttonBody}
                </Button>
            </Link>)
        } else { return <></>}

    }

    
    render(){ return (<>{this.props.mini?
        <Container className="attentionGrabberMini attentionGrabber mission-statement image" style = {{maxHeight: "19rem", backgroundImage: 'url(' + this.state.image + ')'}} fluid>
            <Col className="pageDetailTextContainer"  style={{backgroundColor: "rgba(0,0,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center"}} xs={12}>
                <h1 style={{verticalAlign: "50%" ,color: "white"}}>
                    <b>{this.props.header.toUpperCase()}</b>
                </h1>
            </Col>
        </Container>
    :
        <Container className="attentionGrabber mission-statement image" style = {{backgroundImage: 'url(' + this.state.image + ')'}} fluid>
            <Col className="pageDetailTextContainer" xs={12} md={4}>
                <h1 style={{color: "white"}}>
                    {this.props.header}
                </h1>

                <blockquote className="blockquote">
                    
                    <p className="mb-0">
                        {this.props.body}
                    </p>

                    {
                        this.props.footer? 
                            <footer className="blockquote-footer">
                                {this.props.footer}
                            </footer>
                        :
                            <></>
                    }

                    <this.renderButton/>
                    
                </blockquote>
            </Col>
        </Container>
    }</>)}
}

export default Jumbotron;