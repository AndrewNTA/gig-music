import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // article start
  aWrapper: {
    marginBottom: "3rem",
  },
  aTitle: {
    lineHeight: "1.25rem",
    fontStyle: "italic",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "1.125rem",
    paddingLeft: "0.75rem",
    borderLeft: "2px solid rgb(224 32 32)",
  },
  aContent: {
    paddingLeft: "0.75rem",
  },
  // article end

  // menu start
  menuWrapper: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "12px",
    paddingTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingTop: "12px",
    },
  },
  menuItemGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  menuItem: {
    cursor: "pointer",
    fontSize: "1.375rem",
    textTransform: "uppercase",
    padding: "4px 2rem",
    width: "6rem",
    fontWeight: 600,
    borderBottom: "2px solid white",
    textAlign: "center",
    "&:hover": {
      color: "rgb(224 32 32)",
      borderBottom: "2px solid rgb(224 32 32)",
    },
    [theme.breakpoints.down("md")]: {
      padding: "4px 1.25rem",
      width: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      width: "unset",
      padding: "4px 0",
    },
  },
  menuLogo: {
    width: "240px",
    cursor: "pointer",
    paddingRight: "4rem",
    paddingLeft: "0.75rem",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      textAlign: "center",
      paddingRight: 0,
    },
  },
  // menu end

  // show start
  showWrapper: {
    marginBottom: "16px",
    paddingLeft: "0.75rem",
  },
  showName: {
    lineHeight: "1.5rem",
    textTransform: "uppercase",
    fontSize: "1.125rem",
    fontWeight: 700,
    fontStyle: "italic",
  },
  showArtists: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  showInfo: {
    display: "flex",
    alignItems: "center",
  },
  showTime: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#7f7f7f",
    marginRight: "0.75rem",
    paddingRight: "0.75rem",
    borderRight: "1px solid #7f7f7f",
  },
  showLocation: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#7f7f7f",
  },
  showMoreInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: "6px",
    cursor: "pointer",
  },
  showMoreInfoText: {
    lineHeight: "1.25rem",
    fontSize: "0.875rem",
    color: "#000",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  // show end

  // more button start
  mbWrapper: {
    padding: "8px 12px",
    borderRadius: "4px",
    border: "2px solid #000",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "1.125rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    "&:hover": {
      border: "2px solid rgb(224 32 32)",
      color: "rgb(224 32 32)",
    },
  },
  // more button end

  // footer start
  footerWrapper: {
    color: "rgb(229 231 235)",
    backgroundColor: "rgb(0 0 0)",
    padding: "3.5rem 2.5rem",
    marginTop: "4rem",
    fontSize: "0.875rem",
  },
  footerLogo: {
    cursor: "pointer",
    fontSize: "2.5rem",
    lineHeight: "1.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  footerLink: {
    color: "white",
    fontWeight: 500,
    marginLeft: "3px",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  footerTitle: {
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
    fontWeight: 600,
    marginBottom: "2rem",
  },
  footerItem: {
    color: "white",
    fontWeight: 400,
    marginBottom: "12px",
    cursor: "pointer",
  },
  // footer end

  // gig item start
  giWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
  },
  giTime: {
    position: "sticky",
    top: "1.25rem",
    textTransform: "uppercase",
    paddingRight: "2.125rem",
    paddingLeft: "1.125rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.125rem",
      paddingLeft: "1.125rem",
    },
  },
  giDay: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: 600,
    color: "rgb(224 32 32)",
  },
  giDate: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    fontWeight: 600,
    color: "rgb(0 0 0)",
  },
  // gig item end

  // scroll top button start
  stbWrapper: {
    position: "fixed",
    bottom: "32px",
    right: "32px",
    padding: "0.5rem",
    borderRadius: "12px",
    backgroundColor: "rgb(224 32 32)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  // scroll top button end
}));

export default useStyles;
