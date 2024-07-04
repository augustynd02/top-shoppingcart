import { useOutletContext } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

function Cart() {
    const [cart, setCart] = useOutletContext();
    return (
        <div className={styles.cartContainer}>
            {cart.length > 0 ? <h2>Your Shopping Cart:</h2> : <h2>Your cart is empty!</h2>}
            <div className={styles.cart}>
                {cart.map(item => {
                    return <CartItem item={item} cart={cart} setCart={setCart} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Cart;
