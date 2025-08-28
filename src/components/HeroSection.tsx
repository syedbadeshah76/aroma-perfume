import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-perfume.jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight"
          >
            Discover Our
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Latest Perfume
            </span>
            Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Indulge in the art of fragrance with our curated selection of luxury perfumes.
            Each scent tells a unique story, crafted to awaken your senses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Explore Collections
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-3 h-3 bg-accent rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary-glow rounded-full opacity-40"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-2/3 right-1/3 w-4 h-4 bg-accent/50 rounded-full"
      />
    </section>
  );
};

export default HeroSection;
