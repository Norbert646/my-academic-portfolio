import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import * as Sentry from '@sentry/react'
import './index.css'
import App from './App.tsx'

Sentry.init({
  dsn: 'https://b3b46d88a0b2e14df408855f33e88890@o4511955564822528.ingest.us.sentry.io/4511955570720768',
  environment: import.meta.env.MODE,
  tracesSampleRate: 0.1,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
)