import {
  Accordion,
  Button,
  Col,
  DWMYPicker,
  Row,
  TitleBlock,
  TitleParentBlock,
} from "@kaos-agency/amagi-react-design-system";
import { useState } from "react";

export type UserReview = {
  name: string;
  email: string;
  timestamp: Date;
};

const colors = ["purple", "blue", "lime", "green", "red"];

const Review: React.FC<{
  toggleSidebar: () => void;
  reviews: Array<UserReview>;
}> = ({ toggleSidebar, reviews }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [view, setView] = useState("name");
  return (
    <div>
      <Row>
        <Col size="1">
          <Button onClick={toggleSidebar}>Toggle</Button>
        </Col>
        <Col>
          <DWMYPicker
            setView={setView}
            view={view}
            views={[
              {
                label: "Name",
                value: "name",
              },
              {
                label: "Email",
                value: "email",
              },
              {
                label: "Date",
                value: "timestamp",
              },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion
            id="review-accordion"
            isOpen={isOpen}
            onToggle={() => setIsOpen((s) => !s)}
            name={
              <TitleParentBlock
                title="Amagi React Design System"
                subTitleText1="Guest book"
                subTitleText2={`${reviews.length} Signature${
                  reviews.length === 1 ? "" : "s"
                }`}
              />
            }
          >
            {reviews
              .slice()
              .sort((a, b) => {
                switch (view) {
                  case "timestamp":
                    return a.timestamp.getTime() - b.timestamp.getTime();
                  case "email":
                    return a.email.localeCompare(b.email);
                  case "name":
                  default:
                    return a.name.localeCompare(b.name);
                }
              })
              .map((review, index) => (
                <TitleBlock
                  key={review.email}
                  description={review.email}
                  leftText={`Review ${index + 1}`}
                  rightText={review.timestamp.toLocaleTimeString()}
                  title={review.name}
                  type={colors[index % colors.length]}
                />
              ))}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
