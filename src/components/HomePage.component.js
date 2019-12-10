import React from 'react';
import {
    Container,
    Col,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';

//Components
import Jumbotron from './Jumbotron.component';
import AdCard from './AdCard.component';
import Body from './Body.component';
import BodyHeader from './BodyHeader.component';

//Images
import banner from '../resources/images/ms_bg_xxl.png'
import childEye from '../resources/images/girl-tree.png';
import childDraw from '../resources/images/girls_drawing.png';
import childPaint from '../resources/images/girl_painting.png';
import childSmile from '../resources/images/girl_happy.png';
import childEat from '../resources/images/temp-eating.png';

class HomePage extends React.Component {


    render(){ return (<>
        <Jumbotron
            header={"Our Mission Statement:"}
            
            body={"At Mama Rochel’s Daycare children are gently encouraged to discover their individual strengths and unique talents. We believe that each child possesses a marvelous capacity to learn. Learning is best accomplished in a place that is emotionally secure, physically safe, and fun!"}
            
            footer={<>Excerpt from our <cite title="Source Title">Parent's Handbook</cite></>}
            
            image={banner}

            button={true}
            buttonLink={"/handbook/"}
            buttonBody={"Learn More"}/>

        <Container className="rowColor1" fluid={true}>
            <Body fill={false} content={<>
                <BodyHeader content ="About Us"/>
            </>}/>

            <Body fill={false} content={<>
                    <Col xs={10} md={4}><AdCard
                        image={childEye}

                        title={"Always Perfect"}
                        subtitle={"Why Settle for Less?"}

                        body={"We are a New York State Licensed Family Group Daycare. Located in a cozy home-based atmosphere each child feels safe, comfortable, and loved. Our staff is CPR and First Aid Certified. "}
                    /></Col>

                    <Col xs={10} md={4}><AdCard
                        image={childDraw}

                        title={"We Believe in Excellence"}
                        subtitle={"Experence the Best"}

                        body={"We offer an individualized academic curriculum to fit your child's needs and growth. Kids learn best through play, crafts, reading and daily activities. We devote loving safe care, personalized attention, and even curriculum to fit each child’s development. "}
                    /></Col>

                    <Col xs={10} md={4}><AdCard
                        image={childPaint}

                        title={"Endless Possibilities"}
                        subtitle={"Never a Dull Moment"}

                        body={"We offer Arts and Crafts, Baking, Music, Science, Reading, Story Time, Dance, Free Play, Kids Yoga, Gardening, and Exposure to foreign languages. Your child's potential is endless, why shouldn't their curriculum reflect it. "}
                    /></Col>

                    <Col xs={10} md={4}><AdCard
                        image={childSmile}

                        title={"Peace of Mind and One of a Kind"}
                        subtitle={"For Life's Curve Balls"}

                        body={"Do you have an errand to run? An interview to get to? We offer extended hours and drop off services at times convenient for you*. We also offer an after school program."}

                        disclaimer={"*Please call us to check space availability when using Drop Off Services."}
                    /></Col>

                    <Col xs={10} md={4}><AdCard
                        image={childEat}

                        title={"Healthy Home Meals"}
                        subtitle={"Just Like Mom's"}

                        body={"We provide kosher home cooked meals and snacks up to three times a day."}
                    /></Col>
                
                
            </>}/>

            <Body fill={false} content={<>
                <BodyHeader content ="Contact Us"/>
            </>}/>

            <Body fill={false} content={<>
                <Col xs={12} md={6}>
                    <h2 style={{textAlign: "center"}}>Drop us a line!</h2>

                    <FormGroup>
                        <Input type="text" name="name" placeholder="Name" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Email*" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Input type="number" name="phone" placeholder="Phone" disabled />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="message" placeholder="Message*" disabled />
                    </FormGroup>

                    <Button color="success" size="lg" disabled>
                        Send!
                    </Button>
                </Col>

                <Col xs={12} md={6}>
                    <h2 style={{textAlign: "center"}}>Better yet, see us in person!</h2>

                    <p className="lead">We love to meet new friends, so feel free to visit during normal business hours.</p>
                    
                    <h3 style={{textAlign: "center", marginTop: "3rem", marginBottom: "2rem"}}>
                        Mama Rochel's Daycare
                    </h3>
                    <ul>
                        <li>
                            <p className="lead"><a href="https://www.google.com/maps/place/Mama+Rochel+Daycare/@40.6952865,-73.5305191,17z/data=!3m1!4b1!4m5!3m4!1s0x89c27f922dcd556d:0xb7eba3548d9b22b1!8m2!3d40.6952865!4d-73.5283304" rel="noopener noreferrer" target="_blank">
                                2784 Genevie Ct, North Bellmore, NY 11710
                            </a></p>
                        </li>
                        <li>
                            <p className="lead"><a href="tel:3477642484">(347) 764-2484</a></p>
                        </li>
                        <li>
                            <p className="lead"><a href="mailto:childcare@mamarochel.com">childcare@mamarochel.com</a></p>
                        </li>
                    </ul>
                </Col>

                <Col xs={12} md={12}>
                    <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>Hours</h2>
                    <div className="col" style={{ paddingBottom: "0rem" }}>
                        <div>
                        <p className="lead">
                            <b style={{ marginRight: "5rem" }}>Monday</b>{" "}
                            <span style={{ textAlign: "right", float: "right" }}>
                            <i>7:00 am – 6:00 pm</i>
                            </span>
                        </p>
                        <p className="lead">
                            <b style={{ marginRight: "5rem" }}>Tuesday</b>{" "}
                            <span style={{ textAlign: "right", float: "right" }}>
                            <i>7:00 am – 6:00 pm</i>
                            </span>
                        </p>
                        <p className="lead">
                            <b style={{ marginRight: "5rem" }}>Wednesday</b>{" "}
                            <span style={{ textAlign: "right", float: "right" }}>
                            <i>7:00 am – 6:00 pm</i>
                            </span>
                        </p>
                        <p className="lead">
                            <b style={{ marginRight: "5rem" }}>Thursday</b>{" "}
                            <span style={{ textAlign: "right", float: "right" }}>
                            <i>7:00 am – 6:00 pm</i>
                            </span>
                        </p>
                        <p className="lead">
                            <b style={{ marginRight: "5rem" }}>Friday</b>{" "}
                            <span style={{ textAlign: "right", float: "right" }}>
                            <i>7:00 am – 2:00 pm</i>
                            </span>
                        </p>
                        <p className="lead">
                            <b style={{ marginRight: "5rem" }}>Saturday</b>{" "}
                            <span style={{ textAlign: "right", float: "right" }}>
                            <i>Closed</i>
                            </span>
                        </p>
                        <p className="lead">
                            <b style={{ marginRight: "5rem" }}>Sunday</b>{" "}
                            <span style={{ textAlign: "right", float: "right" }}>
                            <i>Closed</i>
                            </span>
                        </p>
                        </div>
                    </div>
                </Col>
            </>}/>

            <Body fill={false} content={<>
                <div className="mapouter" style={{boxShadow: "0px 5px 15px #00000077", paddingLeft: "1rem !important"}}>
                    <div className="gmap_canvas">
                        <iframe 
                            width="100%" 
                            height="450px" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=2784%20Genevie%20Ct%20Nort%20Bellore%20NY&t=&z=11&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0"
                            title="gmaps"
                            
                            ></iframe>
                    </div>
                </div>
            </>}/>
        </Container>
    
    </>)}
}

export default HomePage;