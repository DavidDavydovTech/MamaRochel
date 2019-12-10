import React from 'react';
import {
    Container,
    Col
} from 'reactstrap';

//Components
import Jumbotron from './Jumbotron.component';
import Body from './Body.component';

import banner from '../resources/images/banner-toddler.jpg'
class ToddlerPage extends React.Component {


    render(){ return (<>
        <Jumbotron
            header={"Toddlers Program"}
            image={banner}
            mini={true}
        />

        <Container className="rowColor1" fluid={true}>

            <Body fill={false} content={<Col xs={12}><p>
                <div className="col-12 ">
                    <h2>Learning and Milestone Development</h2>
                    <p className="lead">
                    Energy and excitement are a natural part of growth and learning. At Mama Rochel’s, we channel that energy into positive learning experiences, providing room to move and explore, while young minds discover learning.
                    <br/>
                    Learning experiences address the evolving developmental needs of this increasingly mobile age group, while milestone development continues to be guided by our education curriculum in five developmental areas:
                    </p>
                    <ul>
                        <li>
                            <b>Cognitive Development</b>: Children develop problem-solving and creative thinking skills.
                        </li>
                        <li>
                            <b>Language and Communication Development</b>: Children develop the ability to coordinate and control large and small muscle movements.
                        </li>
                        <li>
                            <b>Physical Development and Health</b>: Children develop the ability to coordinate and control large and small muscle movements.
                        </li>
                        <li>
                            <b>Social-Emotional Development</b>: Children develop their problem-solving abilities.
                        </li>
                        <li>
                            <b>Approaches to Learning</b>: Children develop their problem-solving abilities.
                        </li>
                    </ul>
                    <p className="lead">
                        As children grow more mobile, the Toddler classroom offers five distinct learning areas for exploration and discovery:
                    </p>
                    <ul>
                        <li>
                            Art & Science
                        </li>
                        <li>
                            Math & Engineering
                        </li>
                        <li>
                            Language Arts
                        </li>
                        <li>
                            Music & Movement
                        </li>
                        <li>
                            Dramatic Arts
                        </li>
                    </ul>
                </div>
            </p></Col>}/>
        </Container>
    </>)}
}

export default ToddlerPage;