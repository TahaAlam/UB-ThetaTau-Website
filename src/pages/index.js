import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import purpose from '../assets/images/Purpose.jpg'
import brotherhood from '../assets/images/Brotherhood.jpg'
import pd from '../assets/images/ProfessionalDevelopment.jpg'
import commserv from '../assets/images/CommunityService.jpg'

import R from '../assets/images/R.jpg'
import VR from '../assets/images/VR.jpg'
import Treasurer from '../assets/images/Treasurer.jpg'
import CorrSec from '../assets/images/CorrSec.jpg'
import PM from '../assets/images/PM.jpg'
import Scribe from '../assets/images/Scribe.jpg'

class Homepage extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet title="UBThetaTau" />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Our Purpose</h2>
                            </header>
                            <p>The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={purpose} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section  className="main style2 special">
              <div><br/><br/><br/></div> 
                </section>

                <section id="two" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Our Pillars</h2>
                            </header>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={brotherhood} alt="" /></span>
                            <h3>Brotherhood</h3>
                            <p>We forge lifelong bonds of fraternal friendship, a journey that develops and delivers a network of lasting personal and professional relationships.  We foster an inviting, safe, and social environment in which our members become lifelong friends.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pd} alt="" /></span>
                            <h3>Professionalism</h3>
                            <p>We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-4">
                            <span className="image fit"><img src={commserv} alt="" /></span>
                            <h3>Community Service</h3>
                            <p>We are known for our service to our college, university and the larger community.  Our service projects create a unifying environment for learning and personal growth for our members.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section  className="main style2 special">
              <div><br/><br/><br/></div> 
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Our E-Board</h2>
                            </header>
                        </div>
                        <div className="col-2"> </div>
                        <div className="col-4">
                            <h5><span className="image fit"><img src={R} alt="" /></span> Regent <br /> Eugene Liang</h5>  
                        </div>
                        <div className="col-4">
                            <h5><span className="image fit"><img src={VR} alt="" /></span> Vice-Regent <br /> Vincent Tricozzi </h5>
                        </div>
                        <div className="col-2"> </div>
                        <div className="col-3">
                            <h5><span className="image fit"><img src={PM} alt="" /></span> Pledge Marshall <br /> Hollis Pauquette </h5>    
                        </div>
                        <div className="col-3">
                            <h5><span className="image fit"><img src={CorrSec} alt="" /></span> Corresponding Secretary <br/> Taylor Marabella </h5>      
                        </div>
                        <div className="col-3">
                            <h5><span className="image fit"><img src={Treasurer} alt="" /></span> Treasurer <br/> Casey Dolan </h5>    
                        </div>
                        <div className="col-3">
                           <h5> <span className="image fit"><img src={Scribe} alt="" /></span> Scribe <br/> Joshua Hulburt  </h5>   
                        </div>

                    </div>
                </section>
                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Interested in rushing?</h2>
                        </header>
                        <p>We will keep you updated.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;