import React from 'react';
import './App.css';
import { Search } from './pages/search.page';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"CustomOpenSans"',
    button: {
      textTransform: "none",
      fontSize: '18px'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Search/>
      </div>
    </ThemeProvider>
  );
}

export default App;
