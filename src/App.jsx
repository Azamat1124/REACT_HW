import styled from "styled-components";
import Button from "./components/UI/Button";

function App() {
  return (
    <StyledContainer>
      <Button variant={"outlined"} disabled={"outlined"}>
        outlinedd
      </Button>
      <Button variant={"contained"} disabled={"contained"}>
        containedd
      </Button>
      <Button variant={"Warning"} disabled={"Warning"}>
        Warning
      </Button>
      <Button variant={"Danger"} disabled={"Danger"}>
        Danger
      </Button>
    </StyledContainer>
  );
}

export default App;
const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
