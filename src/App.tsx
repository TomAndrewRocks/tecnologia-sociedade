import { TextMediaBlock } from "./components/Block/TextMediaBlock";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Title } from "./components/Title/Title";

export const App = () => {
  return (
    <Layout>
      <Title />
      <TextMediaBlock />
      <TextMediaBlock />
      <TextMediaBlock />
      <Footer />
    </Layout>
  );
};
