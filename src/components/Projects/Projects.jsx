import React, { memo } from "react";
import { useState } from "react";


import "./Projects.css";
import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);
gsap.to(".box", {
  scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
  x: 500,
  y:40,
});
console.clear();

gsap.registerPlugin(ScrollTrigger);

gsap.set(".main_section", {
  autoAlpha: 1
});

const hiddenObjs = document.querySelectorAll(".main_section, .contact2");
let aboutxt;

function runSplit() {
  aboutxt = new SplitType(".about_title", {
    types: "lines, words"
  });

  $(".line").append("<div class='line-mask'></div>");
  runSplitype();
}

// runSplit();

window.addEventListener("resize", function () {
  aboutxt.revert();
  runSplit();
});

const planet = gsap.timeline();
const homePlanet = gsap.timeline({
  onComplete: triggerLaunch
});

const launchTheRocket = gsap.timeline({
  paused: true
});

planet
  .to(".dot-line", {
    repeat: -1,
    rotation: "+=360",
    duration: 100,
    ease: "none",
    transformOrigin: "center center"
  })
  .to(
    ".planet",
    {
      repeat: -1,
      rotation: "+=360",
      ease: "none",
      svgOrigin: "431.92 431.92",
      duration: 30,
      overwrite: "auto"
    },
    0
  )
  .to(
    ".planet-ab",
    {
      repeat: -1,
      rotation: "+=360",
      ease: "none",
      svgOrigin: "566.76 566.76",
      duration: 60,
      overwrite: "auto"
    },
    0
  );

homePlanet
  .to(".ring_outside_rocket", {
    opacity: 1,
    duration: 1
  })
  .from(
    ".home_dot-line",
    {
      autoAlpha: 0,
      opacity: 0,
      scale: 5,
      transformOrigin: "center center",
      duration: 1,
      stagger: {
        ease: "power2.Out",
        amount: 0.5
      }
    },
    "-=0.1"
  )
  .from(".planet", {
    opacity: 0
  })
  .fromTo(
    ".rocket",
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0
    }
  )
  .fromTo(
    ".arrows",
    {
      opacity: 0,
      rotation: 0
    },
    {
      opacity: 1,
      rotation: 90,
      transformOrigin: "center center"
    }
  )
  .to(".arrows", {
    rotation: 0,
    transformOrigin: "center center"
  });

launchTheRocket
  .to(".scroll", {
    opacity: 0
  })
  .to(".home_dot-line", {
    opacity: 0,
    scale: 5,
    transformOrigin: "center center",
    duration: 1,
    ease: "power2.out",
    stagger: {
      amount: 0.5,
      from: 5
    }
  })
  .to(
    ".planet",
    {
      opacity: 0,
      xPercent: 120,
      yPercent: -120,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
        from: "8"
      }
    },
    0
  )
  .to(
    ".ring_outside_rocket",
    {
      opacity: 0,
      scale: 3,
      transformOrigin: "center center",
      duration: 1,
      ease: "power2.out"
    },
    "-=1"
  )
  .to(
    ".top_arrow",
    {
      opacity: 0,
      yPercent: -100
    },
    "-=1"
  )
  .to(
    ".bottom_arrow",
    {
      opacity: 0,
      yPercent: 100
    },
    "-=1"
  )
  .to(
    ".right_arrow",
    {
      opacity: 0,
      xPercent: 100
    },
    "-=1"
  )
  .to(
    ".left_arrow",
    {
      opacity: 0,
      xPercent: -100
    },
    "-=1"
  )
  .to(
    ".rocket",
    {
      y: "-=200",
      scale: 2,
      duration: 2,
      transformOrigin: "center center"
    },
    "-=1"
  );

function triggerLaunch() {
  console.log("launch");
  gsap.set(hiddenObjs, {
    display: "block"
  });

  ScrollTrigger.create({
    trigger: ".home",
    start: "clamp(top top)",
    end: "clamp(+=1000)",
    pin: true,
    animation: launchTheRocket,
    scrub: 1
  });
  document.body.classList.remove("overflow-hidden");
  aboutxt && aboutxt.revert();
  runSplit();
}

// About Section
function runSplitype() {
  console.log("SPLIT");
  $(".line").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".line-mask");

    let aboutTitle = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom center",
        markers: {
          startColor: "white",
          endColor: "white",
          fontSize: "18px",
          indent: 10
        },
        scrub: 1
      }
    });

    aboutTitle.to(targetElement, {
      width: "0%",
      duration: 1
    });
  });
}

function Projects() {
  return (
    <>
    <body className="overflow-hidden">
  <div id="home home wrap">
    <div className="home_gallaxy">
      <svg viewBox="-45 -45 950 950">
        <g>
          <circle className="white_line dot-line home_dot-line" cx="431.92" cy="431.92" r="162.16" />
          <circle className="white_line dot-line home_dot-line" cx="431.92" cy="431.92" r="229.24" />
          <circle className="white_line dot-line home_dot-line" cx="431.92" cy="431.92" r="295.98" />
          <circle className="white_line dot-line home_dot-line" cx="431.92" cy="431.92" r="363.06" />
          <circle className="white_line dot-line home_dot-line" cx="431.92" cy="431.92" r="431.42" />
          <circle className="solid_white planet" cx="564.07" cy="338.81" r="14.87" />
          <circle className="solid_white planet" cx="722.21" cy="650.83" r="14.87" />
          <circle className="solid_white planet" cx="334.83" cy="639.49" r="14.87" />
          <circle className="solid_white planet" cx="269.45" cy="32.4" r="14.87" />
          <circle className="solid_white planet" cx="455.17" cy="202.69" r="14.87" />
          <circle className="solid_white planet" cx="44.78" cy="621.08" r="14.87" />
          <circle className="solid_white planet" cx="841.91" cy="293.46" r="14.87" />
          <circle className="solid_white planet" cx="141.06" cy="388.14" r="14.87" />
          <circle className="solid_white_ring ring_outside_rocket" cx="431.92" cy="431.92" r="95.09" />
          <g className="rocket">
            <path className="yellow_line right_back_stand" d="m445.32 454.25 11.85 6.31v-7.99c0-1.12-.21-2.1-.62-2.88l-5.12-9.74c-1.1-2.1-3.49-2.47-6.11-.95v15.25Z" />
            <path className="yellow_line left_back_stand" d="m418.53 454.25-11.85 6.31v-7.99c0-1.12.21-2.1.62-2.88l5.12-9.74c1.1-2.1 3.49-2.47 6.11-.95v15.25Z" />
            <path className="yellow_line bottom_tail" d="M437.56 471.89h-11.28v1.64c0 1.81 2.53 3.29 5.64 3.29s5.64-1.47 5.64-3.29v-1.64Z" />
            <path className="yellow_line middle_tail" d="M445.4 457.78h-26.95v8.12c0 4.33 6.03 7.85 13.47 7.85s13.47-3.51 13.47-7.85v-8.12Z" />
            <path className="yellow_line rocket_body" d="M445.18 398.78c-.27-.4-.55-.79-.84-1.18l-12.42-17.01-12.42 17.01c-.29.39-.56.78-.84 1.18-6.53 9.47-9.18 21.08-7.81 32.5l3.17 26.52v.14c0 2.63 1.68 5.03 4.44 6.86.31 3.33 6.22 5.98 13.46 5.98s13.15-2.65 13.46-5.98c2.76-1.83 4.44-4.23 4.44-6.86v-.14l3.17-26.52c1.37-11.42-1.28-23.04-7.81-32.5Z" />
            <g id="left_stand">
              <path className="yellow_line" d="m418.66 465.2-9.43 18.06-1.91-1.13v-7.65c0-1.07.2-2.25.6-3.45l4.9-14.97c1.05-3.22 3.34-6.21 5.84-7.66l1.83 1.11-1.83 15.69Z" />
              <path className="yellow_fill" d="M420.4 449.49c-2.51 1.45-4.79 4.44-5.85 7.66l-4.9 14.97c-.39 1.2-.6 2.38-.6 3.45v7.65l.33-.5v-6.9c0-1.07.2-2.25.6-3.45l4.9-14.97c1.01-3.08 3.13-5.94 5.51-7.45v-.46Z" />
            </g>
            <g id="right_stand">
              <path className="yellow_line" d="m445.19 465.2 9.43 18.06 1.91-1.13v-7.65c0-1.07-.2-2.25-.6-3.45l-4.9-14.97c-1.05-3.22-3.34-6.21-5.84-7.66l-1.83 1.11 1.83 15.69Z" />
              <path className="yellow_fill" d="m443.79 449.42-.26.12v.1c2.27 1.55 4.28 4.32 5.25 7.28l4.9 14.97c.39 1.2.6 2.38.6 3.45v7.04l.59.89v-7.65c0-1.07-.2-2.25-.6-3.45l-4.9-14.97c-1.05-3.22-3.08-6.33-5.59-7.78Z" />
            </g>
            <path className="yellow_line rocket_head" d="m444.34 397.59-12.42-17.01-12.42 17.01c-.07.1-.14.19-.2.29 2.15 2.82 6.99 4.78 12.62 4.78s10.47-1.96 12.62-4.78l-.2-.29Z" />
            <circle className="yellow_fill" cx="431.92" cy="430.91" r="10.84" />
          </g>
          <g className="arrows">
            <path className="white_line top_arrow cls-6" d="m424.11 364.16 7.81-12.69 7.82 12.69" />
            <path className="white_line bottom_arrow cls-6" d="m439.74 499.69-7.82 12.68-7.81-12.68" />
            <path className="white_line right_arrow cls-6" d="m499.69 424.11 12.68 7.81-12.68 7.82" />
            <path className="white_line left_arrow cls-6" d="m364.16 439.74-12.69-7.82 12.69-7.81" />
          </g>
        </g>
      </svg>
    </div>
    <div className="scroll">
      <svg viewBox="0 0 83.01 19.43">
        <g className="scrolldown">
          <path className="solid_white arrow" d="M45.76 11.39a.5.5 0 0 0-.69.15l-3.61 5.67V.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v16.71l-3.61-5.67a.5.5 0 0 0-.92.27c0 .09.03.19.08.27l4.53 7.11c.09.14.25.23.42.23s.33-.09.42-.23l4.53-7.11a.5.5 0 0 0-.15-.69Z" />
          <path className="solid_white text" d="M1 11.67c.14 1.48 1.22 1.79 1.78 1.79.92 0 1.77-.71 1.77-1.69 0-1.25-1.07-1.52-2.1-1.86C1.73 9.69.18 9.24.18 7.56.16 5.99 1.46 5.11 2.82 5.11c1.1 0 2.37.61 2.52 2.29h-.98c-.11-.58-.4-1.45-1.57-1.45-.89 0-1.62.6-1.62 1.52-.01 1.08.86 1.34 2.21 1.8.84.32 2.16.79 2.16 2.42 0 1.45-1.09 2.6-2.75 2.6-1.49 0-2.72-.94-2.78-2.63h1Zm12.12.29c-.42 1.37-1.68 2.36-3.23 2.36-2.18 0-3.47-1.68-3.47-3.41C6.42 9 7.87 7.5 9.83 7.5c1.45 0 2.84.86 3.29 2.41h-.91c-.41-1.09-1.43-1.59-2.34-1.59-.75 0-1.28.23-1.82.73-.43.42-.73 1.12-.73 1.86 0 1.52 1.15 2.58 2.54 2.58 1.24-.01 2.06-.76 2.34-1.54h.92Zm1.28-4.27h.84v1.05c.47-.96 1.31-1.21 2.06-1.24v.88h-.08c-1.25 0-1.94.78-1.94 2.24v3.51h-.88V7.68Zm2.96 3.21c0-1.8 1.34-3.39 3.42-3.39s3.43 1.6 3.43 3.41-1.34 3.39-3.43 3.39-3.42-1.58-3.42-3.39Zm.88.02c0 1.46 1.12 2.57 2.54 2.57s2.54-1.1 2.54-2.58-1.1-2.58-2.54-2.58-2.54 1.1-2.54 2.58Zm7.31-5.65h.89v8.88h-.89V5.27Zm2.6 0h.89v8.88h-.89V5.27Zm23.36 0h2.65c1.26 0 2.6.28 3.49 1.33.72.79 1.07 1.83 1.07 3.09 0 2.67-1.52 4.45-4.51 4.45h-2.7V5.27Zm.98 8h1.76c2.28 0 3.47-1.4 3.47-3.54 0-1.03-.28-1.94-.86-2.59-.56-.6-1.39-1-2.6-1H52.5v7.12Zm7.18-2.37c0-1.8 1.34-3.39 3.42-3.39s3.43 1.6 3.43 3.41-1.34 3.39-3.43 3.39-3.42-1.58-3.42-3.39Zm.88.02c0 1.46 1.12 2.57 2.54 2.57s2.54-1.1 2.54-2.58-1.1-2.58-2.54-2.58-2.54 1.1-2.54 2.58Zm6.31-3.23h.93L69.57 13l1.55-4.74h.73L73.41 13l1.76-5.31h.92l-2.23 6.45h-.88l-1.52-4.7-1.5 4.7h-.86l-2.24-6.45Zm10.21 0h.84c0 .36 0 .72-.01 1.15.37-.84 1.25-1.36 2.4-1.33 2 .02 2.71 1.39 2.71 2.96v3.67h-.88v-3.49c0-1.39-.62-2.34-2.08-2.31-1.33.01-2.1.82-2.1 2.16v3.65h-.89V7.7Z" />
        </g>
      </svg>
    </div>
  </div> 
  <div className="main_section">
    <main className="main_content">
      <section id="about  about">
        <div className="about_txt">
          <h1 className="about_title">
            Transform your imagination into reality and beyond
          </h1>
          <p>We’re an expert visual communications company that delivers your messages with impact every time. With over 20 years of mastery in different mediums, timelines and space, you can expect a strong hands-on and client-centric approach to all our projects. As passionate believers in the power of creative exploration, we are nimble and responsive to all your needs.</p>
        </div>
        <div className="about_graphic">
          <svg viewBox="-25 0 1133.51 1133.51">
            <g>
              <circle className="solid_white" cx="566.76" cy="566.76" r="124.77" />
              <circle className="white_line dot-line" cx="566.76" cy="566.76" r="212.78" />
              <circle className="white_line dot-line" cx="566.76" cy="566.76" r="300.8" />
              <circle className="white_line dot-line" cx="566.76" cy="566.76" r="388.38" />
              <circle className="white_line dot-line" cx="566.76" cy="566.76" r="476.39" />
              <circle className="white_line dot-line" cx="566.76" cy="566.76" r="566.1" />
              <g className="planet-ab">
                <ellipse cx="182.43" cy="510.49" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M189.76,510.49c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
              <g className="planet-ab">
                <ellipse cx="55.97" cy="816.04" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M63.29,816.04c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
              <g className="planet-ab">
                <ellipse cx="437.23" cy="841.18" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M444.56,841.18c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
              <g className="planet-ab">
                <ellipse cx="792.68" cy="986.97" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M800.01,986.97c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
              <g className="planet-ab">
                <ellipse cx="566.6" cy="265.8" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M573.93,265.8c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
              <g className="planet-ab">
                <ellipse cx="1013.63" cy="220.76" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M1020.96,220.76c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
              <g className="planet-ab">
                <ellipse cx="954.34" cy="560.72" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M961.67,560.72c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
              <g className="planet-ab">
                <ellipse cx="738.96" cy="445.59" rx="19.5" ry="19.66" />
                <path className="yellow_fill" d="M746.29,445.59c0,4.05-3.28,7.33-7.33,7.33s-7.33-3.28-7.33-7.33,3.28-7.33,7.33-7.33,7.33,3.28,7.33,7.33Z" />
              </g>
            </g>
          </svg>
        </div>
      </section> 
    </main>
  </div> 
</body>
    </>
  );
}

export default memo(Projects);
