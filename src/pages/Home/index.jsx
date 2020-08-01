import React from 'react';
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';

function Home() {
  const AppWrapper = styled.div`
    background: var(--grayDark);
    height: 100%;
  `;

  return (
    <AppWrapper>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Quais as diferenças entre estas três práticas muito citadas em diversos canais e fóruns? Hoje vamos explicar cada uma delas e traçar comparações para que não restem mais dúvidas!"
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
    </AppWrapper>
  );
}

export default Home;