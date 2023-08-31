import React, { useState, useEffect } from "react";
import { ImageBackground, Text, SafeAreaView, View } from "react-native";

import HomeBody from "../components/home/HomeBody";
import HomeSkeleton from "../components/home/HomeSkeleton";
import { supabase } from '../lib/supabase';

export default function Home({}) {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = () => {
        supabase
            .from("products")
            .select("*")
            .then(({ data, error }) => {
                if (error) {
                    console.error(error);
                } else {
                    setProducts(data);
                }
            });
    }
    
    return (
        <>
            <HomeSkeleton search={search} setSearch={setSearch}>
                <HomeBody products={[]} />
            </HomeSkeleton>
        </>
    );
}