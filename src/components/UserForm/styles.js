import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  cardContent: {
    padding: '30px 0',
  },
  formBox: {
    padding: '20px 5px',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    minWidth: '264px',
    color: '#036CDB',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '400',
    fontSize: '16px',
  },
  btn: {
    minHeight: '30px',
    minWidth: '100px',
    background: '#0DBFE2',
    color: 'white',
    '&:hover': {
      background: '#0DBFE2',
    },
  },
}));
