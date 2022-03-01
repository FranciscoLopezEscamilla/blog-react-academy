import User from "./User";
import { Box } from "@mui/system";

const UserList = ({
  usersList,
  deleteHandler,
  switchActiveState,
  editHandler,
}) => {
  return (
    <Box sx={usersListStyles}>
      {usersList.map((user) => (
        <div key={user.id}>
          <User
            {...user}
            deleteHandler={deleteHandler}
            switchActiveState={switchActiveState}
            editHandler={editHandler}
          />
        </div>
      ))}
    </Box>
  );
};

//estilos

const usersListStyles = {
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
};

export default UserList;
