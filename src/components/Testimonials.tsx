
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
    <section id="testimonials" ref={sectionRef} className="section-container fade-up">
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
            className="testimonial-card fade-up stagger-item flex flex-col"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="inline-block w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6 flex-grow italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
