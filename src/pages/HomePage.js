
import useApi from '../hooks/useApi';

const HomePage = () => {

  const [data, err, load] = useApi('https://www.themealdb.com/api/json/v1/1/categories.php');


  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return `${err}`
  }


  return (
    <div>


      {data && data.categories.map((cata, i) => {
        return <div key={i}>
          <h1>{cata.strCategory}</h1>
          <img src={cata.strCategoryThumb} alt="" />
          <p>{cata.strCategoryDescription}</p>
        </div>
      })}

    </div>
  )
}

export default HomePage
