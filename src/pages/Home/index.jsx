import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { HomeContent, TitleMain } from "./styles";

const Home = () => {
  return (
    <section>
      <Navbar />
      <TitleMain>
        <h2>Dados do Brasil - Counter Strike Global Offensive</h2>
      </TitleMain>
      <HomeContent>
        <Card tilte="Kills CSGO" info="10.236 Kills" color="#525" />
        <Card tilte="Kills CSGO" info="10.236 Kills" color="#00ffbf" />
        <Card tilte="Kills CSGO" info="10.236 Kills" color="#ffbb00" />
        <Card tilte="Kills CSGO" info="10.236 Kills" color="#ff0e0e" />
      </HomeContent>
    </section>
  );
};

export default Home;
