
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="rounded-full bg-agri-green/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold text-agri-green">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">ページが見つかりません</h1>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <a
          href="/"
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          トップページに戻る
        </a>
      </div>
    </div>
  );
};

export default NotFound;
