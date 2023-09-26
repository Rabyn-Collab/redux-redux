import React from 'react'
import { useParams } from 'react-router';
import { getDataById } from '../dummy/data_logic';


const DetailById = () => {

  const { id } = useParams();
  console.log(id);
  const data = getDataById(id);
  console.log(data);
  return (
    <div>

      <h1>DetailById</h1>

    </div>
  )
}

export default DetailById
