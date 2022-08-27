import { Box, Stack, Typography } from "@mui/material";
import PageAppBar from "../../components/PageAppBar";
import FooterComponent from "../../components/FooterComponent";

export default function HomePage() {
  return (
    <>
      <PageAppBar title='WELCOME TO RECRUITING AGENCY "JustArrived.com"' />
      <Box>
        <Box
          sx={{
            margin: "15px auto",
            width: "1000px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Stack mr={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              What We Do
            </Typography>

            <Box
              sx={{ fontSize: "18px", width: "500px", mt: 3, color: "black" }}
            >
              We offer you a job in the best partner companies from the
              following countries: London, North America(NJ), Poland, Germany,
              Ireland, Luxembourg, Italy(Rome), Czech Republic(Prague),
              Belgium(Brussels), Netherlands(Amsterdam),Sweden(Stockholm),
              Finland(Helsinki) and many other offices. All you need to do is
              send your resume with the specified work experience and we will do
              the rest for you. It is world's first recruitment interactive
              website, which gives excellent returns to your valuable resume and
              offers best services to match your experience with our clients
              open positions.
            </Box>
          </Stack>

          <Stack>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              What Carlyle says
            </Typography>

            <Box
              backgroundColor="primary.main"
              sx={{
                fontSize: "18px",
                width: "500px",
                mt: 3,
                color: "white",
                padding: 3,
                borderRadius: "15px",
              }}
            >
              '' <br />
              Work is the grand cure of all the maladies and miseries that ever
              beset mankind.
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ mt: "50px" }}>
        <Typography
          variant="h5"
          color="primary.main"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Why choose our agency?
        </Typography>
        <Box
          sx={{
            width: "200px",
            height: "5px",
            border: "3px dotted white",
            m: "10px auto",
          }}
          backgroundColor="primary.light"
        />

        <Typography
          color="secondary.main"
          sx={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "bold",
            mt: 2,
            pl: 2,
            pr: 2,
          }}
        >
          By choosing our company, you get BONUSES, you can win PRIZES, as well
          as COUPONS for cafes, shops, restaurants and much more. We match your
          profile with our client open positions based on matching level of
          designation and skills we give excellent return gift's! Here we offer
          you a perfect valuable return gift's like Starbucks Coffee Coupon,
          Movie Tickets, Restaurant Voucher and Even Flight Tickets to Holiday
          Destinations.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            pb: 4,
          }}
        >
          <img
            src="public/img/h&m.jpg"
            alt="h&m"
            style={{ display: "block", width: "200px", height: "150px" }}
          />
          <img
            src="public/img/mc.jpg"
            alt="mcdonalds"
            style={{ display: "block", width: "200px", height: "100px" }}
          />
          <img
            src="public/img/starbucks.png"
            alt="starbucks"
            style={{ display: "block", width: "200px", height: "150px" }}
          />
          <img
            src="public/img/fridays.jpg"
            alt="fridays"
            style={{ display: "block", width: "200px", height: "150px" }}
          />
          <img
            src="public/img/belavia_bilety.jpg"
            alt="belavia"
            style={{
              display: "block",
              width: "200px",
              height: "150px",
              marginLeft: "15px",
            }}
          />
        </Box>
      </Box>

      <FooterComponent />
    </>
  );
}
