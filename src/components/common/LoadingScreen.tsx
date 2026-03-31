import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[10000] bg-[#020617] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="w-20 h-20 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-2 border-t-accent-blue border-r-transparent border-b-transparent border-l-transparent rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 border-2 border-t-accent-purple border-r-transparent border-b-transparent border-l-transparent rounded-full opacity-50"
          />
          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 1, 0.2] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute inset-0 flex items-center justify-center font-display font-black text-accent-blue text-4xl"
          >
            RJ
          </motion.div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase">Loading Portfolio...</div>
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'circIn' }}
              className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
