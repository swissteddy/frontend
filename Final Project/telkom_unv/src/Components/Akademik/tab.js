import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Mata Kuliah Wajib" {...a11yProps(0)} />
          <Tab label="Peluang karir" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        Quisque in commodo est, nec porttitor libero. Donec sit amet mattis felis, vitae consequat diam. Vivamus lorem tortor, venenatis ut cursus eget, molestie id ligula. Maecenas condimentum nisl faucibus porttitor venenatis. Vivamus eu velit purus. Duis tempor nisi rhoncus lectus viverra, vel dictum ligula placerat. Nunc pulvinar tempus metus sed eleifend. Etiam mollis risus ut lacus sagittis, eget placerat ipsum semper. Donec eu nisi viverra, pharetra elit vitae, dignissim tellus. Nam pretium vehicula lorem ut rutrum. Morbi gravida suscipit mi ut vestibulum. Cras euismod, augue a iaculis rhoncus, lacus neque placerat nulla, a ultrices diam magna vel magna. Cras ex felis, porta condimentum pellentesque non, rutrum ac augue. card content 
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        Quisque in commodo est, nec porttitor libero. Donec sit amet mattis felis, vitae consequat diam. Vivamus lorem tortor, venenatis ut cursus eget, molestie id ligula. Maecenas condimentum nisl faucibus porttitor venenatis. Vivamus eu velit purus. Duis tempor nisi rhoncus lectus viverra, vel dictum ligula placerat. Nunc pulvinar tempus metus sed eleifend. Etiam mollis risus ut lacus sagittis, eget placerat ipsum semper. Donec eu nisi viverra, pharetra elit vitae, dignissim tellus. Nam pretium vehicula lorem ut rutrum. Morbi gravida suscipit mi ut vestibulum. Cras euismod, augue a iaculis rhoncus, lacus neque placerat nulla, a ultrices diam magna vel magna. Cras ex felis, porta condimentum pellentesque non, rutrum ac augue. card content 
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
