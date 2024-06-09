import React, {useState} from 'react';
import axios from "axios";
import ListProductCards from "@/components/ListProductCards/ListProductCards";

export async function getStaticProps() {
        const response = await axios.get('http://w98325ou.beget.tech/api/data');
        return {
            props: {
                products: response.data.products,
                categories: response.data.categories,
            }
        };
}
const Index = ({products, categories}) => {
    return (
        <>
            <ListProductCards products={products} categories={categories} />
        </>
    );
};

export default Index;