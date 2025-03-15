
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { QuestionMarkCircle } from "lucide-react";

const FAQ = () => {
  return (
    <section id="faq" className="section-container py-20 bg-agri-green/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="chip mb-3">よくある質問</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ご不明点について<span className="text-primary">お答え</span>します
          </h2>
          <p className="text-lg text-gray-600">
            サービスについてよくいただくご質問をまとめました。その他ご不明点はお気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 fade-up">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                <div className="flex items-center text-left">
                  <div className="bg-agri-green/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <QuestionMarkCircle className="h-5 w-5 text-agri-green" />
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
                  <div className="bg-agri-green/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <QuestionMarkCircle className="h-5 w-5 text-agri-green" />
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
                  <div className="bg-agri-green/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <QuestionMarkCircle className="h-5 w-5 text-agri-green" />
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
