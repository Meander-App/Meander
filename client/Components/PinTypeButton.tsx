import React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

const pinTypes = [
  'Select a Pin Type',
  'Food Truck', 
  'Street Artist', 
  'Pop-Up', 
  'Giveaway'
]

const PinTypeButton = () => {
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
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <><List
      component="nav"
      aria-label="Pin Type Selector"
      sx={{ bgcolor: 'background.paper' }}
    >
      <ListItem
        button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-label="Pin Type"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
      >
        <ListItemText
          primary="Pin Type"
          secondary={pinTypes[selectedIndex]} />
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
        {pinTypes.map((pinType, index) => (
          <MenuItem
            key={pinType}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {pinType}
          </MenuItem>
        ))}
      </Menu></>
  )
}

export default PinTypeButton;