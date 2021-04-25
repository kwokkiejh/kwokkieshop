import * as React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";

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
          <Typography variant="h6">KwokkieShop</Typography>
        </Grid>

        <Grid item xs container direction="row" spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="contained">
              <Typography variant="caption">Cart</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">
              <Typography variant="caption">Sign In</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Header;
