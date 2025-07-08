import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  

  return (
    <div>
     <h1>Sign up!</h1>
     <Formik
       initialValues={{ email: '', password: '', 'First Name': '', 'Middle Name': '', 'Last Name': '', 'confirm password': '' , 'phone number': '', 'country': '', 'city': '', 'postal code': '', 'address line 1': '', 'address line 2': '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
          if (!values.password) {
           errors.password = 'Required';}
          if (!values['First Name']) {
           errors['First Name'] = 'Required';
         return errors;}
          if (!values['Middle Name']) {
           errors['Middle Name'] = 'Optional';
         return errors;}
          if (!values['Last Name']) {
           errors['Last Name'] = 'Required';
         return errors;}
         if(values.password !== values['confirm password']) {
           errors['confirm password'] = 'Passwords must match';
         }
         return errors;
          if (!values['phone number']) {
           errors['phone number'] = 'Optional';
         return errors;}
          if (!values['country']) {
           errors['country'] = 'Required';
         return errors;}
          if (!values['city']) {
           errors['city'] = 'Required';
         return errors;}
          if (!values['postal code']) {
           errors['postal code'] = 'Required';
         return errors;}
          if (!values['address line 1']) {
           errors['address line 1'] = 'Required';
         return errors;}
          if (!values['address line 2']) {
           errors['address line 2'] = 'Optional';
         return errors;}
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="First Name" name="First Name" placeholder="First name" />
           <ErrorMessage name="First Name" component="div" />

           <Field type="Middle Name" name="Middle Name" placeholder="Middle name(optional)" />
           <ErrorMessage name="Middle Name" component="div" />

           <Field type="Last Name" name="Last Name" placeholder="Last name" />
           <ErrorMessage name="Last Name" component="div" />
           
           <Field type="email" name="email" placeholder="email" />
           <ErrorMessage name="email" component="div" />

           <Field type="password" name="password" placeholder="password" />
           <ErrorMessage name="password" component="div" />

           <Field type="password" name="confirm password" placeholder="confirm password" />
           <ErrorMessage name="confirm password" component="div" />

           <Field type="phone number" name="phone number" placeholder="phone number"/>
           <ErrorMessage name="phone number" component="div" />

           <Field type="country" name="country" placeholder="country" />
           <ErrorMessage name="country" component="div" />

           <Field type="city" name="city" placeholder="city" />
           <ErrorMessage name="city" component="div" />

           <Field type="postal code" name="postal code" placeholder="postal code" />
           <ErrorMessage name="postal code" component="div" />

           <Field type="address line 1" name="address line 1" placeholder="adress line 1" />
           <ErrorMessage name="address line 1" component="div" />

           <Field type="address line 2" name="address line 2" placeholder="adress line 2" />
           <ErrorMessage name="address line 1" component="div" />
           


           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default App
