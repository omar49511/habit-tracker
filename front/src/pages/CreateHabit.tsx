import { Formik, Form, Field } from "formik";

interface MyFormValues {
  firstName: string;
}

export default function CreateHabit() {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <div className="mt-96 bg-white">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
