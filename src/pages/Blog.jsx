import React, { 
  useRef, 

  useMemo 
} from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  AnimatePresence, 
  LayoutGroup 
} from 'framer-motion';
import styles from './Blog.module.css';


// Direct image imports
import image1 from '../assets/images/3bhk.jpg';
import image2 from '../assets/images/sustainable-urban-development.webp';
import image3 from '../assets/images/Real-Estate-Investment-Opportunities.webp';
import image4 from '../assets/images/smart.jpg';
import image5 from '../assets/images/commercial-real-estate.webp';
import image6 from '../assets/images/Architectural Innovation in Modern Construction.jpg';
import image7 from '../assets/images/about-1.jpg';
import image8 from '../assets/images/about-2.jpg';
import image9 from '../assets/images/Types of Real Estate Investment.png';
import image10 from '../assets/images/Green Building Technologies.jpg';
import image11 from '../assets/images/Residential Complex Design Trends.jpg';
import image12 from '../assets/images/Urban Regeneration Projects.png';
import image13 from '../assets/images/Technology in Real Estate.jpg';
import image14 from '../assets/images/Affordable Housing Solutions.gif';
import image15 from '../assets/images/Luxury Commercial Spaces.jpg';

const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';

const blogPosts = [
  {
    title: '2 and 3 BHK Luxury Flats in Bangalore',
    excerpt: 'Explore our latest luxury flats available for sale in Bangalore, offering modern amenities and prime locations.',
    image: image1
  },
  {
    title: 'Sustainable Urban Development Trends',
    excerpt: 'Discover how innovative design and green technologies are reshaping urban living spaces and creating more eco-friendly communities.',
    image: image2
  },
  {
    title: 'Investment Opportunities in Real Estate',
    excerpt: 'Learn about the most promising real estate investment strategies and emerging markets in the current economic landscape.',
    image: image3
  },
  {
    title: 'Smart Home Technologies',
    excerpt: 'Explore cutting-edge smart home technologies that are transforming residential spaces and enhancing living experiences.',
    image: image4
  },
  {
    title: 'Commercial Real Estate Insights',
    excerpt: 'Gain valuable insights into the commercial real estate market, including trends, challenges, and growth opportunities.',
    image: image5
  },
  {
    title: 'Architectural Innovation in Modern Construction',
    excerpt: 'Discover how innovative architectural designs are pushing the boundaries of modern construction and urban development.',
    image: image6
  },
  {
    title: 'Luxury Living Spaces Redefined',
    excerpt: 'Experience the evolution of luxury living with our curated collection of high-end residential projects and design concepts.',
    image: image7
  },
  {
    title: 'Future of Urban Planning',
    excerpt: 'Explore the future of urban planning, focusing on sustainable development, smart infrastructure, and community-centric design.',
    image: image8
  },
  {
    title: 'Real Estate Investment Strategies',
    excerpt: 'Learn proven strategies for successful real estate investments, including market analysis and risk management techniques.',
    image: image9
  },
  {
    title: 'Green Building Technologies',
    excerpt: 'Discover innovative green building technologies that are revolutionizing sustainable construction and reducing environmental impact.',
    image: image10
  },
  {
    title: 'Residential Complex Design Trends',
    excerpt: 'Explore the latest trends in residential complex design, focusing on community living, amenities, and modern architectural styles.',
    image: image11
  },
  {
    title: 'Urban Regeneration Projects',
    excerpt: 'Learn about transformative urban regeneration projects that are revitalizing cities and creating vibrant, sustainable communities.',
    image: image12
  },
  {
    title: 'Technology in Real Estate',
    excerpt: 'Discover how emerging technologies like AI, IoT, and virtual reality are reshaping the real estate industry and customer experiences.',
    image: image13
  },
  {
    title: 'Affordable Housing Solutions',
    excerpt: 'Explore innovative approaches to creating affordable housing solutions that address urban housing challenges and social needs.',
    image: image14
  },
  {
    title: 'Luxury Commercial Spaces',
    excerpt: 'Experience the pinnacle of commercial real estate design with our showcase of luxurious and innovative business environments.',
    image: image15
  }
];

const pageVariants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const BlogPost = React.memo(({ title, excerpt, image, index }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 1.1]), 
    { stiffness: 100, damping: 20 }
  );
  
  const imageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.7, 1]), 
    { stiffness: 100, damping: 20 }
  );
  
  const textTransform = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [50, 0]), 
    { stiffness: 100, damping: 20 }
  );
  
  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, 1]), 
    { stiffness: 100, damping: 20 }
  );

  return (
    <motion.div 
      ref={ref}
      className={styles.blogPost}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }
      }}
      viewport={{ 
        once: true,
        amount: 0.2
      }}
    >
      <motion.div 
        className={styles.imageContainer}
        style={{
          scale: imageScale,
          opacity: imageOpacity,
          transformOrigin: 'center center'
        }}
      >
        <motion.img 
          src={image} 
          alt={title} 
          className={styles.blogImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onError={(e) => { 
            e.target.src = PLACEHOLDER_IMAGE;
            console.error('Image failed to load', title);
          }}
        />
      </motion.div>

      <motion.div 
        className={styles.blogContent}
        style={{
          y: textTransform,
          opacity: textOpacity
        }}
      >
        <motion.h3 
          className={styles.blogTitle}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className={styles.blogExcerpt}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {excerpt}
        </motion.p>
        <motion.a 
          href="/blog/post" 
          className={styles.readMoreButton}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#007bff',
            color: 'white'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          
        </motion.a>
      </motion.div>
    </motion.div>
  );
});

const Blog = () => {
  const containerRef = useRef(null);
  
  const memoizedBlogPosts = useMemo(() => 
    blogPosts.map((post, index) => ({
      ...post,
      key: `blog-post-${index}`
    })), 
    []
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleScale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.9, 1]), 
    { stiffness: 100, damping: 20 }
  );
  
  const titleOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, 1]), 
    { stiffness: 100, damping: 20 }
  );

  return (
    <motion.div 
      ref={containerRef}
      className={styles.blogSection}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionTitle}
          style={{
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Blog
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay updated with our latest insights, trends, and expert perspectives 
            in real estate, urban development, and architectural innovation.
          </motion.p>
        </motion.div>
        <LayoutGroup>
          <motion.div 
            className={styles.blogGrid}
            layout
          >
            <AnimatePresence mode="popLayout">
              {memoizedBlogPosts.map((post, index) => (
                <BlogPost 
                  key={post.key}
                  index={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </motion.div>
  );
};

export default Blog;