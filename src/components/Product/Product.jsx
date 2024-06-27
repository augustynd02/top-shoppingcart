import styles from './Product.module.css';

function Product({ data }) {
    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={styles.productInfo}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <span>{data.price}</span>
            </div>
        </div>
    )
}

export default Product;
