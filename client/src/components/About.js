import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/outline';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AcademicCapIcon className="h-16 w-16 mx-auto text-purple-950" />
          <h2 className="text-3xl font-bold mt-4">About Me</h2>
          <p className="mt-4 text-gray-600">
            Hi there! 👋 I’m <span className="font-bold">Aqida Haidari</span>, a
            passionate <span className="font-bold">Full-Stack Developer</span>{' '}
            who loves turning complex problems into elegant, scalable solutions.{' '}
            With <span className="font-bold">4 years of experience</span>, I
            specialize in crafting efficient front-end and back-end
            architectures and building exceptional user experiences.
          </p>
          <p className="mt-4 text-gray-600">
            I am an active contributor to the open-source community and have
            worked on impactful projects, including: <br />
            <a
              href="https://owncloud.com"
              className="text-purple-600 hover:underline"
            >
              OwnCloud
            </a>
            ,{' '}
            <a
              href="https://sourcegraph.com"
              className="text-purple-600 hover:underline"
            >
              Sourcegraph
            </a>
            ,{' '}
            <a
              href="https://strapi.io"
              className="text-purple-600 hover:underline"
            >
              Strapi
            </a>
            ,{' '}
            <a
              href="https://chatwoot.com"
              className="text-purple-600 hover:underline"
            >
              Chatwoot
            </a>
            ,{' '}
            <a
              href="https://bluemeg.com"
              className="text-purple-600 hover:underline"
            >
              Bluemeg
            </a>
            , and more.
          </p>
          <p className="mt-4 text-gray-600">
            I thrive on exploring cutting-edge technologies and creating
            software that makes life easier for users. From{' '}
            <span className="font-bold">React.js</span> on the front end to{' '}
            <span className="font-bold">Node.js</span> and{' '}
            <span className="font-bold">Express.js</span> on the back end, I
            strive to bridge the gap between functionality and design.
          </p>
          <p className="mt-4 text-gray-600">
            When I’m not coding, you’ll often find me exploring nature trails,
            reading about AI advancements, or sharing knowledge with the
            community. I’m always excited about the next challenge—whether it’s
            building a new feature, optimizing performance, or creating
            something entirely from scratch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
