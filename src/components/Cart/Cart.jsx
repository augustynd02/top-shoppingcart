import { useOutletContext } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

function Cart() {
    const [cart, setCart] = useOutletContext();
    const total = cart.map(item => item.price * item.quantity).reduce((sum, cur) => sum + cur, 0);
    return (
        <div className={styles.cartContainer}>
            {cart.length > 0 ? <h2>Your Shopping Cart:</h2> : <h2>Your cart is empty!</h2>}
            <div className={styles.cart}>
                {cart.map(item => {
                    return <CartItem item={item} cart={cart} setCart={setCart} key={item.id} />
                })}
            </div>
            <div className={styles.checkoutContainer}>
                <h2>Total: {total}$</h2>
                <button className={styles.checkout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;
