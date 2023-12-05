import CardList from "./cardList/CardList"
import FiltersCategory from "./cardList/filter-category/FiltersCategory"

const HomePage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Products</h1>
        <FiltersCategory />
        <CardList />
      </div>
    </div>
  )
}

export default HomePage