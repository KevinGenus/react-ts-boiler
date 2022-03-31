import * as ReactDOMClient from 'react-dom/client';

import App from './components/App';
import React from 'react';

const container = document.getElementById('root');
container
  ? ReactDOMClient.createRoot(container).render(
    <App />
  )
  : console.error('container not found');
