
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-agri-green/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-agri-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="chip mb-4">食品工場・農業の人材確保に革新的なソリューション</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">現場の声</span>から始める<br />
              人材確保の新しいカタチ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              食品工場や農業分野における人材不足の課題を、徹底的なリサーチと現場の声を活かした革新的なアプローチで解決します。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              無料相談する
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#research" className="btn-secondary w-full sm:w-auto">
              私たちのアプローチを見る
            </a>
          </div>

          <div className="mt-16 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-10" />
            <div className="relative z-0 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1569377349925-14b7e41f8898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="食品工場と農業の人材" 
                className="w-full object-cover h-64 sm:h-80 transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
