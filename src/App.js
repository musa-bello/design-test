import { IoCloseOutline } from "react-icons/io5";
import { Container, Grid, CloseContainer } from "./reusable/layout";
import CardDetailSection from "./components/CardDetailSection";
import CheckoutSection from "./components/CheckoutSection";

function App() {
  return (
    <Container>
      <Grid justifyContent="end">
        <CloseContainer>
          <button style={{ border: "none", padding: "5px 15px" }}>
            <IoCloseOutline size="1.5rem" />
          </button>
        </CloseContainer>
      </Grid>
      <Grid desktop="2fr 1fr" tablet="1fr" gap="1rem">
        <CardDetailSection />
        <CheckoutSection />
      </Grid>
    </Container>
  );
}

export default App;
