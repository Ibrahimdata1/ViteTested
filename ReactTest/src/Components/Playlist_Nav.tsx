import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Playlist_Nav = () => {
  return (
    <AppBar position="sticky" style={{zIndex:'0'}}>
      <Toolbar
        variant="dense"
        disableGutters
        sx={{ minHeight: 20, height: 20,border:'none',backgroundColor:'#2F2F2F'}}
        className="p-3"
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Playlist_Nav;
