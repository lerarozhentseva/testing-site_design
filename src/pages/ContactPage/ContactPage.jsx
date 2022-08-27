import PageAppBar from "../../components/PageAppBar";
import { Typography } from "@mui/material";
import FormContacts from "../../components/FormContacts";
import FooterComponent from "../../components/FooterComponent";

export default function ContactPage() {
  return (
    <>
      <PageAppBar title="Contact us" />

      <Typography sx={{ ml: 3 }} variant="h5" color="secondary.main">
        If you have any questions, fill out the form and wait for feedback!
      </Typography>

      <FormContacts />

      <FooterComponent />
    </>
  );
}
