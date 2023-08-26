export default function Home() {
    const e = process.env.SUPABASE_URL;

    return (
        <SafeAreaView>
            <Text>{e}: </Text>
        </SafeAreaView>
    );
}