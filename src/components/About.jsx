import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const About = () => {
  return (
    <div className="mt-40 px-6 lg:px-20 py-16">
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="text-5xl lg:text-8xl font-bold font-serif text-olive-700"
      >
        About Us
      </motion.h1>

      <div className="flex flex-col lg:flex-row mt-10 items-center gap-10 lg:gap-16">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="text-lg lg:text-2xl font-serif leading-relaxed text-olive-500 lg:w-1/2"
        >
          Nashrae started with a simple idea — that good jewellery shouldn't
          come with hidden costs or empty promises. Every piece is
          handcrafted with precision, every stone authenticated, every
          detail considered. We're building something meant to last well
          beyond a single trend cycle — pieces you'll want to keep, and one
          day, pass on. <br />
           We're not here to chase trends — we're here to make pieces that hold
    their place in your story for years to come, not just seasons. From
    the first sketch to the final polish, Nashrae is built on precision,
    honesty, and a quiet kind of luxury that doesn't need to shout.
        </motion.p>
    

  

        <motion.img
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 max-w-md h-[42vh] lg:h-[32vw]  object-cover rounded-3xl shadow-xl"
          src="/images/necklace5.jpg"
          alt="Handcrafted Nashrae necklace"
        />
      </div>
    </div>
  );
};

export default About;