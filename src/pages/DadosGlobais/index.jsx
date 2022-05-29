import Card from "../../components/Card";
import NavbarBr from "../../components/NavbarBr";
import { HomeContent, TitleMain } from "../Home/styles";

const DadosGlobais = () => {
  return (
    <section>
      <NavbarBr />
      <TitleMain>
        <h2>Dados Globais - Counter Strike Global Offensive</h2>
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

export default DadosGlobais;
