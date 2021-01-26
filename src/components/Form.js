import React from "react";
import { useFormik } from "formik";
import Calendar from "./Calendar";
import "./Form.css";

const initialValues = {
  name: "",
  id: "",
  dept: "Front-End",
  email: "",
  doj: new Date(),
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Please complete this required field.";
  }
  if (!values.id) {
    errors.id = "Please complete this required field.";
  }
  if (!values.dept) {
    errors.dept = "Please select this required field.";
  }
  if (!values.email) {
    errors.email = "Please complete this required field.";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      values.email
    )
  ) {
    errors.email = "Email must be formatted correctly.";
  }
  if (!values.doj) {
    errors.doj = "Please select this required field.";
  }
  return errors;
};

const Form = ({ close, data, onChange }) => {
  const onSubmit = (values) => {
    onChange([...data, values]);
    close();
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  const onClear = (values) => {
    setValues(initialValues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {touched.name && errors.name ? (
            <div className="error">{errors.name}</div>
          ) : (
            <div className="empty"></div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="id">Employee ID</label>
          <input
            type="text"
            id="id"
            name="id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.id}
          />
          {touched.id && errors.id ? (
            <div className="error">{errors.id}</div>
          ) : (
            <div className="empty"></div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="dept">Department</label>
          <select
            id="dept"
            name="dept"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dept}
          >
            <option selected value="Front-End">
              Front-End
            </option>
            <option value="Back-End">Back-End</option>
            <option value="Deep Learning">Deep Learning</option>
            <option value="Bot Developer">Bot Developer</option>
            <option value="UI/UX">UI/UX</option>
          </select>

          {touched.dept && errors.dept ? (
            <div className="error">{errors.dept}</div>
          ) : (
            <div className="empty"></div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email ID</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email ? (
            <div className="error">{errors.email}</div>
          ) : (
            <div className="empty"></div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="doj">Date of Joining(DOJ)</label>
          <Calendar
            id="doj"
            name="doj"
            onChange={setFieldValue}
            onBlur={handleBlur}
            value={values.doj}
          />
          {touched.doj && errors.doj ? (
            <div className="error">{errors.doj}</div>
          ) : (
            <div className="empty"></div>
          )}
        </div>
        <div className="buttons">
          <button onClick={(values) => onClear(values)}>Clear</button>
          <button type="submit">Submit Details</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
