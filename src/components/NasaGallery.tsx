import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LandsatLetter {
  letter: string;
  imageUrl: string;
  location: string;
}

const NAME = 'VINOTH';
const CACHE_KEY = 'nasa_landsat_vinoth';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Letter metadata from NASA's Landsat collection
// Each letter has different number of available variants
const LETTER_VARIANTS: Record<string, number> = {
  V: 4, // V has variants 0-3
  I: 5, // I has variants 0-4
  N: 3, // N has variants 0-2
  O: 2, // O has variants 0-1
  T: 2, // T has variants 0-1
  H: 2, // H has variants 0-1
};

export const NasaGallery = () => {
  const [letters, setLetters] = useState<LandsatLetter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLandsatImages = async () => {
      try {
        // Check if we have cached data
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { letters: cachedLetters, timestamp } = JSON.parse(cachedData);
          const now = Date.now();
          
          // If cache is still valid (less than 24 hours old), use it
          if (now - timestamp < CACHE_DURATION) {
            setLetters(cachedLetters);
            setLoading(false);
            return;
          }
        }

        // Build Landsat letter images for "VINOTH" with random variants
        const landsatLetters: LandsatLetter[] = NAME.split('').map((letter) => {
          const maxVariants = LETTER_VARIANTS[letter] ?? 2;
          const randomVariant = Math.floor(Math.random() * maxVariants);
          return {
            letter,
            imageUrl: `https://science.nasa.gov/specials/your-name-in-landsat/images/${letter.toLowerCase()}_${randomVariant}.jpg`,
            location: 'Earth Feature',
          };
        });

        // Cache the results
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            letters: landsatLetters,
            timestamp: Date.now(),
          })
        );

        setLetters(landsatLetters);
        setLoading(false);
      } catch (err) {
        console.error('Error loading Landsat images:', err);
        setError('Unable to load NASA Landsat images');
        setLoading(false);
      }
    };

    fetchLandsatImages();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            {NAME} in Landsat
          </h2>
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            {NAME} in Landsat
          </h2>
          <div className="flex items-center justify-center min-h-[300px]">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (letters.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            {NAME} in Landsat
          </h2>
          <div className="flex items-center justify-center min-h-[300px]">
            <p className="text-gray-400">No images found</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="w-full px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {letters.map((item, index) => (
            <motion.div
              key={`${item.letter}-${index}`}
              className="group relative overflow-hidden rounded-lg bg-gray-900 w-full h-full min-h-[200px] md:min-h-[250px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.imageUrl}
                alt={`Letter ${item.letter} - ${item.location}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                  <h3 className="text-white font-bold text-4xl mb-2">
                    {item.letter}
                  </h3>
                  <p className="text-gray-300 text-xs text-center line-clamp-2">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-gray-500 text-xs text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          NASA Landsat Program
        </motion.p>
      </div>
    </section>
  );
};
