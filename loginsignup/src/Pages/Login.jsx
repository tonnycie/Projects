import {Link} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export function Login() {
    return (
    <>
      <h1>Welcome to the Login Page</h1>
      <h2>Please log into your account</h2>
           <Formik
             initialValues={{ email: '', password: '', 'username': '', 'confirm password': ''  }}
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
               if (!values['First Name'].lenghth<2 || !values['First Name'].length>30) {
                 errors['First Name'] = 'First Name must be between 2 and 30 characters';
               return errors;}
                
               
      
                if (!values['Last Name']) {
                 errors['Last Name'] = 'Required';
               return errors;}
               if(values.password !== values['confirm password']) {
                 errors['confirm password'] = 'Passwords must match';
               
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
                  
      
                 
      
                 <Field type="username" name="username" placeholder="username" />
                 <ErrorMessage name="username" component="div" />
                 
                 <Field type="email" name="email" placeholder="email" />
                 <ErrorMessage name="email" component="div" />
      
                 <Field type="password" name="password" placeholder="password" />
                 <ErrorMessage name="password" component="div" />
      
                 <Field type="password" name="confirm password" placeholder="confirm password" />
                 <ErrorMessage name="confirm password" component="div" />
      
                 
      
      
                 <button type="submit" disabled={isSubmitting}>
                   Log in
                 </button>
               </Form>
             )}
           </Formik>
    </>
  );
}