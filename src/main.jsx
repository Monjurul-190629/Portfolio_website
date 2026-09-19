import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import * as Sentry from "@sentry/react";

import { router } from './routers/router';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='overflow-x-hidden md:overflow-x-visible'>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
)