import React, { useEffect, useState } from "react";
import Card from "../Component/ProductCard";
import { setProductData } from "../Features/ProductReducer";
import { useDispatch, useSelector } from "react-redux";

function Homepage() {
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.productData.productData)

    async function fetchProducts() {
        const rawData = await fetch("https://fakestoreapi.com/products");
        const data = await rawData.json();
        dispatch(setProductData(data));
        setLoad(true)
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <div className="flex flex-wrap gap-y-3 gap-x-5 my-5">
            {load && productData.map((product) => <Card key={product.id} data={product} />)}
        </div>
    );
}

export default Homepage;
