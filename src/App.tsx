import "./App.css";
import { Box, Container } from "@mui/material";
import ProductTable from "./components/ProductTable";

function App() {
  const PRODUCTS = [
    { category: "Fruits", isStocked: true, name: "Apple", price: 1 },
    { category: "Fruits", isStocked: true, name: "Dragonfruit", price: 3 },
    { category: "Fruits", isStocked: false, name: "Lemon", price: 0.5 },
    { category: "Vegetables", isStocked: true, name: "Cabbages", price: 3 },
    { category: "Vegetables", isStocked: false, name: "Cucumber", price: 1 },
    { category: "Vegetables", isStocked: false, name: "Tomatoes", price: 2 },
  ];

  return (
    <>
      <Container maxWidth="sm">
        <Box
          height="100vh"
          sx={{
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >
          <ProductTable products={PRODUCTS} />
        </Box>
      </Container>
    </>
  );
}

export default App;
