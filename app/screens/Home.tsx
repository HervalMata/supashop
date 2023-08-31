import React, { useState, useEffect } from "react";
import { ImageBackground, Text, SafeAreaView, View } from "react-native";

import HomeBody from "../components/home/HomeBody";
import HomeSkeleton from "../components/home/HomeSkeleton";
import ChairSvg from "../components/home/ChairSvg";
import { supabase } from '../lib/supabase';

export default function Home({}) {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<any[] | null>([]);

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data: product, error } = await supabase
            .from("products")
            .select("*");
        setProducts(product);
    }
    
    return (
        <>
            <HomeSkeleton search={search} setSearch={setSearch}>
                <ChairSvg />
                <HomeBody products={products} />
            </HomeSkeleton>
        </>
    );
}