import styled from "styled-components";
import Main from "./Components/Main";

const Container = styled.div`
  width: 100%;
  height: auto;
  height: 100vh;
  overflow: hidden;
  background-color: #0d0d0d;
`;

function App() {
  return (
    <>
      <Container>
        <Main />{" "}
      </Container>
      <Container></Container>
      <Container></Container>
    </>
  );
}

export default App;
