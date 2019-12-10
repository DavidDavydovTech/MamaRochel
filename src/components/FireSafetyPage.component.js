import React from 'react';
import {
    Container,
    Col
} from 'reactstrap';

//Components
import Jumbotron from './Jumbotron.component';
import Body from './Body.component';

import banner from '../resources/images/temp-firetruck.jpg'
class FireSafetyPage extends React.Component {


    render(){ return (<>
        <Jumbotron
            header={"Fire safety"}
            
            mini={true}

            image={banner}
        />

        <Container className="rowColor1" fluid={true}>
            
            <Body fill={false} content={<Col className="headerPadder" xs={12}>
                <div className="col-12 ">
                <h2>Written Plan for Emergency Evacuation</h2>
                <p className="lead">
                    Evacuation: In case of the need to evacuate our site, the following procedures will be followed:
                </p>

                <h2>Evacuation routes/exits:</h2>
                <ul>
                <li>
                    Children are cared for on the main level of the house only and are not
                    permitted on second level or in basement.
                </li>
                <li>
                    Exits (all windows and doors are checked regularly to ensure opening):
                    <ul>
                    <li>
                        <b>
                        <i>Living room:</i>
                        </b>{" "}
                        Front door and windows.
                    </li>
                    <li>
                        <b>
                        <i>Play room/family room:</i>
                        </b>{" "}
                        Front door and windows.
                    </li>
                    </ul>
                </li>
                </ul>
                <p />
                    <p className="lead"></p>
                    <h2>Evacuating Infants/Toddlers:</h2>
                    <ul>
                    <li>
                        Children will be evacuated together using a portable play yard with
                        wheels. The site owns two portable play yards each of which remain
                        placed near each of the two exits (Primary front and Secondary back
                        doors). If situation arises Infants may be carried by daycare staff, and
                        older children may need to walk as practiced during fire drills.
                    </li>
                    <li>
                        In case of the need to evacuate through the windows, children will be
                        placed out windows first, using any items available to place them on the
                        ground.
                    </li>
                    </ul>
                    <h3>Notification:</h3>
                    <p>Once all children are safely evacuated:</p>
                    <ul>
                    <li>911 will me called.</li>
                    <li>Parents will be notified of the evacuation.</li>
                    </ul>
                    <p />
                    <p className="lead"></p>
                    <h2>Emergency Kits/Information:</h2>
                    <ul>
                    <li>Emergency kits will be taken when possible.</li>
                    <li>
                        Each portable play yard will have an envelope attached to it with each
                        child’s emergency contact information.
                    </li>
                    <li>
                        Evacuation Sites
                        <ul>
                        <li>2700 Genevieve Ct. North Bellmore NY 11710</li>
                        <li>Temple Bnei-Torah. 2900 Jerusalem Avenue, Wantagh NY 11793</li>
                        <li>
                            Children will be either walking, infants carried or all children
                            will be pushed in portable play yards or strollers to the
                            neighborhood evacuation site or to the Temple (2/5ths of a mile
                            away).
                        </li>
                        </ul>
                    </li>
                    </ul>
                    <p />
                    <p className="lead"></p>
                    <h2>Shelter-in-Place:</h2>
                    <p>
                    In case of the need to stay put due to a tornado or notification from
                    authorities, the following procedures will be followed:
                    </p>
                    <h3>Location:</h3>
                    <p>
                    Children will be taken to an upstairs room set up to Shelter in Place
                    equipped with Emergency Supplies:
                    </p>
                    <ul>
                    <li>Emergency kits with food (including formula), toys, and water.</li>
                    <li>A first aid is stored in upstairs room.</li>
                    <li>A battery-powered radio is stored with the emergency supplies.</li>
                    <li>Cell phone will be brought to the upstairs room.</li>
                    <li>Emergency contact sheets are kept with the supplies.</li>
                    </ul>
                    <h3>Notification:</h3>
                    <ul>
                    <li>
                        Parents/guardians will be notified once the immediate threat has passed.
                    </li>
                    </ul>
                    <p />
                    <p className="lead"></p>
                    <h2>Parent Reunification:</h2>
                    <p>
                    In case of the need to evacuate or when parents/guardians are unable to
                    get to children, the following procedures will be followed to reunite
                    children with parents/guardians (or other contacts designated by
                    parent/guardian) as soon as it is safe.
                    </p>
                    <ul>
                    <li>
                        Parents/guardians are provided:
                        <ul>
                        <li>Information on each evacuation site.</li>
                        <li>
                            Contact information for Galina Alkhazova and her daycare staff, cell
                            phone and home phone.
                        </li>
                        </ul>
                    </li>
                    <li>
                        Parents/guardians contact numbers are:
                        <ul>
                        <li>Stored in Galina Alkhazova’s cell phone.</li>
                        <li>Attached to portable play yards.</li>
                        <li>Kept in emergency kits.</li>
                        </ul>
                    </li>
                    </ul>
                    <h3>Release:</h3>
                    <ul>
                    <li>
                        Children will only be release to contacts listed on the child’s form
                        with proper identification.
                    </li>
                    </ul>
                    <p />
                </div>
            </Col>}/>
        </Container>
    </>)}
}

export default FireSafetyPage;