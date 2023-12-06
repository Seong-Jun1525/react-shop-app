import {Link} from "react-router-dom"
import {FiShoppingCart} from "react-icons/fi"
import {FiUser} from "react-icons/fi"
import {FiLogIn} from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"
import styles from "./Nav.module.scss"
import { useAuth } from "../../../hooks/useAuth"
import { getAuth, signOut } from "firebase/auth"
import app from "../../../firebase"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { removeUser } from "../../../store/user/user.slice"
import { removeUserId } from "../../../store/cart/cart.slice"
const Nav = () => {
    const {isAuth} = useAuth()
    const auth = getAuth(app)
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.cartSlice)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser())
                dispatch(removeUserId())
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <div className={styles.counter}>
                        <Link to={"/cart"}>{" "}<FiShoppingCart />{products.length > 0 && <b>{products.length}</b>}</Link>
                    </div>
                </li>
                <li>
                    <div className={styles.counter}>
                        <Link to={"/order"}>{" "}<FiUser title="주문" /></Link>
                    </div>
                </li>
                <li>
                    {isAuth ?
                        <BiLogOut className={styles.nav_sign_out} title="로그아웃" onClick={handleSignOut} />
                        : <Link to={"/login"}><FiLogIn title="로그인" /></Link>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Nav