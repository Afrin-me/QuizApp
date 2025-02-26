import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "./components/ui/provider";
import { HashRouter } from 'react-router-dom';
import AuthContextProvider from "./context/AuthContextProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <Provider>
          <App />
        </Provider>
      </AuthContextProvider>
    </HashRouter>
  </StrictMode>
);
