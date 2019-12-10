import React from 'react';
import {
    Container,
    Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
 
//Components
import Jumbotron from './Jumbotron.component';
import Body from './Body.component';
import BodyHeader from './BodyHeader.component';
import PdfViewer from './PdfViewer.component';

//Images
import banner from '../resources/images/enrollment_bg_xl.jpg'

//Documents
import RegistrationForm from '../resources/documents/Mama Rochel - Registration Form.pdf'
import TopicalForm from '../resources/documents/Mama Rochel - Authorization to Apply Topical Preparations.pdf'
import InfantFeedingForm from '../resources/documents/Mama Rochel - Infant Feeding Agreement.pdf'
import MedicalForm from '../resources/documents/Mama Rochel - Medical Statement.pdf'
import NappingForm from '../resources/documents/Mama Rochel - Napping Agreement.pdf'
import AllForms from    '../resources/documents/Mama Rochel - All Registration Forms.zip'

class EnrollmentPage extends React.Component {


    render(){ return (<>
        <Jumbotron
            header={"Enrollment Forms"}
            
            body={"Hello there, we're glad you're interested in enrolling with us! Below is a list of every document you'll need in order to enroll in Mama Rochel's Daycare. You can choose to either download the PDF so you can print our enrollment forms later/offline, or you can print it directly to any printer on your network. We also suggest you download and read the Parent's Handbook if you havent already. We hope to see you soon!"}
            
            image={banner}
        />

        <Container className="rowColor1" fluid={true}>
            <Body content={<> 
                <BodyHeader style={{width: "100%"}} content ="Previews & Downloads"/>
            </>}/>

            <Body content={<> 
                <Col className="card"  style={{backgroundColor: "transparent", borderWidth: "0rem", minHeight: "0px", paddingLeft: "1rem", textAlign: "left"}} xs={12} md={6}>
                    <h4 style={{textAlign: "center", padding: "1rem"}}>Table of Contents</h4>
                    <ul>

                        <li><Link to={AllForms} rel="noopener noreferrer" target="_blank" download>Download All (.zip)</Link></li>
                        <li><AnchorLink href="#Sec1">Registration Form</AnchorLink></li>
                        <li><AnchorLink href="#Sec2">Child in Care Medical Statement Form</AnchorLink></li>
                        <li><AnchorLink href="#Sec3">Authorization to Apply Topical Preparations Form</AnchorLink></li>
                        <li><AnchorLink href="#Sec4">Infant Feeding Agreement Form</AnchorLink></li>
                        <li><AnchorLink href="#Sec5">Napping Agreement Form</AnchorLink></li>
                    </ul>
                </Col>
            </>}/>

            <Body fill={false} content={<>
                <Col xs={12}><h2 id="Sec1" style={{textAlign: "center", paddingTop: "2rem"}}>Registration Form</h2></Col>
                <Col xs={12} md={8} style={{width: "100%", height: "auto"}}>
                    <PdfViewer pdf={RegistrationForm} />
                </Col>

                <Col xs={12}><h2 id="Sec2" style={{textAlign: "center", marginTop: "2rem"}}>Child in Care Medical Statement Form</h2></Col>
                <Col xs={12} md={8} style={{width: "100%", height: "auto"}}>
                    <PdfViewer pdf={MedicalForm} />
                </Col>

                <Col xs={12}><h2 id="Sec3" style={{textAlign: "center", marginTop: "2rem"}}>Authorization to Apply Topical Preparations Form</h2></Col>
                <Col xs={12} md={8} style={{width: "100%", height: "auto"}}>
                    <PdfViewer pdf={TopicalForm} />
                </Col>

                <Col xs={12}><h2 id="Sec4" style={{textAlign: "center", marginTop: "2rem"}}>Infant Feeding Agreement Form</h2></Col>
                <Col xs={12} md={8} style={{width: "100%", height: "auto"}}>
                    <PdfViewer pdf={InfantFeedingForm} />
                </Col>

                <Col xs={12}><h2 id="Sec5" style={{textAlign: "center", marginTop: "2rem"}}>Napping Agreement Form</h2></Col>
                <Col xs={12} md={8} style={{width: "100%", height: "auto"}}>
                    <PdfViewer pdf={NappingForm} />
                </Col>
                
            </>}/>
        </Container>
    </>)}
}

export default EnrollmentPage;