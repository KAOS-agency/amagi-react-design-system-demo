import React from 'react';
import { ThemeProvider } from "@kaos-agency/amagi-react-design-system";
import './App.css';

function App() {
  return (
    <ThemeProvider theme="dark" className="App">
      <h1>Hello world!</h1>
    </ThemeProvider>
  );
}

export default App;
