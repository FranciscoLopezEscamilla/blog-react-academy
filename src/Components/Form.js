import React from "react";
import {
  FormControlLabel,
  Button,
  Box,
  Checkbox,
  TextField,
  Container,
} from "@mui/material";

const Form = ({ onSubmitHandler, formData, setFormData }) => {
  return (
    <Container sx={modalStyle}>
      <h1>New user</h1>
      <Box
        sx={{ backgroundColor: "white" }}
        component="form"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <TextField
          sx={inputStyle}
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <TextField
          sx={inputStyle}
          name="lastname"
          label="Lastname"
          variant="outlined"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <TextField
          sx={inputStyle}
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          sx={inputStyle}
          name="image"
          label="Image"
          variant="outlined"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <FormControlLabel
          sx={inputStyle}
          name="isActive"
          control={<Checkbox />}
          label="Active"
          checked={formData.isActive}
          onChange={(e) =>
            setFormData({
              ...formData,
              isActive: !formData.isActive,
            })
          }
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ ...inputStyle, height: 50 }}
        >
          SUBMIT
        </Button>
      </Box>
    </Container>
  );
};

//styles

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  width: "100%",
  mb: 3,
};
export default Form;
