import React from 'react';
import {
  ProgressBar,
  ThemeProvider,
} from "@kaos-agency/amagi-react-design-system";
import Header from "./header";
import './App.css';

function App() {
  return (
    <ThemeProvider theme="dark" className="App">
      <Header />
      <div id="demo-progress">
        <ProgressBar progress={40} />
      </div>
    </ThemeProvider>
  );
}

export default App;
