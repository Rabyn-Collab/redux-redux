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



const Crud = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      habits: []
    },
    onSubmit: (val) => {
      console.log(val);
    }
  });

  return (
    <Card color="transparent" shadow={false} className='  max-w-lg mx-auto  '>
      <form onSubmit={formik.handleSubmit} className=" mb-2 mt-10 ">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            name='username'
            value={formik.values.username}
            onChange={formik.handleChange}
            size="lg" label="Name" />
          <Input
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            size="lg" label="Email" />


          <div className='space-y-2'>
            <p>Select Your Gender</p>
            <div className="flex gap-6">
              {radioData.map((radio, i) => {
                return <Radio
                  onChange={formik.handleChange}
                  key={i} name="gender" label={radio.label} value={radio.value} />;
              })}

            </div>
          </div>



          <div className='space-y-2'>
            <p>Select Your Habits</p>
            <div className="flex gap-6">

              {checkData.map((check, i) => {
                return <Checkbox
                  onChange={formik.handleChange}
                  key={i} name="habits" label={check.label} value={check.value} />;
              })}

            </div>
          </div>


          <div className='space-y-3'>
            <p>Select Your Country</p>
            <Select label="Select Version">
              <Option>Nepal</Option>
              <Option>India</Option>
              <Option>China</Option>
            </Select>
          </div>

          <div>
            <Textarea label="Message" />
          </div>

          <div className='space-y-3'>
            <p>Select Your Image</p>
            <Input label="Image Select" type='file' accept="image/*" />
          </div>


        </div>

        <Button type='submit' className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}

export default Crud