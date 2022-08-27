import PageAppBar from "../../components/PageAppBar";
import { Box, Link } from "@mui/material";
import FooterComponent from "../../components/FooterComponent";

export default function ClientsPage() {
  return (
    <>
      <PageAppBar title="OUR VALUABLE CLIENTS" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          alignContent: "start",
          pb: 5,
        }}
      >
        <Link href="#">
          <img src="public/img/clients/1.jpg" alt="1" />
        </Link>
        <Link href="#">
          <img src="public/img/clients/2.jpg" alt="2" />
        </Link>
        <Link href="#">
          <img src="public/img/clients/3.jpg" alt="3" />
        </Link>
        <Link href="#">
          <img src="public/img/clients/4.jpg" alt="4" />
        </Link>
        <Link href="#">
          <img src="public/img/clients/5.jpg" alt="5" />
        </Link>
        <Link href="#">
          <img src="public/img/clients/6.jpg" alt="6" />
        </Link>
        <Link href="#">
          <img src="public/img/clients/7.jpg" alt="7" />
        </Link>
        <Link href="#">
          <img src="public/img/clients/8.jpg" alt="8" />
        </Link>
      </Box>
      <FooterComponent />
    </>
  );
}
