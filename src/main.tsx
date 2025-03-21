
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';

// エラーログ処理の強化
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
  throw new Error("Failed to find the root element");
}

console.log("Main script executing");
console.log("Environment:", import.meta.env.MODE);

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log("React application successfully rendered");
} catch (error) {
  console.error("React application failed to render:", error);
}
