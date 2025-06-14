
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="content max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center text-center mt-20 md:mt-0 md:items-start md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-6 relative"
            >
              <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-theme-purple/20 to-theme-blue/20 text-sm font-medium backdrop-blur-sm animate-pulse-slow">
                Data Analyst & AI/ML Enthusiast
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-purple via-theme-blue to-theme-cyan">
                Building the future
              </span>
              <br/>with AI & Code
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-lg md:text-xl max-w-2xl text-foreground mb-2 mb-10"
            >
              Specializing in AI systems, machine learning models, and creative technology solutions
              that transform ideas into impactful digital experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-theme-purple to-theme-blue hover:opacity-90 transition-opacity text-white border-0">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-theme-purple/30">
              <img 
                src="https://github.com/GhoshSreejon/sreejon-ai-portfolio-3d/raw/main/tfug_1by1.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2/50 mb-2">Scroll to explore</span>
          <ArrowDownCircle className="h-6 w-6 text-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
