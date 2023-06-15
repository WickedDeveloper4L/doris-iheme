import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import portfolio from "../../../assets/chrisportrait.jpg";
import RESUME from "../../../assets/chris Resume.pdf";
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img src={portfolio} transition={{ duration: 0.3 }} />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
          Hello, I'm a versatile professional experienced in social media management, graphics design, content creation, and event planning. With expertise in crafting engaging online presence, designing captivating visuals, producing compelling content, and orchestrating memorable events, I bring innovative solutions and a keen eye for detail to every project. I thrive on creating meaningful connections and exceeding expectations, and I invite you to explore my portfolio and collaborate on bringing your visions to life.
          </p>

          <motion.a
            href={RESUME}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
