import { Checkbox, FilledInput, FormControlLabel } from "@mui/material";

interface SearchBarProps {
  filterText: string;
  inStockedOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockOnlyCheck: (checked: boolean) => void;
}

function SearchBar({
  filterText,
  inStockedOnly,
  onFilterTextChange,
  onInStockOnlyCheck,
}: SearchBarProps) {
  return (
    <>
      <FilledInput
        value={filterText}
        fullWidth
        size="small"
        placeholder="Search"
        onChange={(e) => onFilterTextChange(e.target.value)}
      ></FilledInput>
      <FormControlLabel
        control={
          <Checkbox
            checked={inStockedOnly}
            defaultChecked
            onChange={(e) => onInStockOnlyCheck(e.target.checked)}
          />
        }
        label="Only show in stock"
        sx={{ p: 3 }}
      />{" "}
    </>
  );
}

export default SearchBar;
