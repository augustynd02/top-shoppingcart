import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar({ cartItems }) {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarElement}>
                <h2>UltraShop</h2>
            </div>
            <div className={styles.navbarElement}>
                <Link to="/home">Home</Link>
            </div>
            <div className={styles.navbarElement}>
                <Link to="/shop">Shop</Link>
            </div>
            <div className={styles.navbarElement}>
                <Link to="/cart">
                    <span className={`material-icons-outlined ${styles.icon}`}>shopping_cart</span>
                    <span>{cartItems}</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
