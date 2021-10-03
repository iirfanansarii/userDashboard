import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    height: '64px',
    background: '#C3F5F0',
    color: 'black',
  },
  title: {
    flexGrow: 1,
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '16px',
  },
  userName: {
    fontSize: '1rem',
    marginRight: '10px',
  },
}));
