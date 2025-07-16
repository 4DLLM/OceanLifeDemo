import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// Extend the Chakra UI theme for Ocean Life Yacht Services
const theme = extendTheme({
  colors: {
    brand: {
      primary: '#003366',       // Deep ocean blue
      primaryDark: '#002244',   // Darker ocean blue
      secondary: '#1a365d',     // Navy blue
      accent: '#4299e1',        // Bright blue
      light: '#e6f3ff',         // Light blue
      text: '#2d3748',          // Dark gray text
      dark: '#1a202c',          // Almost black
    }
  },
  fonts: {
    heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'brand.text',
      },
      a: {
        transition: 'all 0.3s ease',
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
      },
      variants: {
        primary: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.primaryDark',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }
        },
        secondary: {
          bg: 'transparent',
          color: 'brand.primary',
          border: '2px solid',
          borderColor: 'brand.primary',
          _hover: {
            bg: 'brand.primary',
            color: 'white',
            transform: 'translateY(-2px)',
          }
        },
      },
      defaultProps: {
        variant: 'primary',
      }
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
        lineHeight: '1.2',
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename="/OceanLifeDemo">
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)