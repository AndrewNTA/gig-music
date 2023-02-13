import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // info box start
  ibWrapper: {
    padding: '1.25rem',
    lineHeight: '1.25rem',
    fontSize: '0.875rem',
    backgroundColor: 'rgb(226 232 240)',
    borderRadius: '0.25rem',
  },
  ibTitle: {
    marginBottom: '8px',
    fontWeight: 600,
  },
  // info box end

  // article start
  aWrapper: {
    marginBottom: '3rem',
  },
  aTitle: {
    lineHeight: '1.25rem',
    fontStyle: 'italic',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: '1.125rem',
    paddingLeft: '0.75rem',
    borderLeft: '2px solid rgb(224 32 32)',
  },
  // article end

  // menu start
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '12px',
    paddingTop: '4rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      paddingTop: '12px',
    },
  },
  menuItemGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  menuItem: {
    cursor: 'pointer',
    fontSize: '1.375rem',
    textTransform: 'uppercase',
    padding: '4px 2rem',
    width: '6rem',
    fontWeight: 600,
    borderBottom: '2px solid white',
    textAlign: 'center',
    '&:hover': {
      color: 'rgb(224 32 32)',
      borderBottom: '2px solid rgb(224 32 32)',
    },
    [theme.breakpoints.down('md')]: {
      padding: '4px 1.25rem',
      width: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      width: 'unset',
      padding: '4px 0',
    },
  },
  menuLogo: {
    fontSize: '2.25rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
    paddingRight: '4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      textAlign: 'center',
      paddingRight: 0,
    },
  },
  menuLogoHead: {
    textShadow: '0 0 4px #111',
    color: '#111',
  },
  menuLogoTail: {
    textShadow: '0 0 4px #111',
    color: '#fff',
  },
  // menu end

  // show start
  showWrapper: {
    marginBottom: '16px',
  },
  showName: {
    lineHeight: '1.5rem',
    textTransform: 'uppercase',
    fontSize: '1.125rem',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  showArtists: {
    lineHeight: '1.25rem',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
  showInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  showTime: {
    lineHeight: '1.25rem',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    color: '#7f7f7f',
    marginRight: '0.75rem',
    paddingRight: '0.75rem',
    borderRight: '1px solid #7f7f7f',
  },
  showLocation: {
    lineHeight: '1.25rem',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    color: '#7f7f7f',
  },
  showMoreInfo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '6px',
    cursor: 'pointer',
  },
  showMoreInfoText: {
    lineHeight: '1.25rem',
    fontSize: '0.875rem',
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  // show end

  // more button start
  mbWrapper: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '2px solid #000',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '1.125rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    '&:hover': {
      border: '2px solid rgb(224 32 32)',
      color: 'rgb(224 32 32)',
    },
  },
  // more button end
}));

export default useStyles;
