import CardItem from "./card-item/CardItem"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import styles from "./CardList.module.scss"
import { fetchProducts } from "../../../store/products/products.slice"
const CardList = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.productsSlice)
    const category = useAppSelector(state => state.categoriesSlice)
    
    useEffect(() => {
        dispatch(fetchProducts(category?.toLowerCase()))
    }, [category])

    return (
        <ul className={styles.card_list}>
            {products.map(product => <CardItem key={product.id} item={product} />)}
        </ul>
    )
}

export default CardList