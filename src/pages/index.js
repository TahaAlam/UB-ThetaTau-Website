import React from "react";
import Helmet from "react-helmet";


import Layout from '../components/layout';
import Instagram from '../components/Instagram';


import brotherhood from '../assets/images/Brotherhood.jpg'
import pd from '../assets/images/ProfessionalDevelopment.jpg'
import commserv from '../assets/images/CommunityService.jpg'

import c1 from '../assets/images/logos/amazon.png'
import c2 from '../assets/images/logos/apple.png'
import c3 from '../assets/images/logos/buffaloautomation.png'
import c4 from '../assets/images/logos/FreseniusKabi.png'
import c5 from '../assets/images/logos/GEAviation.png'
import c6 from '../assets/images/logos/google.png'
import c7 from '../assets/images/logos/Huron.png'
import c8 from '../assets/images/logos/Integer.png'
import c9 from '../assets/images/logos/linde.png'
import c10 from '../assets/images/logos/lockheed.png'
import c11 from '../assets/images/logos/microsoft.png'
import c12 from '../assets/images/logos/moog.png'
import c13 from '../assets/images/logos/mta.png'
import c14 from '../assets/images/logos/NorthropGrumman.png'
import c15 from '../assets/images/logos/prattwhitney.png'
import c16 from '../assets/images/logos/sumitomo.png'
import c17 from '../assets/images/logos/tapecon.png'
import c18 from '../assets/images/logos/UnitedTechnology.png'
import c19 from '../assets/images/logos/USArmyCorpsofEngineers.png'
import c20 from '../assets/images/logos/whiting-turner.png'

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
                <Helmet title="UB Theta Tau" />
           
            <section id="tintedheader" className="section" style={{width:'100%',height:'100vh', box_sizing:'border-box'}}>
                <div className="inner">
                    <h1>
                        University at Buffalo Theta Tau | Mu Gamma Chapter
                    </h1>
                    <p>
                        A co-ed professional engineering fraternity
                    </p>
                    
                </div>
            </section>

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Our Purpose</h2>
                            </header>
                            <p>The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship.</p>
                        </div>
                        <div className="col-6">
                            <Instagram />
                        </div>
                    </div>
                </section>
                <section  className="main style2 special">
              <div></div> 
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
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pd} alt="" /></span>
                            <h3>Professionalism</h3>
                            <p>We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.</p>
                        </div>
                        
                        <div className="col-4">
                            <span className="image fit"><img src={commserv} alt="" /></span>
                            <h3>Community Service</h3>
                            <p>We are known for our service to our college, university and the larger community.  Our service projects create a unifying environment for learning and personal growth for our members.</p>
                        </div>
                    </div>
                </section>

                <section  className="main style2 special">
              <div><br/><br/></div> 
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

                <section id="four" className="main style3">
                    <div className="grid-wrapper">
                    <div className="col-12">
                             <header className="major">
                                <h2>Check out where our brother have been!</h2>
                            </header>
                            <table style= {{}} >                           
                                    <tr style={{width:'20%'}} >
                                        <td style={{width:'20%'}} >
                                            <img src={c1} alt="Amazon" imgstyle={{ objectFit: 'contain' }} style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c2} alt="Apple" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c3} alt="Buffalo Automation" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c4} alt="Fresenius Kabi" imgstyle={{ objectFit: 'contain' }} style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c5} alt="GE Aviation" imgstyle={{ objectFit: 'contain' }} style={{width:'100%'}} />
                                        </td>
                                    </tr>
                                    <tr style={{height:'20%'}} >
                                            <td style={{width:'20%'}} >
                                            <img src={c6} alt="Google" imgstyle={{ objectFit: 'contain' }} style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c7} alt="Huron" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c8} alt="Integer" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c9} alt="Linde" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c10} alt="Lockheed" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                    </tr>
                                    <tr style={{height:'20%'}} >
                                        <td style={{width:'20%'}} >
                                            <img src={c11} alt="Microsoft" imgstyle={{ objectFit: 'contain' }} style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c12} alt="Moog" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c13} alt="MTA" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c14} alt="Northrop Grumman" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c15} alt="Pratt and Whitney" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                    </tr>
                                    <tr style={{height:'20%'}} >
                                        <td style={{width:'20%'}} >
                                            <img src={c16} alt="Sumitomo" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c17} alt="Tapecon" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c18} alt="United Technology" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c19} alt="US Army Corps of Engineer" imgstyle={{ objectFit: 'contain' }} style={{width:'100%'}} />
                                        </td>
                                        <td style={{width:'20%'}} >
                                            <img src={c20} alt="Whiting Turning" imgstyle={{ objectFit: 'contain' }}  style={{width:'100%'}} />
                                        </td>
                                    </tr>
                            </table>              
                            </div>   
                         </div>        
                </section>

                <section id="five" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Interested in rushing?</h2>
                        </header>
                        <p>We will keep you updated.</p>
                        <ul className="actions uniform">
                            <li><a href="https://forms.gle/g8Gywj51FX8kb7Zv6" className="button special">Sign Up</a></li>
                        </ul>
                    </div>
                    <ul className="icons">
                       <li><a href="https://github.com/app-generator/gatsby-html5up-photon" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                      <li><a href="https://twitter/webappseed" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    </ul>
                </section>
                </Layout>
        );
    }
}

export default Homepage;