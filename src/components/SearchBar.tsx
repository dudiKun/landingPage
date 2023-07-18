import { Checkbox, FilledInput, FormControlLabel } from "@mui/material";

function SearchBar() {
  return (
    <>
      <FilledInput fullWidth size="small" placeholder="Search"></FilledInput>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Only show in stock goods"
      />{" "}
    </>
  );
}

export default SearchBar;
