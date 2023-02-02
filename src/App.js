import React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Button, Grid, MenuItem } from "@material-ui/core";

const App = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.mobile) {
      errors.mobile = "Required";
    }
    if (!values.company) {
      errors.country = "Required";
    }
    if (!values.country) {
      errors.country = "Required";
    }
    if (!values.marketplace) {
      errors.marketplace = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const onSubmit = (values) => {
    // Your submit logic
  };

  const countryNames = [
    {
      value: "india",
      label: "India",
    },
    {
      value: "pakistan",
      label: "Pakistan",
    },
    {
      value: "srilanka",
      label: "Srilanka",
    },
    {
      value: "australia",
      label: "Australia",
    },
    {
      value: "bangladesh",
      label: "Bangladesh",
    },
    {
      value: "china",
      label: "China",
    },
    {
      value: "russia",
      label: "Russia",
    },
    {
      value: "america",
      label: "AmericaF",
    },
  ];

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} item xs={12} justifyContent="center">
            <Grid item xs={7} container justifyContent="center">
              <Field name="name">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={7} container justifyContent="center">
              <Field name="email">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={7} container justifyContent="center">
              <Field name="mobile">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="tel"
                    label="Mobile with country code"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={7} container justifyContent="center">
              <Field name="company">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={7} container justifyContent="center">
              <Field name="country">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    select
                    label="Country"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  >
                    {" "}
                    {countryNames.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>
            </Grid>
            <Grid item xs={7} container justifyContent="center">
              <Field name="marketplace">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="email"
                    label="Market Field"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={7} container justifyContent="center">
              <Field name="password">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={7} container justifyContent="center">
              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={7} justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={submitting || pristine || invalid}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default App;
