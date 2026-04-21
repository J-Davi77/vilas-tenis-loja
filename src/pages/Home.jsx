import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { Header } from "../components/header/Header";
import { TenisContainer } from "../components/tenisContainer/TenisContainer";
export function Home() {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <TenisContainer categoria="Casual"></TenisContainer>
            <Footer></Footer>
        </div>
    );
}