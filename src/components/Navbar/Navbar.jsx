import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarElement}>
                <h2>UltraShop</h2>
            </div>
            <div className={styles.navbarElement}>
                <span>Home</span>
            </div>
            <div className={styles.navbarElement}>
                <span>Shop</span>
            </div>
            <div className={styles.navbarElement}>
                <span className={`material-icons-outlined ${styles.icon}`}>shopping_cart</span>
                <span>0</span>
            </div>
        </div>
    )
}

export default Navbar;
