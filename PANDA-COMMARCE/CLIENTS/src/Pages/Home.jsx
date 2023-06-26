import Categories from "../Components/Categories/Categories" 
import Newslatter from "../Components/Newslatter/Newslatter"
import Products from "../Components/Products/Products"
import Slider from "../Components/Slider/Slider"
import TrendingProducts from "../Components/TrendingProducts/TrendingProducts"

function Home() {
  return (
    <div className="container">
      <Slider />
      <Categories />
      <Products />
      <TrendingProducts/>
      <Newslatter />
    </div>
  )
}

export default Home