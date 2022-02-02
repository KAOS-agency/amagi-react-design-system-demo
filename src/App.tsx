import React, { useState } from 'react';
import {
  Button,
  Left,
  ProgressBar,
  Right,
  Splitshell,
  ThemeProvider,
} from "@kaos-agency/amagi-react-design-system";
import Header from "./header";
import './App.css';
import ReviewForm from './review-form';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <ThemeProvider theme="dark" className="App">
      <Header />
      <Splitshell className="splitshell">
        <Left
          show={showSidebar}
          width={300}
          className="form-parent"
        >
          <ReviewForm />
        </Left>
        <Right style={{ backgroundColor: "var(--neutral-stone-500)" }}>
          <Button onClick={() => setShowSidebar((s) => !s)}>
            Toggle sidebar
          </Button>
        </Right>
      </Splitshell>
      <div id="demo-progress">
        <ProgressBar progress={60} color="orange" />
      </div>
    </ThemeProvider>
  );
}

export default App;
