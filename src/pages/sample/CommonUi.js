import React from 'react'
import { useNavigate, useParams } from 'react-router'

const CommonUi = ({ page }) => {
  const { category, pages } = useParams();

  const nav = useNavigate();

  const pageNum = Number(pages);


  return (
    <div>

      <h1>Hello this is common</h1>
      <div>
        <h1>{page ?? pages}</h1>
        <button onClick={() => page ? nav(`/page/popular/${page + 1}`) : nav(`/page/popular/${pageNum + 1}`)}>Next</button>

      </div>

    </div>
  )
}

export default CommonUi
