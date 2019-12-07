import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

export default function Cart(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LocalMallOutlinedIcon fontSize="large" color="primary" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Cart</MenuItem>
        <MenuItem onClick={handleClose} onClick={props.login}>
          Login
        </MenuItem>
        <MenuItem onClick={handleClose} onClick={props.logout}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
