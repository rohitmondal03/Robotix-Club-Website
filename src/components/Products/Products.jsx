import React, { useRef } from 'react';
import './Products.css';

const Products = () => {
    const targetRef = useRef(null);

    const scrollToTarget = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <input type="radio" name="slide" id="c1" defaultChecked />
                    <label htmlFor="c1" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <a href="#target-tag" onClick={scrollToTarget}><h4>Humonoid</h4></a>
                                <p></p>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="slide" id="c2" />
                    <label htmlFor="c2" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <a href="#target-tag" onClick={scrollToTarget}><h4>Voice Controlled Bot</h4></a>
                                <p></p>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="slide" id="c3" />
                    <label htmlFor="c3" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <a href="#target-tag" onClick={scrollToTarget}><h4>Stairs Climbing Bot</h4></a>
                                <p></p>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="slide" id="c4" />
                    <label htmlFor="c4" className="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <a href="#target-tag" onClick={scrollToTarget}><h4>Rubix Solver</h4></a>
                                <p></p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            {/* <div style="margin:50px">
                <h2 className="wrappe">PREVIOUS PROJECTS</h2>
                <section className="section p-0" style="color: aliceblue;">
                    <div className="container-fluid px-0">
                        <div className="row" data-shuffle="list">
                            <div className="col-6 col-lg-12" data-shuffle="item" data-groups="2014-2018" data-aos="slide-right">
                                <div className="row no-gutters">
                                    <div className="col-md-6 bg-img mh-300" style="background-image: url(./ProductAssets/Screenshot\ \(192\).png) ;height :600px;"></div>
                                    <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left ">
                                        <h4>Humanoid</h4>
                                        <br /><br /><br /><br />
                                        <h5>Under 4i</h5>
                                        <ul data-aos="zoom-out-up">
                                            <li>Integration of code is completed and the head is fully
                                                functional and working.</li>
                                            <li>The head can maintain eye contact with the concerned person
                                                and talk to the person answering his/her questions like a
                                                normal human.</li>
                                            <li>Can learn about humans it views and later recognize them in
                                                one shot face recognition.</li>
                                            <li>Presented it in Techevince.</li>
                                            <li>Working now on hand and chest of humanoid.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-12" data-shuffle="item" data-groups="2014-2018" data-aos="flip-left">
                                <div className="row no-gutters">
                                    <div className="col-md-6 bg-img mh-300 order-md-2" style="background-image: url(./ProductAssets/Screenshot\ \(191\).png) ;"></div>
                                    <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left">
                                        <h4>ARLE – Automated Robot for Library Enhancement</h4>
                                        <br /><br /><br /><br />
                                        <h5>Under 4i</h5>
                                        <ul>
                                            <li>ARLE-Mini is fully functional and can map its surrounding.
                                            </li>
                                            <li>The actual ARLE is ready with it structure we just need to
                                                shift the mechanism from the small robot to the large one.
                                            </li>
                                            <li>Can learn about humans it views and later recognize them in
                                                one shot face recognition.</li>
                                            <li>ARLE-Mini presently uses hectorSLAM for mapping. We plan to
                                                upgrade it to Gmapping which is more robust.</li>
                                            <li>Reformatted the team including new members and removing some
                                                old uninterested people.</li>
                                            <li>Presented in TechEvince.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-lg-12" data-shuffle="item" data-groups="2014-2018" data-aos="fade-right">
                                <div className="row no-gutters">
                                    <div className="col-md-6 bg-img mh-300" style="background-image: url(./ProductAssets/Screenshot\ \(188\).png) ;height :600px;"></div>
                                    <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left">
                                        <h4>Antahsagri</h4>
                                        <br /><br /><br /><br />
                                        <h5>Under 4i</h5>
                                        <ul>
                                            <li>Underwater Vision is perfectly working.</li>
                                            <li>Turbulent water neuro-fuzzy logic controller designed.</li>
                                            <li>Can detect balloons in water and differentiate it on basis
                                                of colour.</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-12" data-shuffle="item" data-groups="2014-2018">
                                <div className="row no-gutters">
                                    <div className="col-md-6 bg-img mh-300 order-md-2" style="background-image: url(./ProductAssets/Screenshot\ \(188\).png);"></div>
                                    <div className="col-10 col-md-4 mx-auto py-8 text-center text-md-left">
                                        <h4>Ball and Plate Balancing</h4>
                                        <br /><br /><br /><br />
                                        <h5>Under Club</h5>
                                        <ul>
                                            <li>Targeted still as one of the most difficult control projects
                                                this project aimed at making a ball balance at the center of
                                                a plate.
                                            </li>
                                            <li>The team wasn’t very successful in building the full robot
                                                but was partially able to do it.</li>
                                            <li>Next time they will perform the same experiment with a
                                                better resistive platform so that’s its faster and better.
                                            </li>
                                            <li>Fund: 11,300<br /> Members : 3</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
        </>
    );
}

export default Products