import PageAppBar from "../../components/PageAppBar";
import { Box, Link } from "@mui/material";
import FooterComponent from "../../components/FooterComponent";
import first from "../../image/clients/1.jpg";
import second from "../../image/clients/2.jpg";
import third from "../../image/clients/3.jpg";
import fourth from "../../image/clients/4.jpg";
import fifth from "../../image/clients/5.jpg";
import sixth from "../../image/clients/6.jpg";
import seventh from "../../image/clients/7.jpg";
import eighth from "../../image/clients/8.jpg";

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
          <img src={first} alt="1" />
        </Link>
        <Link href="#">
          <img src={second} alt="2" />
        </Link>
        <Link href="#">
          <img src={third} alt="3" />
        </Link>
        <Link href="#">
          <img src={fourth} alt="4" />
        </Link>
        <Link href="#">
          <img src={fifth} alt="5" />
        </Link>
        <Link href="#">
          <img src={sixth} alt="6" />
        </Link>
        <Link href="#">
          <img src={seventh} alt="7" />
        </Link>
        <Link href="#">
          <img src={eighth} alt="8" />
        </Link>
      </Box>
      <FooterComponent />
    </>
  );
}
