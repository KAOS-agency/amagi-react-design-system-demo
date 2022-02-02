import React from 'react';
import {
  ProgressBar,
  ThemeProvider,
} from "@kaos-agency/amagi-react-design-system";
import './App.css';

function App() {
  return (
    <ThemeProvider theme="dark" className="App">
      <h1>Hello world!</h1>
      <div id="demo-progress"><ProgressBar progress={20} /></div>
    </ThemeProvider>
  );
}

export default App;
