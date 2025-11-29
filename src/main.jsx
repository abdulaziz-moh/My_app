import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLMDJdZf7U3O4tPY/Q5D1h7I2c62t+zF/nU3Nq6c7hE/eBw6Z8w4J1lq7b+lA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
  </StrictMode>,
)
