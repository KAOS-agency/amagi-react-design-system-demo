import React, { useState } from 'react';
import {
  Left,
  ProgressBar,
  Right,
  Splitshell,
  ThemeProvider,
} from "@kaos-agency/amagi-react-design-system";
import Header from "./header";
import './App.css';
import ReviewForm from './review-form';
import Review, { UserReview } from "./reviews";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [reviews, setReviews] = useState<Array<UserReview>>([
    {
      name: "Karthikeyan Sekizhar",
      email: "k@kaos.agency",
      timestamp: new Date(),
    },
  ]);
  return (
    <ThemeProvider theme="dark" className="App">
      <Header />
      <Splitshell className="splitshell">
        <Left show={showSidebar} width={300} className="form-parent">
          <ReviewForm
            addReview={(review: UserReview) =>
              setReviews((r) => [...r, review])
            }
          />
        </Left>
        <Right style={{ backgroundColor: "var(--neutral-stone-500)" }}>
          <Review
            toggleSidebar={() => setShowSidebar((s) => !s)}
            reviews={reviews}
          />
        </Right>
      </Splitshell>
      <div id="demo-progress">
        <ProgressBar progress={100} color="green" />
      </div>
    </ThemeProvider>
  );
}

export default App;
