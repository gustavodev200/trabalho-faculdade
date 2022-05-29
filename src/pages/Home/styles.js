import styled from "styled-components";

export const HomeContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
  /* display: flex;
  flex-wrap: wrap;
  gap: 3%; */
  width: 100%;
  height: 100%;
`;

export const TitleMain = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;

  h2 {
    margin: 0;
    font-weight: bold;
  }
`;
