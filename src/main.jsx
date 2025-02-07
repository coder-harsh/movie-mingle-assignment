import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <ThemeProvider>
        <ChakraProvider >
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
