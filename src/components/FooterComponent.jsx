import {
  Box,
  InputAdornment,
  Link,
  List,
  ListItemIcon,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";

export default function FooterComponent() {
  return (
    <Box
      sx={{
        height: "180px",
        display: "flex",
        flexDirection: "row",
        p: 5,
        justifyContent: "space-around",
      }}
      backgroundColor="primary.light"
    >
      <Stack sx={{ width: "300px" }}>
        <Typography variant="h5" color="secondary.main">
          Newsletter
        </Typography>
        <Box sx={{ fontSize: "18px", mt: 3 }}>
          Keep up on our always evolving product features and technology. Enter
          your e-mail and subscribe to our newsletter.
        </Box>
        <TextField
          id="outlined-textarea"
          size="small"
          sx={{ mt: 3 }}
          label="Email Address"
          placeholder="..."
          multiline
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ForwardToInboxIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack sx={{ width: "300px" }}>
        <Typography variant="h5" color="secondary.main">
          Articles
        </Typography>
        <List>
          <Link
            sx={{ textDecoration: "none" }}
            href="https://resume.io/how-to-write-a-resume"
          >
            <Typography sx={{ fontSize: "15px" }} color="primary.dark">
              "How To Get a Job in Another Country?"
            </Typography>
          </Link>

          <Link
            sx={{ textDecoration: "none" }}
            href="https://www.indeed.com/career-advice/finding-a-job/how-to-get-a-job-in-another-country"
          >
            <Typography sx={{ fontSize: "15px" }} color="primary.dark">
              "How To Write a Resume?"
            </Typography>
          </Link>
        </List>
      </Stack>

      <Stack sx={{ width: "300px" }}>
        <Typography variant="h5" color="secondary.main">
          Contact Us
        </Typography>

        <List aria-label="main mailbox folders">
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <Typography sx={{ fontSize: "15px" }} color="primary.dark">
              <span style={{ fontWeight: "bold" }}>Adress:</span> Tomgandhi
              Consulting Limited, 79 College Road, Harrow, Greater London, HA1
              1BD, United Kingdom
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mt: 1,
            }}
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <Link href="#">
              <Typography sx={{ fontSize: "15px" }} color="primary.dark">
                justarrived_careers@gmail.com
              </Typography>
            </Link>
          </Box>
        </List>
      </Stack>
    </Box>
  );
}
