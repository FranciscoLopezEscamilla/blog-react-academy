import { Box, Button } from "@mui/material";

const Header = ({ userAmount = 0, addHandler, toggleForm }) => {
  return (
    <Box sx={headerStyles}>
      <h1>User Manager ({userAmount})</h1>
      <Button variant="contained" onClick={toggleForm} sx={{ height: 50 }}>
        TOGGLE FORM
      </Button>
      <Button variant="contained" onClick={addHandler} sx={{ height: 50 }}>
        ADD DEFAULT USER
      </Button>
    </Box>
  );
};

//styles

const headerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
};

export default Header;
