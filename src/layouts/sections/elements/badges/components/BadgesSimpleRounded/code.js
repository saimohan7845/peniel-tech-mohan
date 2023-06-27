const badgesSimpleRoundedCode = `import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";

function BadgesSimpleRounded() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <MKBadge
              badgeContent="penieltech"
              variant="contained"
              color="primary"
              container
              circular
            />
            <MKBadge
              badgeContent="penieltech"
              variant="contained"
              color="secondary"
              container
              circular
            />
            <MKBadge
              badgeContent="penieltech"
              variant="contained"
              color="success"
              container
              circular
            />
            <MKBadge badgeContent="error" variant="contained" color="error" container circular />
            <MKBadge
              badgeContent="penieltech"
              variant="contained"
              color="warning"
              container
              circular
            />
            <MKBadge badgeContent="penieltech" variant="contained" color="info" container circular />
            <MKBadge badgeContent="penieltech" variant="contained" color="light" container circular />
            <MKBadge badgeContent="penieltech" variant="contained" color="dark" container circular />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BadgesSimpleRounded;`;

export default badgesSimpleRoundedCode;
