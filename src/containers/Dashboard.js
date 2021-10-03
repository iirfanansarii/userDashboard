import {
  Avatar,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { InputElement, Layout, UpdateUserForm } from '../components';
import useStyles from '../styles/dashboard.styles';
import { actions, messages, severities } from '../utils/constants';
import { SnackbarContext } from '../context/SnackbarContext';
import httpServices from '../api/httpServices';

const menus = [
  {
    value: actions.action,
    name: actions.action,
  },
  {
    value: actions.edit,
    name: actions.edit,
  },
  {
    value: actions.delete,
    name: actions.delete,
  },
];

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const { setSnackbarOptions } = useContext(SnackbarContext);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const handleChange = (userId, e) => {
    const { value } = e.target;
    if (value === actions.delete) {
      const newUsers = [...users].filter((u) => {
        if (u.id === userId) {
          return null;
        }
        return u;
      });
      setUsers(newUsers);
    } else {
      const newUsers = [...users].map((u) => {
        if (u.id === userId) {
          if (value === actions.edit) {
            handleOpen();
            setSelectedUser({ ...u, action: null });
          }
          return { ...u, action: value };
        }
        return u;
      });
      setUsers(newUsers);
    }
  };

  useEffect(() => {
    httpServices
      .get('/users', { params: { page: `${page}`, per_page: `${size}` } })
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        setSnackbarOptions((old) => ({
          ...old,
          message: messages.somethingWentWrong,
          open: true,
          severity: severities.error,
        }));
      });
  }, []);

  const renderTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableHead}>
              <TableCell>#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? (
              users.map((user, i) => {
                user.action = user.action ? user.action : actions.action;
                return (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell>{user.first_name}</TableCell>
                    <TableCell>{user.last_name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Avatar
                        src={user.avatar}
                        className={classes.avatar}
                        alt="user image"
                      />
                    </TableCell>
                    <TableCell>
                      <InputElement
                        inputType="select"
                        name="actionMenu"
                        value={user.action}
                        onChange={(e) => handleChange(user.id, e)}
                        menus={menus}
                      />
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell component="th" scope="row" colSpan={6}>
                  <Typography variant="h6" align="center">
                    No users found!
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const doAfter = (response) => {
    if (response) {
      const { action, user: updatedUser } = response;
      if (action === actions.edit) {
        const newUsers = [...users].map((u) => {
          if (u.id === updatedUser.id) {
            return { ...u, ...updatedUser };
          }
          return u;
        });
        setUsers(newUsers);
      } else if (action === actions.add) {
        const prev = [...users].slice(0, users.length - 1);
        setUsers([updatedUser, ...prev]);
      }
    }
    setSelectedUser(null);
    handleClose();
  };

  const renderModal = () => {
    return (
      <Box className={classes.modal}>
        <UpdateUserForm
          user={selectedUser}
          doAfter={doAfter}
          handleClose={handleClose}
        />
      </Box>
    );
  };

  const addNewUser = () => {
    setSelectedUser(null);
    setOpen(true);
  };

  return (
    <Layout>
      <Box className={classes.root}>
        <Box className={classes.dashboardBox}>
          <Typography className={classes.userDashboardTitle}>
            User Dashboard
          </Typography>
        </Box>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Box className={classes.addUserBox}>
            <Button
              variant="contained"
              onClick={addNewUser}
              size="small"
              className={classes.btn}
            >
              + Add User
            </Button>
          </Box>
          {renderTable()}
          {open && renderModal()}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;
