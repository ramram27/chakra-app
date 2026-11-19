## Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite

## vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})


## src/index.css
@import "tailwindcss";


## use chakra ui
npm install @chakra-ui/react @emotion/react

## src/components/ui/provider.jsx
import {
  ChakraProvider,
  defaultSystem,
} from '@chakra-ui/react'

export function Provider({ children }) {
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  )
}

## main.jsx 
import { Provider } from './components/ui/provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>