
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "他社では解決できなかった季節労働者の確保が実現しました。現場を何度も訪れて理解してくれたことが大きな違いでした。",
    author: "鈴木 健太",
    position: "農業法人 代表取締役",
    company: "グリーンフィールド株式会社"
  },
  {
    quote: "食品加工の特殊な環境を理解してくれる人材会社は初めてでした。提案された改善策も的確で、離職率が30%も改善しました。",
    author: "田中 真由美",
    position: "食品工場 人事マネージャー",
    company: "ナチュラルフーズ株式会社"
  },
  {
    quote: "リサーチの徹底ぶりに驚きました。現場の細かい課題まで把握し、本当に合う人材を紹介してくれています。",
    author: "佐藤 誠一",
    position: "生産管理部長",
    company: "フレッシュベジタブル株式会社"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-container fade-up relative py-24">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1626193050507-2ba429602a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80" 
          alt="" 
          className="absolute w-full h-full object-cover opacity-15"
        />
        
        {/* 幾何学的な装飾要素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-agri-green/20 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-agri-blue/20 to-transparent rounded-full"></div>
        
        <div className="absolute left-1/4 top-40 w-16 h-16 border border-agri-green/40 rounded-full"></div>
        <div className="absolute right-1/3 bottom-20 w-24 h-24 border border-agri-earth/40 rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="chip mb-3">お客様の声</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            多くの企業様に信頼されています
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            私たちのサービスを利用された企業様からいただいた声です
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => testimonialRefs.current[index] = el}
              className="testimonial-card fade-up stagger-item flex flex-col bg-white/95 backdrop-blur-sm shadow-md relative"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* カードごとの装飾 */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-agri-green/20 rounded-full -z-10"></div>
              
              <div className="mb-4 relative">
                <div className="absolute -top-10 -left-6 text-agri-green/20 text-8xl font-serif">"</div>
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="inline-block w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 flex-grow italic relative z-10">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
