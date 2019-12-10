import React from 'react';
import {
    Container,
    Col
} from 'reactstrap';

//Components
import Jumbotron from './Jumbotron.component';
import Body from './Body.component';
import PdfViewer from './PdfViewer.component';
//Images
import banner from '../resources/images/temp-mother.jpg'

//Documents
import RegistrationForm from '../resources/documents/Mama Rochel - Parent Handbook.pdf'

class HandbookPage extends React.Component {


    render(){ return (<>
        <Jumbotron
            header={"Parent Handbook"}
            mini={true}

            image={banner}
        />

        <Container className="rowColor1" fluid={true}>

            <Body fill={false} content={<>
                <Col xs={12} md={8} style={{width: "100%", height: "auto"}}>
                    <p className={"lead"} style={{marginBottom: "4rem", textAlign: "justify"}}>
                        Hey there! Thank you for taking the time to review our Parent Handbook. Feel free to read it here, download it, or print it using the PDF viewer below.
                    </p>
                    <PdfViewer pdf={RegistrationForm}/>
                </Col>
                
            </>}/>
        </Container>
    </>)}
}

export default HandbookPage;