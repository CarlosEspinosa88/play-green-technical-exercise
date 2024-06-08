import { motion, useAnimation } from 'framer-motion';
import type { CardType } from '../../interfaces';

const Card = ({ children, index, onSwipe }: CardType) => {
  const controls = useAnimation();

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      controls.start({ x: 2000 }).then(() => onSwipe('right', index));
    } else if (offset < -100 || velocity < -500) {
      controls.start({ x: -2000 }).then(() => onSwipe('left', index));
    } else {
      controls.start({ x: 0, y: 0 });
    }
  };

  return (
    <div>
      <motion.div
        drag="x"
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ x: 0, y: 0 }}
        whileTap={{ scale: 1.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
