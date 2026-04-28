/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Droplets, 
  ArrowRight, 
  X,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  Instagram,
  Facebook
} from 'lucide-react';
import { APARTMENTS } from './constants';
import { Apartment } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset image index when apartment changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedApartment]);

  const categories = ['All', 'Downtown', 'Marina', 'Palm Jumeirah', 'Business Bay'];

  const filteredApartments = useMemo(() => {
    return APARTMENTS.filter(apt => {
      const matchesCategory = selectedCategory === 'All' || apt.category === selectedCategory;
      const matchesSearch = apt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          apt.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedApartment?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedApartment.images!.length);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedApartment?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedApartment.images!.length) % selectedApartment.images!.length);
    }
  };

  return (
    <div className="min-h-screen bg-gold-50 font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-10 py-6 flex items-center justify-between border-b ${
          scrolled ? 'bg-dubai-night/90 backdrop-blur-md border-white/10' : 'bg-transparent border-white/5'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif tracking-tighter text-white uppercase">Aura<span className="text-accent">Dubai</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
          <a href="#" className="text-accent">Penthouse</a>
          <a href="#" className="hover:text-white transition-colors">Collections</a>
          <a href="#" className="hover:text-white transition-colors">Invest</a>
          <a href="#" className="hover:text-white transition-colors">Concierge</a>
        </div>

        <button className="border border-accent px-6 py-2 text-[10px] uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all">
          Inquire Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-dubai-night overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1549918840-7d088518cf03?q=80&w=2000&auto=format&fit=crop"
            alt="Dubai Skyline"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 luxury-gradient" />
        </motion.div>

        <div className="relative h-full container mx-auto px-10 flex flex-col justify-center items-start pt-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent text-black text-[9px] font-bold uppercase px-3 py-1 tracking-wider">Premier Collection</span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest">Global Portfolio</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] text-white leading-[0.9] mb-8 font-light tracking-tighter">
              The Finest <br />
              <span className="font-serif italic text-accent">Sky Residences</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full max-w-2xl relative mt-8"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-sm flex items-center group">
              <Search className="ml-4 text-white/50 group-focus-within:text-gold-500 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search by area, property or lifestyle..."
                className="bg-transparent border-none focus:ring-0 text-white w-full px-4 py-4 placeholder:text-white/30 text-sm font-light tracking-wide outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-gold-500 text-dubai-night px-8 py-4 text-xs uppercase font-bold tracking-widest hover:bg-gold-600 transition-colors">
                Explore
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-6 flex items-center gap-6 text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium animate-pulse">
          <div className="w-px h-12 bg-white/20" />
          <span>Scroll to Discover</span>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-20 container mx-auto px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Exclusive <span className="italic font-serif text-accent">Curations</span>
            </h2>
            <p className="text-white/40 max-w-lg text-sm leading-relaxed tracking-wide font-light">
              Limited-edition properties featuring unparalleled craftsmanship and sweeping architectural narratives within Dubai's elite circles.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 text-[9px] uppercase tracking-[0.2em] font-bold transition-all border ${
                  selectedCategory === cat 
                    ? 'bg-accent text-black border-accent' 
                    : 'border-white/10 hover:border-white/30 text-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredApartments.map((apt, index) => (
              <motion.div
                key={apt.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedApartment(apt)}
              >
                <div className="relative overflow-hidden aspect-[16/10] mb-8 border border-white/5">
                  <img 
                    src={apt.imageUrl}
                    alt={apt.title}
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {apt.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-black px-3 py-1 text-[8px] uppercase font-bold tracking-widest shadow-2xl">
                      Masterpiece
                    </div>
                  )}
                  <div className="absolute inset-0 bg-dubai-night/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 border border-white/40 flex items-center justify-center text-white text-[9px] uppercase tracking-widest font-bold group-hover:bg-white group-hover:text-black transition-all">
                      Details
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold block">{apt.location}</span>
                      <h3 className="text-2xl font-serif text-white tracking-tight group-hover:text-accent transition-colors italic">{apt.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-white/20 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-accent italic text-xs font-serif">01</span>
                      <span className="text-[9px] uppercase tracking-widest font-medium">{apt.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent italic text-xs font-serif">02</span>
                      <span className="text-[9px] uppercase tracking-widest font-medium">{apt.sqft} SQ.FT</span>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                      <span className="text-[10px] text-white tracking-[0.1em] font-light">{apt.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dubai-night text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium py-12 px-10 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-12 items-center">
             <div className="flex flex-col gap-1">
                <span className="text-[8px] text-white/20">Coordinates</span>
                <span className="text-white/60">25.1972° N, 55.2744° E</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[8px] text-white/20">Status</span>
                <span className="text-accent">Ready for Handover</span>
             </div>
          </div>

          <div className="flex items-center gap-2">
             <span className="text-lg font-serif tracking-tighter text-white">Aura<span className="text-accent">Dubai</span></span>
          </div>

          <div className="flex flex-col items-end gap-1">
             <span className="text-[8px] text-white/20">Portfolio &copy; 2026</span>
             <span className="text-white/40">International Holdings</span>
          </div>
        </div>
      </footer>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedApartment && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApartment(null)}
              className="absolute inset-0 bg-dubai-night/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dubai-night w-full max-w-5xl max-h-[90vh] overflow-hidden relative border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedApartment(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-3/5 h-[300px] md:h-auto relative overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={selectedApartment.images ? selectedApartment.images[currentImageIndex] : selectedApartment.imageUrl} 
                    alt={`${selectedApartment.title} View ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {selectedApartment.images && selectedApartment.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all z-10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all z-10"
                    >
                      <ChevronRight size={20} />
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedApartment.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(i);
                          }}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            currentImageIndex === i ? 'bg-accent w-4' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-dubai-night via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-10 left-10 pointer-events-none">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent text-black text-[9px] font-bold uppercase px-3 py-1 tracking-wider">Release 2026</span>
                    <span className="text-white/60 text-[10px] uppercase tracking-widest">{selectedApartment.location}</span>
                  </div>
                  <h2 className="text-5xl font-serif text-white leading-tight italic">{selectedApartment.title}</h2>
                </div>
              </div>

              <div className="w-full md:w-2/5 p-10 flex flex-col border-l border-white/10 overflow-y-auto">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-10">
                    <p className="text-accent text-[10px] uppercase tracking-[0.3em] mb-2">Investment Value</p>
                    <h2 className="text-4xl text-white font-serif">{selectedApartment.price}</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                      <div className="w-8 text-accent text-sm italic font-serif">01</div>
                      <div>
                        <h3 className="text-[10px] uppercase tracking-widest text-white/40">Accommodation</h3>
                        <p className="text-lg text-white/80 font-light">{selectedApartment.beds} Bedrooms</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                      <div className="w-8 text-accent text-sm italic font-serif">02</div>
                      <div>
                        <h3 className="text-[10px] uppercase tracking-widest text-white/40">Total Surface</h3>
                        <p className="text-lg text-white/80 font-light">{selectedApartment.sqft} Sq. Ft.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                      <div className="w-8 text-accent text-sm italic font-serif">03</div>
                      <div>
                        <h3 className="text-[10px] uppercase tracking-widest text-white/40">Master Suite</h3>
                        <p className="text-lg text-white/80 font-light">{selectedApartment.baths} Bathrooms</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 overflow-y-auto max-h-32 pr-2 custom-scrollbar text-aura-grey">
                    <p className="text-xs leading-relaxed opacity-60 font-light tracking-wide italic">
                      {selectedApartment.description}
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <button className="flex-1 bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all">
                    Inquire
                  </button>
                  <button className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white/5 text-white transition-all">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
