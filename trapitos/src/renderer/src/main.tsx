
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ToastProvider, HeroUIProvider } from '@heroui/react';
import "./index.css"; 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider  spinnerVariant='spinner'>
      <ToastProvider />
      <App />
    </HeroUIProvider>
  </StrictMode>
)
