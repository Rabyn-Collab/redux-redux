import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Radio,
  Select,
  Option,
  Textarea
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateTodo } from '../features/todoSlice';


const radioData = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const checkData = [
  { label: 'Dance', value: 'dance' },
  { label: 'Sing', value: 'sing' },
  { label: 'Read', value: 'read' },
];




const UpdateCrud = () => {

  const { id } = useParams();
  const { todos } = useSelector((store) => store.todo);
  const todo = todos.find((todo) => todo.id === id);


  const dispatch = useDispatch();
  const nav = useNavigate();

  const crudSchema = Yup.object().shape({
    username: Yup.string().min(4).max(25).required(),
    email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email').required(),
    gender: Yup.string().required(),
    habits: Yup.array().min(1).required(),
    country: Yup.string().required(),
    msg: Yup.string().min(40).max(500).required(),


    // imageFile: Yup.mixed().test('fileType', 'Invalid file type', (value) => {
    //   return value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
    // }).test('fileSize', 'File too large', (value) =>
    //   value && value.size <= 4 * 1024 * 1024
    // )






  });




  const formik = useFormik({
    initialValues: {
      username: todo?.username,
      email: todo?.email,
      gender: todo?.gender,
      habits: todo?.habits,
      country: todo?.country,
      msg: todo?.msg,
      // imageFile: null,
      imageReview: todo?.imageReview,
      id: todo?.id
    },
    //submit handle
    onSubmit: (val) => {
      dispatch(updateTodo(val));
      nav(-1);
    },
    validationSchema: crudSchema
  });

  return (
    <Card color="transparent" shadow={false} className='  max-w-lg mx-auto  '>
      <form onSubmit={formik.handleSubmit} className=" mb-2 mt-10 ">
        <div className="mb-4 flex flex-col gap-6">

          <div>
            <Input
              name='username'
              value={formik.values.username}
              onChange={formik.handleChange}
              size="lg" label="Name" />

            {formik.errors.username && formik.touched.username && <h1 className='text-pink-800'>{formik.errors.username}</h1>}
          </div>
          <div>
            <Input
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              size="lg" label="Email" />
            {formik.errors.email && formik.touched.email && <h1 className='text-pink-800'>{formik.errors.email}</h1>}
          </div>


          <div className='space-y-2'>
            <p>Select Your Gender</p>
            <div className="flex gap-6">
              {radioData.map((radio, i) => {
                return <Radio
                  checked={radio.value === formik.values.gender ? true : false}
                  onChange={formik.handleChange}
                  key={i} name="gender" label={radio.label} value={radio.value} />;
              })}
            </div>
            {formik.errors.gender && formik.touched.gender && <h1 className='text-pink-800'>{formik.errors.gender}</h1>}
          </div>



          <div className='space-y-2'>
            <p>Select Your Habits</p>
            <div className="flex gap-6">

              {checkData.map((check, i) => {
                return <Checkbox
                  checked={formik.values.habits.includes(check.value) ? true : false}
                  onChange={formik.handleChange}
                  key={i} name="habits" label={check.label} value={check.value} />;
              })}

            </div>
            {formik.errors.habits && formik.touched.habits && <h1 className='text-pink-800'>{formik.errors.habits}</h1>}
          </div>


          <div className='space-y-3'>
            <p>Select Your Country</p>
            <Select
              value={formik.values.country}
              onChange={(e) => {
                formik.setFieldValue('country', e);
              }} label="Select Version">
              <Option value='Nepal'>Nepal</Option>
              <Option value='India'>India</Option>
              <Option value='China'>China</Option>
            </Select>
            {formik.errors.country && formik.touched.country && <h1 className='text-pink-800'>{formik.errors.country}</h1>}
          </div>

          <div>
            <Textarea
              value={formik.values.msg}
              onChange={formik.handleChange}
              name='msg'
              label="Message" />
            {formik.errors.msg && formik.touched.msg && <h1 className='text-pink-800'>{formik.errors.msg}</h1>}
          </div>

          <div className='space-y-3'>
            <p>Change  Image</p>
            <Input
              name='imageFile'
              onChange={(e) => {
                const file = e.target.files[0];

                //formik.setFieldValue('imageFile', file);
                // const url = URL.createObjectURL(file);
                // console.log(url);

                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  formik.setFieldValue('imageReview', e.target.result);
                })


              }}
              label="Image Select" type='file' accept="image/*" />
            {formik.errors.imageFile && formik.touched.imageFile && <h1 className='text-pink-800'>{formik.errors.imageFile}</h1>}
            {formik.values.imageReview && <img src={formik.values.imageReview} alt="" />}
          </div>


        </div>

        <Button type='submit' className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}

export default UpdateCrud
