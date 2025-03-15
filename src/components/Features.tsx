
import { useEffect, useRef } from 'react';
import { Users, Search, ClipboardCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-10 w-10 text-agri-green" />,
    title: "業界に特化した人材マッチング",
    description: "食品工場や農業の特性を理解したうえで、最適な人材を見つけ出します。季節変動や専門スキルを考慮したマッチングを実現。"
  },
  {
    icon: <Search className="h-10 w-10 text-agri-green" />,
    title: "徹底的な現場リサーチ",
    description: "お客様の現場に直接訪問し、実際の作業環境や求められるスキルを詳細に分析。表面的なニーズだけでなく、本質的な課題を発見します。"
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-agri-green" />,
    title: "カスタマイズされた解決策",
    description: "一律のサービスではなく、各企業の状況に合わせたオーダーメイドの人材確保戦略を立案。継続的な改善提案も行います。"
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-agri-green" />,
    title: "長期的なパートナーシップ",
    description: "単なる人材紹介で終わらず、定着率向上のためのフォローアップや業務改善提案を継続的に実施。長期的な視点でサポートします。"
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);

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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-container fade-up">
      <div className="text-center mb-16">
        <span className="chip mb-3">私たちの強み</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          人材不足を解決する革新的なアプローチ
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          食品工場や農業の現場が直面する独自の課題を理解し、最適な人材ソリューションを提供します
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card fade-up stagger-item"
            ref={el => featureRefs.current[index] = el}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="bg-agri-green/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
