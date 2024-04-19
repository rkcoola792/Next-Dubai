
import { motion } from 'framer-motion';
const Heading = ({heading,subheading}) => {
  return (
    <motion.div
      className="top-heading flex flex-col gap-4 justify-center items-center text-center px-2"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <p className="text-mainBlue tracking-widest uppercase font-semibold">
        {heading}
      </p>
      <h2 className="sm:text-5xl text-3xl font-bold capitalize" style={{lineHeight:1.5}}>{subheading}</h2>
    </motion.div>
  );
}

export default Heading
