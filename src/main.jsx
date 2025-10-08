import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const qc = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={qc}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>

  </StrictMode>,
)
