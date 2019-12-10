import React from 'react';
import {
    Container,
    Col
} from 'reactstrap';

//Components
import Jumbotron from './Jumbotron.component';
import Body from './Body.component';

import banner from '../resources/images/banner-infant.jpg'
class InfantPage extends React.Component {


    render(){ return (<>
        <Jumbotron
            header={"Infant Program"}
            image={banner}
            mini={true}
        />

        <Container className="rowColor1" fluid={true}>

            <Body fill={false} content={<Col xs={12}><p>
                <div className="col-12 ">
                    <h2>Learning and Nurturing Child Care</h2>
                    <p className="lead">
                    Just like scientists, very young children learn about the world around them by experimenting and trying new ways of doing things. The bonds they form with warm, nurturing teachers and the stimulating environment form a strong foundation for learning. Our curriculum is designed to ensure that even our youngest learners are developing and meeting significant milestones in these areas:
                    </p>
                    <ul>
                        <li>
                            <b>Cognitive Development</b>: Infants develop the ability to pay attention and to engage and interact with others.
                        </li>
                        <li>
                            <b>Language Development</b>: Infants develop the ability to communicate verbally.
                        </li>
                        <li>
                            <b>Physical Development and Health</b>: Infants develop the ability to intentionally move parts of their body.
                        </li>
                        <li>
                            <b>Social-Emotional Development</b>: Infants practice different ways to get their needs met.
                        </li>
                        <li>
                            <b>Approaches to Learning</b>: Infants explore the world around them.
                        </li>
                    </ul>
                    <p className="lead">
                        We help develop young minds to be curious, versatile, and adaptable, through experiences across three distinct classroom areas:
                    </p>
                    <ul>
                        <li>
                            <b>Cozy Area</b>: Reading books, telling stories, having conversations.
                        </li>
                        <li>
                            <b>Exploration Area</b>: Manipulating objects and interacting with materials.
                        </li>
                        <li>
                            <b>Movement Area</b>: Exploring balance, coordination, gross motor skills.
                        </li>
                    </ul>
                </div>

                <div className="col-12 ">
                    <h2>Keeping Little Ones Safe</h2>
                    <p className="lead">
                        We’re committed to offering a safe, secure environment as we care for infants.
                    </p>
                    <ul>
                        <li>
                            <b>Safe sleep</b>: All babies (up to age 2) are placed on their back to sleep. We adhere to a “Lights On” policy, while cribs are free from bedding, blankets, and stuffed animals (crib only contains a mattress with tight-fitting sheet).
                        </li>
                        <li>
                            <b>Crib checks</b>: When children are napping, teachers maintain visual contact and active listening, while checking on them at regular and state approved intervals of time, as well as using monitors/cameras.
                        </li>
                        <li>
                            <b>Industry-best ratios</b>: Infants have a primary caregiver that provides specific attention, while the entire classroom team works together to provide constant supervision.
                        </li>
                        <li>
                            <b>Health and cleanliness</b>: We have a comprehensive schedule for cleaning and disinfecting (with safe cleaning products), plus staff wear dedicated shoes (or shoe covers) 
                        </li>
                    </ul>
                    <p className="lead">
                        We help develop young minds to be curious, versatile, and adaptable, through experiences across three distinct classroom areas:
                    </p>
                    <ul>
                        <li>
                            <b>Cozy Area</b>: Reading books, telling stories, having conversations.
                        </li>
                        <li>
                            <b>Exploration Area</b>: Manipulating objects and interacting with materials.
                        </li>
                        <li>
                            <b>Movement Area</b>: Exploring balance, coordination, gross motor skills.
                        </li>
                    </ul>
                </div>
            </p></Col>}/>
        </Container>
    </>)}
}

export default InfantPage;