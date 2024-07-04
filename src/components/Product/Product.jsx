import styles from './Product.module.css';

function Product({ data, cart, setCart }) {
    const clickHandler = (e) => {
        e.preventDefault();
        let itemExists = false;
        const cartCopy = [...cart];
        for (let i = 0; i < cartCopy.length; i++) {
            if(cartCopy[i].id == data.id) {
                cartCopy[i].quantity += 1;
                itemExists = true;
                setCart(cartCopy);
            }
        }
        // adding new item to cart
        if(!itemExists) {
            const newData = {...data, quantity: 1};
            setCart([...cart, newData]);
        }
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
