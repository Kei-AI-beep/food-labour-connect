
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Food Labour Connect</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              私たちは、食品工場や農業分野における人材不足の課題を解決するための革新的なサービスを提供しています。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.037 10.037 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.992 18.166c-.338.142-.691.258-1.057.358-.732.2-1.493.342-2.283.399 0-.02-.8.004-.12.004-.261 0-.518-.014-.772-.034a13.57 13.57 0 01-1.095-.123c-.391-.06-.787-.138-1.178-.233a10.759 10.759 0 01-1.21-.363 9.142 9.142 0 01-3.862-2.644 9.103 9.103 0 01-2.373-4.311 9.165 9.165 0 01-.19-1.857c0-.628.062-1.254.185-1.858a9.02 9.02 0 012.353-4.301c1.088-1.088 2.432-1.891 3.881-2.375a9.196 9.196 0 011.854-.355c.621-.061 1.243-.062 1.867-.003.314.03.628.071.94.126.314.056.627.13.935.217a9.067 9.067 0 014.479 3.126 9.111 9.111 0 012.13 4.614c.053.314.088.63.113.946.026.314.035.628.028.942a9.208 9.208 0 01-.188 1.857 9.05 9.05 0 01-2.376 4.302c-.844.844-1.825 1.524-2.913 2.019z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">人材マッチング</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">現場リサーチ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">人材定着支援</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">業務改善コンサルティング</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">会社概要</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">代表メッセージ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">採用情報</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Food Labour Connect. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">プライバシーポリシー</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">利用規約</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white shadow-md rounded-full p-3 border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
        aria-label="トップに戻る"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
