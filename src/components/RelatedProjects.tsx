

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import styles from './RelatedProjects.module.css';

const RelatedProjects = () => {
  const projects = [
    {
      title: 'Best Food Delivery Software Tutorial',
      // Fixed: Now points to the actual JPG image thumbnail for this video
      thumbnail: 'https://img.youtube.com/vi/bAa7_TkcmQs/maxresdefault.jpg',
      tags: ['Food Delivery Software'],
      // Fixed: Standard watch link for opening in a new tab
      link: 'https://www.youtube.com/watch?v=bAa7_TkcmQs',
    },
    {
      title: 'Real-Time Tracking Software',
      thumbnail: 'https://img.youtube.com/vi/e2qSo0NGR-E/maxresdefault.jpg',
      tags: ['Food Delivery Software'],
      link: 'https://www.youtube.com/watch?v=e2qSo0NGR-E',
    },
    {
      title: 'Food Delivery Company Website',
      thumbnail: 'https://img.youtube.com/vi/1CGj0iO5aWc/maxresdefault.jpg',
      tags: ['Food Delivery Software'],
      link: 'https://www.youtube.com/watch?v=1CGj0iO5aWc',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Related Projects</h2>
          <p className="section-subtitle">
            আমাদের সফটওয়্যারের বিভিন্ন ফিচারের ভিডিও টিউটোরিয়াল এবং ডেমো এখানে দেখতে পারেন
          </p>
        </motion.div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={styles.projectCard}
            >
              <div className={styles.videoThumb}>
                <img src={project.thumbnail} alt={project.title} />
                <div className={styles.playButton}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;