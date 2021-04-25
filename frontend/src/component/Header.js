import * as React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { Link as RouterLink, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item xs>
          <NavLink to="/" style={{ textDecoration: "none", color: "unset" }}>
            <Typography variant="h6">KwokkieShop</Typography>
          </NavLink>
        </Grid>

        <Grid item xs container direction="row" spacing={2} justify="flex-end">
          <Grid item>
            <Button component={RouterLink} variant="contained" to="/cart">
              <Typography variant="caption">Cart</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button component={RouterLink} variant="contained" to="/login">
              <Typography variant="caption">Sign In</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Header;
