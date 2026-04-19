import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { Header } from "../components/header/Header";
import { Section } from "../components/section/Section";
import { TenisCard } from "../components/tenisCard/TenisCard";
export function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Section
        title="CASUAIS"
        subtitle="O equilíbrio perfeito entre conforto e estilo urbano, com modelos versáteis que acompanham você em qualquer momento do dia, do trabalho ao lazer."
      >
        <TenisCard></TenisCard>
        <TenisCard></TenisCard>
        <TenisCard></TenisCard>
      </Section>

      <Section
        title="ESPORTIVOS"
        subtitle="Desenvolvidos para oferecer desempenho, leveza e conforto, ideais para quem busca superar limites nos treinos."
      >
        <TenisCard></TenisCard>
        <TenisCard></TenisCard>
        <TenisCard></TenisCard>
      </Section>

      <Section
        title="CHUTEIRAS"
        subtitle="Projetadas para garantir controle, velocidade e precisão dentro de campo, ajudando você a elevar seu jogo."
      >
        <TenisCard></TenisCard>
        <TenisCard></TenisCard>
        <TenisCard></TenisCard>
      </Section>
      <Footer></Footer>
    </div>
  );
}