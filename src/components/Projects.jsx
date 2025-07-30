import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/Skinstric-AI.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> A.I Skinstric</h3>
          <p>
            A replica of the Skinstric website featuring integration with two
            APIs to enable AI-powered facial scanning and analysis. Users can
            take or upload a photo, and the AI provides detailed insights based
            on the submitted image.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>JavaScript</span>
            <span>React</span>
            <div className="project-links">
              <a
                href="https://github.com/ghost0985/Skinstric-Project"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://skinstric-project.vercel.app/" target="_blank">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/intership.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> NFT Market</h3>
          <p>
            A fully developed NFT marketplace clone for buying and selling NFTs.
            The site integrates multiple APIs to display real-time data across
            the platform, providing users with a seamless and informative
            experience.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>JavaScript</span>
            <span>React</span>
            <div className="project-links">
              <a
                href="https://github.com/ghost0985/Logan-Internship"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://logan-internship.vercel.app/" target="_blank">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/movie-site.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> A Movie</h3>
          <p>
            A movie website built to enhance my React skills, featuring
            integration with a live API to fetch and display movies. Each title
            includes detailed descriptions and information, offering users an
            engaging and informative browsing experience.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>JavaScript</span>
            <span>React</span>
            <div className="project-links">
              <a
                href="https://github.com/ghost0985/A-Movie-Website-2"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://a-movie-website-2.vercel.app/" target="_blank">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
