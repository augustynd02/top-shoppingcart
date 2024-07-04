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
                if (cartCopy[i].quantity > 0) cartCopy[i].quantity -= 1;
                setCart(cartCopy);
            }
        }
    }

    const handleDeletion = () => {
        const cartCopy = [...cart];
        let index;
        for (let i = 0; i < cartCopy.length; i++) {
            if (cartCopy[i].id == item.id) {
                index = i;
                break;
            }
        }
        cartCopy.splice(index, 1);
        setCart(cartCopy);
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
                <div className={styles.quantityControls}>
                    <button onClick={() => { handleDecrementation() }}>
                        <span className={`material-icons-outlined ${styles.icon} ${styles.remove}`}>remove</span>
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button onClick={() => { handleIncrementation() }}>
                        <span className={`material-icons-outlined ${styles.icon} ${styles.add}`}>add</span>
                    </button>
                </div>
                <button onClick={() => { handleDeletion() }}>
                    <span className={`material-icons-outlined ${styles.icon} ${styles.delete}`}>delete</span>
                </button>
            </div>
        </div>
    )
}

export default CartItem;
