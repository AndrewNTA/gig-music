import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import useStyles from './styles';

function Show({ name, artists, time, location }) {
  const classes = useStyles();
  return (
    <div className={classes.showWrapper}>
      <div className={classes.showName}>{name}</div>
      <div className={classes.showArtists}>{artists}</div>
      <div className={classes.showInfo}>
        <div className={classes.showTime}>{time}</div>
        <div className={classes.showLocation}>{location}</div>
      </div>
      <div className={classes.showMoreInfo}>
        <InfoIcon fontSize="small" sx={{ marginRight: '4px' }} />
        <a
          href="https://events.humanitix.com/mnc-chris-cody-and-tessie-overmeyer-steve-barry-solo"
          className={classes.showMoreInfoText}
        >
          More info
        </a>
      </div>
    </div>
  );
}

export default Show;
