import styles from './CartItem.module.css';

function CartItem({item}) {
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
               <span className={`material-icons-outlined ${styles.icon}`}>add</span>
               <span className={`material-icons-outlined ${styles.icon}`}>remove</span>
            </div>
        </div>
    )
}

export default CartItem;
