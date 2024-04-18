import { motion } from "framer-motion";

export function StarIcon() {
  return (
    
      <motion.img
        src="/star-icon.webp"
        alt="star"
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="z-50"
        height="fit"
          width="fit"
      />
  
  );
}
