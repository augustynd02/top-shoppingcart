import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarElement}>
                <span className={`material-icons-outlined ${styles.icon}`}>home</span>
                <span className={styles.iconText}>Home</span>
            </div>
            <div className={styles.navbarElement}>
                <span className={`material-icons-outlined ${styles.icon}`}>local_mall</span>
                <span className={styles.iconText}>Shop</span>
            </div>
            <div className={styles.navbarElement}>
                <span className={`material-icons-outlined ${styles.icon}`}>shopping_cart</span>
                <span className={styles.iconText}>Cart</span>
            </div>
        </div>
    )
}

export default Navbar;
