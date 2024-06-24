import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.motto}>
                <h1>Welcome to UltraShop!</h1>
                <p>The best products, for the best customers.</p>
            </div>
            <p className={styles.about}>Our mission is simple: to provide a seamless shopping experience with exceptional customer service. Whether you’re looking for the latest electronics, trendy fashion, home essentials, or rare collectibles, we’ve got you covered. Our extensive inventory ensures that you can find exactly what you’re looking for, all in one place.</p>
            <Link to="/shop">
            <button className={styles.shopButton}>Shop now!</button>
            </Link>
        </div>
    )
}

export default Home;
