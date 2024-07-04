import styles from './Product.module.css';

function Product({ data, cart, setCart }) {
    function clickHandler(e) {
        e.preventDefault();
        setCart([...cart, data]);
        console.log(cart);
    }

    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={styles.productInfo}>
                <h3>{data.title}</h3>
                {/* <p>{data.description}</p> */}
                <span>{data.price}$</span>
            </div>
            <button onClick={(e) => { clickHandler(e) }}>Add to cart</button>
        </div>
    )
}

export default Product;
