import { motion } from "framer-motion";

const features = [
   { title: "Pure Craftsmanship", desc: "Every piece handcrafted with precision" },
  { title: "Certified Quality", desc: "Hallmarked gold, authenticated stones" },
  { title: "Timeless Design", desc: "Classic elegance that never fades" },
  { title: "Affordable Luxury", desc: "Premium feel, honest pricing" },
  { title: "Lifetime Polish", desc: "Free maintenance, every visit" },
  { title: "Secure Packaging", desc: "Tamper-proof, insured delivery" },
  { title: "Easy Exchange", desc: "30-day hassle-free returns" },
  { title: "Custom Orders", desc: "Designed around your story" },
];

export default function FeatureScroll() {
  const track = [...features, ...features]; // duplicate once for seamless loop

  return (
    <div className="relative   overflow-hidden w-full  py-12 ">
      {/* edge fade masks */}
      

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className="shrink-0 w-64 rounded-xl border border-olive-200 bg-olive-400 p-6"
          >
            <h3 className="text-olive-100 font-semibold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-olive-50 text-sm">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

