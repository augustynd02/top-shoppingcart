import styles from './Shop.module.css';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Product from '../Product/Product';

function Shop() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useOutletContext();
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("electronics");
    const [loading, setLoading] = useState(true);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
        }

        getProducts();
    }, [category])

    const createProductNodes = (data) => {
        const dataCopy = [...data]
        return dataCopy.map(productData => {
            return <Product data={productData} cart={cart} setCart={setCart} key={productData.id}/>
        })
    }

    if (loading) {
        return (
            <span className={styles.loader}></span>
        )
    }

    return (
        <div className={styles.shop}>
            <div className={styles.search}>
                <h1>Discover our latest products.</h1>
                <input type="text" placeholder="Search for a product here" onChange={(e) => { handleInputChange(e)}}/>
                <select id="category" onChange={(e) => { handleCategoryChange(e)}}>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men&#39;s clothing</option>
                    <option value="women's clothing">Women&#39;s clothing</option>
                </select>
            </div>
            <div className={styles.productList}>
                {createProductNodes(data)}
            </div>
        </div>
    )
}

export default Shop;
