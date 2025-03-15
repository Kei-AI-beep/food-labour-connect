
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-primary transition-colors hover:text-primary/90">
            Food Labour Connect
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">私たちの強み</a>
          <a href="#research" className="text-foreground/80 hover:text-primary transition-colors">特徴</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">お客様の声</a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">よくある質問</a>
          <a href="#contact" className="btn-primary">お問い合わせ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              私たちの強み
            </a>
            <a 
              href="#research" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              特徴
            </a>
            <a 
              href="#testimonials" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お客様の声
            </a>
            <a 
              href="#faq" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              よくある質問
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
