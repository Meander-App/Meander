import React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { updateCity } from './../state/actionCreators/index'


const LocationButton = () => {
  const locations = useSelector((state: any) => state.map.locationDetails.names);
  const dispatch = useDispatch();
  const setCurrentCity = (newCityIndex: number) => dispatch(updateCity(newCityIndex));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setCurrentCity(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <><List
      component="nav"
      aria-label="Location Selector"
      sx={{ bgcolor: 'background.paper' }}
    >
      <ListItem
        button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-label="Location"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
      >
        <ListItemText
          primary="Location"
          secondary={locations[selectedIndex]} />
      </ListItem>
    </List><Menu
      id="lock-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'lock-button',
        role: 'listbox',
      }}
    >
        {locations.map((location: string, index: number) => (
          <MenuItem
            key={location}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {location}
          </MenuItem>
        ))}
      </Menu></>
  )
}

export default LocationButton;