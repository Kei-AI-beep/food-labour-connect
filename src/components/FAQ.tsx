
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <section id="faq" className="section-container py-20 bg-agri-green/10 relative overflow-hidden">
      {/* 背景の装飾要素 */}
      <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-agri-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-agri-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-agri-earth/20 rounded-full blur-3xl" />
        
        {/* 背景の幾何学模様 */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-agri-green/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-agri-green/30 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-agri-green/30 rounded-full" />
        
        {/* 農業関連の背景パターン */}
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80" 
          alt="" 
          className="absolute w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="chip mb-3">よくある質問</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ご不明点について<span className="text-primary">お答え</span>します
          </h2>
          <p className="text-lg text-gray-600">
            サービスについてよくいただくご質問をまとめました。その他ご不明点はお気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8 fade-up relative z-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                <div className="flex items-center text-left">
                  <div className="bg-agri-green/20 rounded-full p-2 mr-4 flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-agri-green" />
                  </div>
                  <span>とりあえず登録だけでも可能ですか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 text-gray-600">
                もちろんです。
                ご登録いただき現場の状況をなるべくはやく把握することで適切なアプローチがよりスムーズになります。
                まずは無料登録からご相談いただき現状を共有させていただきたいと思っております。
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                <div className="flex items-center text-left">
                  <div className="bg-agri-green/20 rounded-full p-2 mr-4 flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-agri-green" />
                  </div>
                  <span>どのような人材を紹介していただけますか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 text-gray-600">
                食品工場での勤務経験や農業に関する基礎知識を持つ人材を中心に、
                お客様の要件に合わせて厳選した人材をご紹介しています。
                外国人技能実習生や特定技能の方々も含め、幅広い人材プールからマッチングいたします。
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                <div className="flex items-center text-left">
                  <div className="bg-agri-green/20 rounded-full p-2 mr-4 flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-agri-green" />
                  </div>
                  <span>費用はどのようになっていますか？</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 text-gray-600">
                初回のご相談は無料です。具体的なサービス内容やご要望によって費用は異なりますので、
                まずはお気軽にご相談ください。人材紹介の場合は成功報酬型の料金体系を基本としており、
                採用が決まるまで紹介料は発生しません。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
