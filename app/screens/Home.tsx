import React, { useState } from "react";
import { ImageBackground, Text, SafeAreaView, View } from "react-native";

import HomeBody from "../components/home/HomeBody";
import HomeSkeleton from "../components/home/HomeSkeleton";

export default function Home({}) {
    const [search, setSearch] = useState("");
    return (
        <>
            <HomeSkeleton search={search} setSearch={setSearch}>
                <HomeBody />
            </HomeSkeleton>
        </>
    );
}