import { NewsCard } from "@/components/Card/NewsCard";
import { Footer } from "@/components/Footer/Footer";
import { Layout } from "@/components/Layout/Layout";
import { Title } from "@/components/Title/Title";
import { Hero } from "@/components/Hero/Hero";
import Separator from "./components/Separator/Separator";
import styled from "styled-components";
import { devices } from "./styles/foundation";
import { TextMediaBlock } from "./components/Block/TextMediaBlock";

const news = [
  {
    title:
      "O ”Boom” das plataformas de Delivery no Brasil e suas consequências peculiares",
    image:
      "https://static.wixstatic.com/media/0b3988_3a87d77344804aefb0ce2023a26f34f4~mv2.jpg/v1/fill/w_693,h_363,al_c,q_80,enc_auto/0b3988_3a87d77344804aefb0ce2023a26f34f4~mv2.jpg",
    link: "https://portal.fgv.br/artigos/boom-plataformas-delivery-brasil-e-suas-consequencias-peculiares",
  },
  {
    title:
      "Entregador de delivery é atropelado por Hilux em alta velocidade e morre",
    image:
      "https://amazonasatual.com.br/wp-content/uploads/2023/01/Hilux-acidente.jpg",
    link: "https://amazonasatual.com.br/entregador-de-delivery-e-atropelado-por-hilux-em-alta-velocidade-e-morre/",
  },
  {
    title: "Tendências da Logística para o Futuro",
    image:
      "https://www.truckpad.com.br/wp-content/uploads/2022/12/full-shot-man-walking-by-trucks-fleet-min-2048x1365.jpg",
    link: "https://www.truckpad.com.br/blog/tendencias-da-logistica-para-o-futuro/#:~:text=A%20integra%C3%A7%C3%A3o%20de%20sistemas%2C%20a,da%20log%C3%ADstica%20para%20o%20futuro.",
  },
];

export const App = () => {
  return (
    <Layout>
      <Title />
      <Hero />
      <Separator />
      <TextMediaBlock
        text="Desde os primórdios, o ser humano sempre pensou em formas de como melhorar algo ou resolver um problema. Seja com a agricultura, astronomia ou a internet, o propósito de trazer beneficios, confortos e praticidades não só para o meio individual mas o todo um coletivo sempre existiu.        No ramo tecnologico sempre existiram possibilidades que até em então era totalmentes desconhecidas com a capacidade de conectar pessoas, companhias, organizações governamentais e muito mais. Dada tal importancia para a revolução que vivemos, é notável que em sociedade podemos crescer, melhorar e prosperar como um todo."
        image={
          "https://lottie.host/5a3e092c-1726-4230-8856-cfb1e9a72bfc/G65jWJ5lQd.json"
        }
      />
      <Separator />
      <NewsContainer>
        {news.map((obj, index) => (
          <NewsCard
            key={index}
            image={obj.image}
            title={obj.title}
            link={obj.link}
          />
        ))}
      </NewsContainer>
      <Footer />
    </Layout>
  );
};

const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${devices.lg} {
    flex-direction: column;
    align-items: center;
  }
`;
