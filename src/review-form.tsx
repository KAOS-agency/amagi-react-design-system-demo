import {
  Button,
  Col,
  FormikInput,
  Row,
} from "@kaos-agency/amagi-react-design-system";
import { Form, Formik } from "formik";
import { UserReview } from "./reviews";

const ReviewForm: React.FC<{
  addReview: (review: UserReview) => void;
}> = ({ addReview }) => {
  return (
    <Row>
      <Col>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values, { resetForm }) => {
            addReview({
              ...values,
              timestamp: new Date(),
            });
            resetForm();
          }}
        >
          <Form>
            <div className="form-row">
              <FormikInput
                name="name"
                label="Name"
                placeholder="Enter your name"
                trailingIcon="priority"
                required
              />
            </div>
            <div className="form-row">
              <FormikInput
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your Email"
                trailingIcon="email"
                required
              />
            </div>
            <div className="form-row">
              <Button color="primary">Submit</Button>
            </div>
          </Form>
        </Formik>
      </Col>
    </Row>
  );
};

export default ReviewForm;
