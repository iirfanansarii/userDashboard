import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    padding: '10px 20px 0 20px',
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0 0 0',
    },
  },
  gridContainer: {
    width: '100%',
    maxWidth: '100%',
    marginTop: 15,
    background: 'white',
    padding: '20px',
  },
  paper: {
    padding: 15,
  },
  avatar: {
    width: '20%',
    height: 'auto',
    margin: '0 auto',
  },
  modal: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    background: `rgba(0, 0, 0, 0.5)`,
  },
  btn: {
    background: '#0DBFE2',
    color: 'white',
    minHeight: '35px',
    minWidth: '120px',
    borderRadius: '0px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '16px',
  },
  tableHead: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '16px',
    background: '#DEDEDE',
    alignText: 'center',
    height: '25px',
  },
  addUserBox: {
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  dashboardBox: {
    background: 'white',
    minHeight: '50px',
    marginLeft: '-7px',
    width: '100%',
  },
  userDashboardTitle: {
    padding: '10px 0px 10px  4px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '24px',
    color: 'black',
  },
}));
