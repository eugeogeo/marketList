import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
