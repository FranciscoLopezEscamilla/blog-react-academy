import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const UserActions = ({
  switchActiveState,
  deleteHandler,
  id,
  isActive,
  editHandler,
}) => {
  return (
    <>
      {isActive ? (
        <Button onClick={() => switchActiveState(id)}> {<ClearIcon />}</Button>
      ) : (
        <Button onClick={() => switchActiveState(id)}>{<CheckIcon />}</Button>
      )}
      <Button onClick={() => editHandler(id)}>{<EditIcon />}</Button>
      <Button onClick={() => deleteHandler(id)}>{<DeleteIcon />}</Button>
    </>
  );
};

export default UserActions;
