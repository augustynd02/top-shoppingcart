import { useOutletContext } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

function Cart() {
    const [cart, setCart] = useOutletContext();
    return (
        <div className={styles.cartContainer}>
            <h2>Your shopping cart:</h2>
            <div className={styles.cart}>
                {cart.map(item => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Cart;
