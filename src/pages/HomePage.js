import React from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const HomePage = () => {
  const d = [
    { id: 1, title: 'hello' },
    { id: 2, title: 'hello jee' },
  ];
  const m = d.filter((p) => p.id !== 1);
  console.log(m);



  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const { todos } = useSelector((store) => store.todo);


  return (
    <div className='p-7 grid grid-cols-4'>


      {todos.map((todo, i) => {
        return <div key={todo.id} className='shadow-2xl p-5 space-y-6'>
          <h1>{todo.username}</h1>
          <img src={todo.imageReview} alt="" />
          <div className='flex justify-end space-x-4'>
            <button><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
            <button onClick={handleOpen}><i className="fa-solid fa-trash fa-lg"></i></button>
          </div>
        </div>
      })}



      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure ?</DialogHeader>
        <DialogBody divider>
          You want to remove this
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </div>
  )
}

export default HomePage
