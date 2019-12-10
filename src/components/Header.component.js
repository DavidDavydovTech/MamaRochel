import React from 'react';
import {
  Link
} from "react-router-dom";
import {
    Container,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import headerLogo from "../resources/images/logo.gif";
import navLogo from "../resources/images/logo_nav.gif";

class HeaderContent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            toggled: false
        }
    }

    toggleMenu = () => {
        console.log(this.state)
        console.log(this.state.toggled)
        this.state.toggled? this.setState({toggled: false}): this.setState({toggled: true});
    }

    resetMenu = () => {
        this.setState({toggled: false});
        window.scrollTo(0, 0);
    }


    render(){
        return(
            <header>
                {/* Start of Logo */}
                    <div className="logoContainer negatePadding container">
                        <Link onClick={this.resetMenu} to="/"><img className="logo" src={headerLogo} height="100px" alt="Logo"/></Link>
                        <a className="phoneBig" style={{fontSize: "1rem", fontWeight: "bold",color: "black", verticalAlign: "calc(-25px)", paddingLeft: "2rem"}} href="tel:3477642484">+1 (347) 764-2484</a>
                    </div>
                 {/* End of Logo</div> */}


                <Nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{zIndex: "100" , marginBottom: "0rem"}}>
                    <Container className="negatePadding">

                        <div className="hiddenLogo">
                            <Link onClick={this.resetMenu} to="/"><img className="hiddenLogo" src={navLogo} height="60px" alt="Nav Logo White"/></Link>
                        </div>

                        <a className="phoneSmall" style={{color: "white"}} href="tel:3477642484">+1 (347) 764-2484</a>
                        
                        <NavbarToggler onClick={this.toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                            Menu
                        </NavbarToggler>

                        <Collapse isOpen={this.state.toggled} className="negatePadding" navbar>
                            <Nav className="mr-auto" navbar >
                                <NavItem >
                                    <Link onClick={this.resetMenu} to="/"><NavLink active active>
                                        Home
                                    </NavLink></Link>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle style={{color: "white"}} nav caret>
                                        Applications & Documents
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <Link onClick={this.resetMenu} to="/enrollment/"><DropdownItem style={{color: "white"}}>Enrollment Forms</DropdownItem></Link>
                                        <Link onClick={this.resetMenu} to="/handbook/"><DropdownItem style={{color: "white"}}>Parent Handbook</DropdownItem></Link>
                                        
                                        <div className="dropdown-divider"></div>
                                        <DropdownItem disabled>Apply Online (Coming Soon!)</DropdownItem>
                                    
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle style={{color: "white"}} nav caret>
                                        Health & Safety
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <Link onClick={this.resetMenu} to="/fire_safety/"><DropdownItem style={{color: "white"}}>Fire Safety</DropdownItem></Link>
                                        <DropdownItem disabled>Health Policy</DropdownItem>

                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle style={{color: "white"}} nav caret>
                                    Our Program
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <Link onClick={this.resetMenu} to="/infants/"><DropdownItem style={{color: "white"}}>Infants</DropdownItem></Link>
                                        <Link onClick={this.resetMenu} to="/toddlers/"><DropdownItem style={{color: "white"}}>Toddlers</DropdownItem></Link>

                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <NavItem className="nav-item">
                                    <NavLink active className="nav-link disabled" href="#">Download Our App (Coming Soon!)</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </Container>
                </Nav>

                {/* <div class="padder">This element is used for margins. You shouldn't see this.</div> */}
            </header>
        )
    }
}

export default HeaderContent