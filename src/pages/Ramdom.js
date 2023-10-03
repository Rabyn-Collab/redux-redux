import useApi from "../hooks/useApi";


const Ramdom = () => {

  const [data, err, load] = useApi('https://www.themealdb.com/api/json/v1/1/random.php');



  return (
    <div className='p-5'>
      {data && <div className='space-y-5'>
        <h1>{data.meals[0].strMeal}</h1>
        <h2>{data.meals[0].strCategory}</h2>
        <img className='h-[300px]' src={data.meals[0].strMealThumb} alt="" />
        <p>{data.meals[0].strInstructions}</p>
      </div>}
    </div>
  )
}

export default Ramdom
