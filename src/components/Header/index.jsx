import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar sx={{ bgcolor: "#f5f5f5" }}>
      <Toolbar>
        <Typography variant="h6" component="h6" sx={{color: '#000'}}>
          TDT Asia
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
