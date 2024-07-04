import styles from './CartItem.module.css';

function CartItem({ item, cart, setCart }) {
    const handleIncrementation = () => {
        const cartCopy = [...cart];
        for (let i = 0; i < cartCopy.length; i++) {
            if (cartCopy[i].id == item.id) {
                cartCopy[i].quantity += 1;
                setCart(cartCopy);
            }
        }
    }

    const handleDecrementation = () => {
        const cartCopy = [...cart];
        for (let i = 0; i < cartCopy.length; i++) {
            if (cartCopy[i].id == item.id) {
                cartCopy[i].quantity -= 1;
                setCart(cartCopy);
            }
        }
    }

    return (
        <div className={styles.item}>
            <div className={styles.imageContainer}>
                <img src={item.image} />
            </div>
            <div className={styles.info}>
                <h3>{item.title}</h3>
                <span>{item.price}$</span>
            </div>
            <div className={styles.buttonsContainer}>
                <span className={`material-icons-outlined ${styles.icon}`}>delete</span>
                <button onClick={() => { handleDecrementation() }}>
                    <span className={`material-icons-outlined ${styles.icon} ${styles.remove}`}>remove</span>
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button onClick={() => { handleIncrementation() }}>
                    <span className={`material-icons-outlined ${styles.icon}`}>add</span>
                </button>
            </div>
        </div>
    )
}

export default CartItem;
