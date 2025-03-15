
import { useEffect, useRef } from 'react';
import ResearchChart from './ResearchChart';

const researchSteps = [
  {
    number: "01",
    title: "ヒアリング・課題の特定",
    description: "現場の責任者や従業員との綿密な対話を通じて、表面化している問題だけでなく、潜在的な課題も特定します。"
  },
  {
    number: "02",
    title: "現場環境の分析",
    description: "実際の工場や農場を訪問し、作業環境、プロセス、設備などを詳細に調査。効率化できる点や改善点を見つけ出します。"
  },
  {
    number: "03",
    title: "データ収集と分析",
    description: "人材の定着率や生産性に関するデータを収集・分析し、科学的根拠に基づいた課題解決策を立案します。"
  },
  {
    number: "04",
    title: "カスタマイズされた戦略立案",
    description: "得られた情報をもとに、各企業の状況に最適化された人材確保・定着戦略を提案します。"
  }
];

const Research = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

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

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="research" ref={sectionRef} className="section-container bg-accent/50 rounded-3xl my-20 fade-up overflow-hidden">
      <div className="text-center mb-16">
        <span className="chip mb-3">差別化ポイント</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          徹底的なリサーチから始まる <span className="text-primary">成功への道筋</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          私たちは、表面的なニーズだけで満足せず、現場の本質的な課題を見極めるために徹底したリサーチを行います
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="fade-right md:order-2">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-full bg-white p-6">
            <h3 className="text-center text-xl font-bold mb-6">入社3ヶ月以内の離職理由</h3>
            <ResearchChart />
          </div>
        </div>
        
        <div className="flex flex-col justify-center fade-left md:order-1">
          <h3 className="text-2xl font-bold mb-4">なぜリサーチが重要なのか</h3>
          <p className="text-gray-600 mb-6">
            食品工場や農業の現場は、一般的なオフィスワークとは全く異なる環境です。気温、湿度、作業時間、季節変動など、様々な特殊条件があります。
          </p>
          <p className="text-gray-600 mb-6">
            これらの条件を正確に把握せずに人材を送り込んでも、すぐに離職してしまうケースが多発。私たちは現場の実態を徹底的に理解することで、ミスマッチを防ぎ、長期的に活躍できる人材を見つけ出します。
          </p>
          <div className="bg-white p-4 rounded-lg border border-agri-green/30 shadow-sm">
            <p className="text-sm text-agri-green-dark font-medium">
              「人材紹介会社は現場を見ずに人を送ってくる」というよくある不満を解消します。
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {researchSteps.map((step, index) => (
          <div
            key={index}
            ref={el => stepRefs.current[index] = el}
            className="research-card scale-up stagger-item bg-white/90"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="text-3xl font-bold text-agri-green mb-4">{step.number}</div>
            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
