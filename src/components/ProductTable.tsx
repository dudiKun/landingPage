import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const COLUMNS = ["Name", "Price"];

interface IProductCategoryRowProps {
  category: string;
}
function ProductCategoryRow({ category }: IProductCategoryRowProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={9999} align="center" sx={{ fontWeight: 700 }}>
          {category}
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

interface ProductProps {
  category: string;
  isStocked: boolean;
  name: string;
  price: number;
}

function ProductRow({ name, price, isStocked, category }: ProductProps) {
  const productName = isStocked ? (
    name
  ) : (
    <span style={{ color: "red" }}>{name}</span>
  );

  return (
    <>
      <TableRow>
        <TableCell align="center">{productName}</TableCell>
        <TableCell align="center">${price}</TableCell>
      </TableRow>
    </>
  );
}

interface IProductTableColumns {
  columns: string[];
}

const ProductTableColumns = ({ columns }: IProductTableColumns) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell align="center" sx={{ fontWeight: 700 }}>
            {column}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

interface ProductTableProps {
  products: ProductProps[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <ProductTableColumns columns={COLUMNS}></ProductTableColumns>
            {products.map((product) => (
              <TableBody>
                <ProductRow
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  isStocked={product.isStocked}
                />
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ProductTable;
