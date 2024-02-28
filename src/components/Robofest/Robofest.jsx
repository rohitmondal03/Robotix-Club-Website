import "./Robofest.css";

// import { gsap } from "gsap";

// import { CustomEase } from "gsap/CustomEase";
// import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { PixiPlugin } from "gsap/PixiPlugin";
// import { TextPlugin } from "gsap/TextPlugin";

function Robofest() {
  //   gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

  //   const testDesc = document.querySelector(".description");
  // const imageDesc = document.querySelector(".photo-descriptive");
  // const cofee = document.querySelector(".cofee");
  // const title = document.querySelector(".l-heading");

  // const tl = gsap.timeline({ defaults: { duration: 1 } });
  // tl.from(".anim1", { y: -50, opacity: 0, stagger: 0.4 })
  //   .from("aside", { backgroundPosition: "200px", opacity: 0 }, "-=1")
  //   .from(
  //     cofee,
  //     {
  //       y: 20,
  //       opacity: 0
  //     },
  //     "-=0.2"
  //   );

  // document.querySelector(".btn").addEventListener("click", () => {
  //   tl.reversed() ? tl.play() : tl.reverse();
  // });

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
              in different events. It's not just about winning – it's a chance
              for robot enthusiasts to show off their creations, learn from each
              other, and celebrate the amazing things robots can do. There are
              exciting robot battles, tricky challenges, and lots of fun. It's a
              big gathering of smart and creative people who love playing with
              robots and pushing the limits of what they can do.
            </p>
            <a href="#" className="btn anim1 orange">
             Registration Link
            </a>
          </div>
          <div className="imge">
            <img
              className="fest_robo"
              src="src/components/Robofest/fest_robo.png"
              alt="Robotix Club NITRR"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Robofest;
