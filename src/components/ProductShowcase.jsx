import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { src: "/images/necklace1.jpg", r: 1, c: 3 },
  { src: "/images/necklace2.jpg", r: 1, c: 8 },
  { src: "/images/ring1.jpg", r: 2, c: 3 },
  { src: "/images/bracelet6.jpg", r: 2, c: 6 },
  { src: "/images/necklace6.jpg", r: 3, c: 2 },
  { src: "/images/earrings1.jpg", r: 3, c: 4 },
  { src: "/images/bracelet1.jpg", r: 4, c: 5 },
  { src: "/images/earrings2.jpg", r: 4, c: 7 },
  { src: "/images/bracelet2.jpg", r: 5, c: 6 },
  { src: "/images/necklace3.jpg", r: 5, c: 3 },
  { src: "/images/earrings3.jpg", r: 6, c: 4 },
  { src: "/images/necklace8.jpg", r: 6, c: 7 },
  { src: "/images/earrings4.jpg", r: 7, c: 6 },
  { src: "/images/bracelet3.jpg", r: 7, c: 4 },
  { src: "/images/necklace4.jpg", r: 8, c: 7 },
  { src: "/images/earrings5.jpg", r: 8, c: 3 },
  { src: "/images/ring4.jpg", r: 9, c: 8 },
  { src: "/images/earrings6.jpg", r: 9, c: 1 },
  { src: "/images/necklace7.jpg", r: 10, c: 7 },
  { src: "/images/bracelet4.jpg", r: 10, c: 3 },
];

const ProductShowcase = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
  document.querySelectorAll(".elem").forEach((elem) => {
    let image = elem.querySelector("img");
    let tl = gsap.timeline();

    let xTransform = gsap.utils.random(-100, 100);

    tl.set(image, {
      transformOrigin: xTransform < 0 ? "0%" : "100%",
    },"start")
    .to(image, {
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: elem,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    }, "start")

    .to(elem,{
      xPercent : xTransform,
      ease: "none",

      scrollTrigger: {
        trigger: elem,
        start: "top bottom",
        end: "bottom top ",
        scrub: true,
      },

    })
  });

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);

  return (
    <div className="relative w-full bg-olive-100">
      {/* Title centered within THIS component only */}
      <div className="sticky top-0  text-gray-600 left-0 w-full h-screen flex flex-col items-center justify-center font-serif text-center z-10 pointer-events-none px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase mb-2 sm:mb-4">
          THE NASHRAE
          <sup></sup>
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl">
          made with love & care.
        </h2>
      </div>

      {/* Responsive grid */}
      <div className="grid  sm:grid-cols-4 md:grid-cols-8 grid-rows-[repeat(10,20vw)] sm:grid-rows-[repeat(10,15vw)] md:grid-rows-[repeat(10,10vw)] gap-1 sm:gap-2 overflow-hidden">
        {products.map((product, index) => (
          <div
            key={index}
            className="elem"
            style={{ gridRow: product.r, gridColumn: product.c }}
          >
            <img
              src={product.src}
              alt=""
              className="w-[45vw] h-[25vw] sm:w-[35vw] sm:h-[35vw] md:w-[25vw] md:h-[25vw] lg:w-[50vw] lg:h-[20vw] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="w-full h-screen bg-amber-50 flex items-center justify-center mx-auto py-96 relative z-50 text-center ">
        <p className="text-xl  lg:text-4xl w-3/4 leading-[2.2rem]  lg:leading-[3.2rem] text-gray-700 font-regular text-left">Discover timeless elegance with our carefully curated jewelry collection, designed to celebrate every special moment. From delicate everyday essentials to stunning statement pieces, each design blends quality craftsmanship with modern style. Whether you're treating yourself or searching for the perfect gift, our jewelry is made to add confidence, beauty, and a touch of luxury to every occasion.
</p>
      </div>
    </div>
  );
};

export default ProductShowcase;