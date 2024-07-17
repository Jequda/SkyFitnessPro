import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import { BrowserRouter } from 'react-router-dom'
import { CoursesProvider } from './contexts/Courses.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </React.StrictMode>
  </BrowserRouter>
)
