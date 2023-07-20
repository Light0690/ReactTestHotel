import { useState, useEffect, useRef, FC } from "react";
import { motion } from "framer-motion";

import carouselItem1 from "@assets/img/carouselImg1.png";
import carouselItem2 from "@assets/img/carouselimg2.png";
import carouselItem3 from "@assets/img/carouselimg3.png";

import styles from "./Caroules.module.scss";

const Carousel: FC = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const images = [
    carouselItem1,
    carouselItem2,
    carouselItem3,
    carouselItem1,
    carouselItem2,
    carouselItem3,
    carouselItem1,
    carouselItem2,
    carouselItem3,
  ];

  return (
    <motion.div
      ref={carousel}
      className={styles.carousel}
      whileTap={"grabbing"}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={styles.carousel__inner}
      >
        {images.map((image, id) => {
          return (
            <motion.div className={styles.carousel__item} key={id}>
              <img src={image} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
