import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function SuperTabs(props) {
  const handleChange = (event, newValue) => {
    props.onChangeTab(newValue);
  };

  return (
    <Box>
      <Box>
        <Tabs value={props.activeTab} onChange={handleChange} aria-label="Tab Navigation">
        {props.labels.map((label, i) => (
          <Tab label={label} key={`tab-${i}`} aria-controls={`tabpanel-${i}`} />
        ))}
        </Tabs>
      </Box>
      {React.Children.map(props.children, (component, i) => (
        <TabPanel value={props.activeTab} index={i}>
          {component}
        </TabPanel>
      ))}
    </Box>
  );
}
