import React, {useState} from 'react';
import ListProductCards from "@/components/ListProductCards/ListProductCards";
import axios from "axios";
import {metadata} from "@/pages/_app";
import {CartProvider} from "@/context/CartContext";

export async function getStaticProps() {
        const response = await axios.get(metadata.url + '/data');
        return {
            props: {
                products: response.data.products
            }
        };
}
const Index = ({products}) => {
    return (
        <>
            <ListProductCards products={products}/>
        </>
    );
};

export default Index;