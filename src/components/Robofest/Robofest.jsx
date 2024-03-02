import "./Robofest.css";
import { Link } from "react-router-dom";
import robot from './fest_robo.png';

function Robofest() {


  return (
    <>
      <div className="fest_bg">
        <div className="svgbg">
          <div className="svg1  ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="svgbg">
          <div className="svg2">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        <div className="fest">
          <div className="main1">
            <h1 className="l-heading anim1">
              <span> About RoboFest</span>
              {/* <span> DONE RIGHT</span> */}
            </h1>
            <p className="sub-title anim1">
            The stage is set, the robots are ready – join us as we kick off RoboFest, a symposium of innovation and a celebration of technological brilliance. People bring their awesome robot creations to compete
              in different events. It&apos;s not just about winning – it&apos;s a chance
              for robot enthusiasts to show off their creations, learn from each
              other, and celebrate the amazing things robots can do. There are
              exciting robot battles, tricky challenges, and lots of fun. It&apos;s a
              big gathering of smart and creative people who love playing with
              robots and pushing the limits of what they can do.
            </p>
            <Link to="/events">
            <div  className="btn anim  anim1 orange">
             Up coming Events
            </div></Link>
           
          </div>
          <div className="imge">
            <img
              className="fest_robo"
              src={robot}
              alt="Robotix Club NITRR"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Robofest;
