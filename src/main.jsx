import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'

import { HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
