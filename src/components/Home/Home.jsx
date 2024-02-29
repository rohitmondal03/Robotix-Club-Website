import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <home>
      <div id="main" className="scroll-container">
        <img src="/Lcorner.png" id="topLeft" />
        <div className="content">
          <img src="/home_robot.png" id="homeRobot" />
          <div id="rhs">
            <div id="clubName">ROBOTiX<br />CLUB</div>
            <hr />
            <div id="details">The Robotix Club of NIT RAIPUR is a<br />vibrant and innovative community that<br />Brings together students with a passion<br />for robotics, automation, and technology.<br />Founded on the principles of<br />collaboration, creativity, and hands-on<br />learning. The Club serves as a dynamic<br />hub where students explore the<br />fascinating world of robotics through<br />various projects, workshops,<br />competitions and events.</div>
          </div>
        </div>
        <div id="bottomCanva">
          {/* <img src="/Bottom.png" id="bottom" /> */}
          {/* <img src="/Bottom.png" id="bottom" /> */}
        </div>
      </div>
    </home>
  );
}

export default Home;
