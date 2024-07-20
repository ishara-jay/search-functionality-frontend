import React from 'react';
import './App.css';
import { Search } from './pages/search.page';
import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

const theme = createTheme({
  typography: {
    fontFamily: '"CustomOpenSans"',
    button: {
      textTransform: "none"
    }
  }
})

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Search/>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
