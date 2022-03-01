import UserActions from "./UserActions";
import { Box } from "@mui/system";

const User = ({
  name,
  lastName,
  email,
  deleteHandler,
  image,
  id,
  switchActiveState,
  isActive,
  editHandler,
}) => {
  return (
    <Box sx={userStyles}>
      <img
        src={image}
        style={isActive ? imageStyleActive : imageStyleInactive}
      ></img>
      <p>
        {name} {lastName} ({email})
      </p>
      <Box>
        <UserActions
          deleteHandler={deleteHandler}
          switchActiveState={switchActiveState}
          id={id}
          isActive={isActive}
          editHandler={editHandler}
        />
      </Box>
    </Box>
  );
};

// estilos

const userStyles = {
  display: "flex",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 4px",
  flexWrap: "wrap",
  width: "100%",
  alignItems: "center",
  paddingY: 2,
  paddingX: 4,
  marginY: 3,
  justifyContent: "space-between",
  borderRadius: "7px",
};

const imageStyleActive = {
  borderRadius: "50%",
  width: 40,
  height: 40,
  background: "#0FDF84",
  border: "3px solid #0FDF84",
  boxShadow: "rgba(149, 157, 165, 0.5) 0px 8px 24px",
};

const imageStyleInactive = {
  borderRadius: "50%",
  width: 40,
  height: 40,
  background: "transparent",
  border: "3px solid transparent",
  boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
};

export default User;
