import React from "react";
import "./styles/App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Article } from "./Components/Article/Article";

import imgPs from "./assents/img/ps-img.jpg";
import imgLocal from "./assents/img/img-1.jpg";
import imgVest from "./assents/img/fardamento-img.jpg";
import imgCola from "./assents/img/funcionarios-img.jpg";
// import { Counter } from "./Components/Counter/Counter";

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render

//Componente funcional é uma função que retorna HTML

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />;{/* <Counter /> */}
        <section id="articles">
          <Article
            title="Localização"
            provider="Vila Palmeira"
            description=" A seap fica na vila palmeira proximo ao colegio tiradentes. Lá fica
            a sua localização na parte adiminstrativa e o escritório do governo
            do estado em São Luís, Maranhão. Rua Gabriela Mistral, 716 - Vila
            Palmeira, São Luís - MA, 65045-070"
            img={imgLocal}
          />

          <Article
            title="Como Ingressar"
            provider="Processos Seletivos"
            description=" asdasjdbsajdbasjdbasljdbasjdbljsabdlasbdaslbdalsjdblsabdsalbdjslablx bcmxz cjx c asjbdsa dasj dsja doasjdbnasjd sajd a~sjld asj dsajd sa djas dasdsa d sjad jsbsjfbniaf"
            img={imgPs}
          />

          <Article
            title="Vestimenta"
            provider="Informações Uniforme"
            description=" Fardamento e uniforme são denominações de um mes-
mo conceito, nos termos deste Regimento.As peças de uniforme previstos neste Regimento serão
detalhadas no Catálogo de Uniformes."
            img={imgVest}
          />

          <Article
            title="Colaboradores"
            provider="Membros desta Seap"
            description=" O superintendente, superintendente executivo e chefe do setor de operações, PRFs Lubenow, Jovino II e Maciel, visitaram na manhã da última terça-feira (8), a Secretaria Estadual de Administração Penitenciária do Maranhão (SEAP/MA)."
            img={imgCola}
          />
        </section>
      </>
    );
  }
}

export default App;
