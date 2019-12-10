import React from 'react';
import {
    Container
} from 'reactstrap';

class Footer extends React.Component {

    render(){ return (
        <footer className="bg-primary navbar" style={{margin: "0", boxShadow: "0px -10px 30px #000000 !important"}}>
            <Container style={{textAlign: "center", color: "#ffffff"}}>
                <p className="lead" style={{fontSize: "0.8rem", textAlign: "center"}}>Made with coffee & love by <a href="http://www.daviddavydov.tech" style={{color: "#ffffff"}}><u>David Davydov <i>.tech</i></u></a></p>
                <p className="lead" style={{fontSize: "0.8rem", textAlign: "center"}}>Icons by <a href="https://icons8.com" style={{color: "#ffffff"}}><u>Icons8 <i>.com</i></u></a></p>
            </Container>
        </footer>
    )}
}

export default Footer;