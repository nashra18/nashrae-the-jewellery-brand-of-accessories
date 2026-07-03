import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // each line waits 0.25s after the previous starts
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }, // smooth "ease-out" curve
  },
};

const HeroText = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center text-center font-serif px-4"
    >
      <motion.h1
        variants={rise}
        className="text-7xl lg:text-9xl tracking-tight text-olive-700"
      >
        Nashrae
      </motion.h1>

      <motion.h2
        variants={rise}
        className="text-2xl lg:text-4xl mt-5 lg:mt-20 font-medium text-olive-600"
      >
        Jewellery that tells your story.
      </motion.h2>

      <motion.p
        variants={rise}
        className="text-lg lg:text-2xl font-medium  mt-3 max-w-xl text-olive-500 font-sans"
      >
        Timeless pieces, crafted with precision — for the moments worth
        remembering.
      </motion.p>
    </motion.div>
  );
};

export default HeroText;