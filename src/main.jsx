import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from "./context/AuthContextProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Provider>
          <App />
        </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
