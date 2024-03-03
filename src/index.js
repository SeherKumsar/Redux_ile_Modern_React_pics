import React from 'react';
// Aternative 1
// import { createRoot } from 'react-dom/client';

// Aternative 2
// 👇️ For client createRoot or hydrateRoot
// import * as ReactDOMClient from 'react-dom/client';
// 👇️ For renderToPipeableStream or renderToReadableStream
// import * as ReactDOMServer from 'react-dom/server';

import ReactDOMClient from 'react-dom/client';
import App from './App';
import searchImages from './api';

searchImages();

const el = document.getElementById('root');
const root = ReactDOMClient.createRoot(el);
// const root = createRoot(el);

root.render(<App />);
