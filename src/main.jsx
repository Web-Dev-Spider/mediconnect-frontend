import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster unstyled
      toastOptions={{
        classNames: {
          toast: 'rounded-md p-4 shadow-md',
          title: 'font-semibold',
          description: 'text-sm opacity-90',
        },
      }} />
    <App />
  </StrictMode>,
)
