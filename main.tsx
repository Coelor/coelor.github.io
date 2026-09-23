import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.portfolio'
import ErrorBoundary from './src/components/ErrorBoundary'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
