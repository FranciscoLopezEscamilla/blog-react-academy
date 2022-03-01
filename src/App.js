import "./App.css";
import { useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import Header from "./Components/Header";
import UserList from "./Components/UserList";
import Form from "./Components/Form";
import usersData from "./Data/usersData";
import newUser from "./Data/newUser";
import formInit from "./Data/formInit";

function App() {
  const [users, setUsers] = useState(usersData);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const deleteHandler = (id) => {
    const newState = users.filter((user) => user.id !== id);
    setUsers(newState);
  };

  const addHandler = () => {
    let generatedUser = { ...newUser };
    generatedUser.id = crypto.randomUUID();
    setUsers([...users, generatedUser]);
  };

  const switchActiveState = (userId) => {
    const userIndex = users.findIndex((user) => user.id === userId);
    let newUsersCopy = [...users];
    newUsersCopy[userIndex].isActive = !newUsersCopy[userIndex].isActive;
    setUsers(newUsersCopy);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // de no hacer esto se recarga la página
    const data = new FormData(e.currentTarget);

    const newUser = {
      id: selectedUser.id ? selectedUser.id : crypto.randomUUID(),
      name: data.get("name"),
      lastName: data.get("lastname"),
      email: data.get("email"),
      image: data.get("image"),
      isActive: data.get("isActive") ? true : false,
    };

    if (selectedUser.id == "") {
      console.log(newUser);
      setUsers([...users, newUser]);
      setShowForm(false);
    } else {
      const index = users.findIndex((user) => user.id === selectedUser.id);
      const newState = [
        ...users.slice(0, index),
        newUser,
        ...users.slice(index + 1),
      ];

      setUsers(newState);
      setShowForm(false);
    }
  };

  const editHandler = (id) => {
    console.log(`id: ${id}`);
    const editUser = users.find((user) => user.id === id);
    setSelectedUser(editUser);
    setShowForm(true);
  };

  return (
    <Box
      sx={{ flex: 1, minWidth: 600, width: "60%", marginTop: 20, margin: 10 }}
    >
      <Modal open={showForm} onClose={() => setShowForm(false)}>
        <Grid item xs={6}>
          {showForm && (
            <Form
              onSubmitHandler={onSubmitHandler}
              formData={selectedUser}
              setFormData={setSelectedUser}
            />
          )}
        </Grid>
      </Modal>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header
            userAmount={users.length}
            addHandler={addHandler}
            toggleForm={() => {
              setSelectedUser(formInit);
              setShowForm(true);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <UserList
            usersList={users}
            deleteHandler={deleteHandler}
            switchActiveState={switchActiveState}
            editHandler={editHandler}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
