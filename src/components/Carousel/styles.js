import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 4%;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 1;
  margin-bottom: 7px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 2px;
  margin-left: 10px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 10px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 10px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  li {
    margin-right: 16px;
  }
`;
