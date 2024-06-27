import { useFormik } from 'formik';
import * as Yup from 'yup';

const Formik = () => {
    const formik = useFormik ({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
    },
    validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('First Name is Required'),
        lastName: Yup.string()
          .max(10, 'Must be 20 characters or less')
          .required('Last Name is Required'),
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
        password: Yup.string()
        .required('Password is Required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
          )
      }),
 
    onSubmit: (values, { resetForm }) =>{
        console.log(values);
        resetForm();
    }
})
  return (
    <div>
      <form onSubmit={formik.handleSubmit}
      className='border w-[40%] mx-auto rounded-xl shadow-xl p-4'>
        <div className='flex flex-col w-[90%] mx-auto'>
            <label className='font-bold text-xl mb-2' htmlFor="">First Name</label>
            <input type="text" 
            placeholder="Enter your First name"
            className='border border-grey-300 p-3 outline-none rounded-lg'
            name="firstName"
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
         <div className='text-red-500'>{formik.errors.firstName}</div>
       ) : null}
        </div>
        <div className='flex flex-col w-[90%] mx-auto'>
            <label className='font-bold text-xl mb-2' htmlFor="">Last Name</label>
            <input type="text" 
            placeholder="Enter your Last Name"
            className='border border-grey-300 p-3 outline-none rounded-lg'
            name="lastName"
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
         <div className='text-red-500'>{formik.errors.lastName}</div>
       ) : null}
        </div>
        <div className='flex flex-col w-[90%] mx-auto'>
            <label className='font-bold text-xl mb-2' htmlFor="">Email</label>
            <input type="email" 
            placeholder="Enter your Email"
            className='border border-grey-300 p-3 outline-none rounded-lg'
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
         <div className='text-red-500'>{formik.errors.email}</div>
       ) : null}
        </div>
        <div className='flex flex-col w-[90%] mx-auto'>
            <label className='font-bold text-xl mb-2' htmlFor="">Password</label>
            <input type="password" 
            className='border border-grey-300 p-3 outline-none rounded-lg'
            placeholder="Enter your password"
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
         <div className='text-red-500'>{formik.errors.password}</div>
       ) : null}
        </div>
        <div className='my-4'>
            <button type='submit'
            className='flex flex-col items-center mx-auto bg-gray-600 p-2 w-[50%] px-5 rounded-lg text-white font-bold '>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Formik
