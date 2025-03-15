
import { useEffect, useRef } from 'react';
import { ArrowRight, PhoneCall, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-container py-16 md:py-20 bg-gradient-to-b from-white to-agri-green/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="fade-right px-4">
            <span className="chip mb-3">お問い合わせ</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              人材確保の課題を<br className="md:hidden" />
              <span className="text-primary">一緒に解決</span>しましょう
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              まずは無料相談から。現場の課題や悩みをお聞かせください。私たちの専門スタッフが、最適な解決策をご提案します。
            </p>

            <div className="space-y-4 mb-6 md:mb-8">
              <div className="flex items-start">
                <div className="bg-agri-green/10 rounded-full p-2 mr-4 shrink-0">
                  <PhoneCall className="h-5 w-5 text-agri-green" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">お電話でのお問い合わせ</p>
                  <p className="text-gray-600 text-sm md:text-base">03-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-agri-green/10 rounded-full p-2 mr-4 shrink-0">
                  <Mail className="h-5 w-5 text-agri-green" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">メールでのお問い合わせ</p>
                  <p className="text-gray-600 text-sm md:text-base break-all">info@food-labour-connect.jp</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-agri-green/10 rounded-full p-2 mr-4 shrink-0">
                  <MapPin className="h-5 w-5 text-agri-green" />
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">所在地</p>
                  <p className="text-gray-600 text-sm md:text-base">〒100-0001 東京都千代田区1-1-1</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 mb-6 md:mb-8 mx-auto max-w-md">
              <img 
                src="/placeholder.svg" 
                alt="当社スタッフによる食品工場での人材サポート" 
                className="w-full h-32 md:h-48 object-cover rounded-md mb-3 md:mb-4" 
              />
              <p className="text-xs md:text-sm text-gray-500 italic text-center">当社スタッフにお任せください！</p>
            </div>

            <a href="#contact-form" className="btn-primary text-sm md:text-base">
              無料相談する
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="fade-left px-4">
            <div id="contact-form" className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">お問い合わせフォーム</h3>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="例：株式会社食品工場"
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="例：山田 太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="例：example@mail.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="例：03-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ内容
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="現在の課題や状況などをお聞かせください"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary text-sm md:text-base"
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
