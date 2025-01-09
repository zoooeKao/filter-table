import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App.jsx';
import {ConditionsProvider} from './context/index.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConditionsProvider>
      <App />
    </ConditionsProvider>
  </StrictMode>
);
