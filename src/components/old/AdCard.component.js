import React from 'react';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';


class AdCard extends React.Component {
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

    
    render(){return (<Card style={{marginBottom: "1rem"}}>

        <CardBody>
            <img src={this.state.image} width="75%" height="width" class="rounded-circle" style={{marginBottom: "1rem;"}}
                alt="Perfect Service"/>
            <h4 class="card-title">{this.props.title}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{this.props.subtitle}</h6>
            <CardText>
                {this.props.body}
            </CardText>
            {this.props.disclaimer ? <h6 class="card-subtitle mb-2 text-muted"><i>{this.props.disclaimer}</i></h6> : <></>}
        </CardBody>
    
    </Card>)}
}

export default AdCard;