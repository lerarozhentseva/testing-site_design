import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";

export default function FormContacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [nameClick, setNameClick] = useState(false);
  const [emailClick, setEmailClick] = useState(false);
  const [nameError, setNameError] = useState("This field cannot be empty");
  const [emailError, setEmailError] = useState("This field cannot be empty");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameClick(true);
        break;
      case "email":
        setEmailClick(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email address");
    } else {
      setEmailError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("This field cannot be empty");
    } else {
      setNameError("");
    }
  };

  const handleFormReset = () => {
    setName("");
    setEmail("");
    setComments("");
  };

  const handleSubmit = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        comments,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log({
          name: data.name,
          email: data.email,
          comments: data.comments,
        });
        handleFormReset();
        setIsLoading(false);
        setFormValid(false);
        setTimeout(
          () =>
            alert(
              "Your data has been successfully sent! Our experts will contact you shortly."
            ),
          1000
        );
      })
      .catch(() => {
        setIsLoading(false);
        setFormValid(false);
        setTimeout(
          () =>
            alert(
              "Your data has not been sent. An error has occurred on the server. We apologize!"
            ),
          1000
        );
      });
  };

  useEffect(() => {
    if (nameError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError]);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        pt: 2,
        pl: 2,
        pb: 5,
      }}
    >
      <TextField
        label="Your Name"
        value={name}
        data-testid="name"
        name="name"
        type="text"
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => nameHandler(e)}
        sx={{ borderRadius: "5px", m: "15px 0 0 0" }}
      />
      {nameClick && nameError && (
        <Typography
          data-testid="nameerror"
          sx={{ fontSize: "15px", m: 0 }}
          color="error"
        >
          {nameError}
        </Typography>
      )}
      <TextField
        label="Your Email"
        value={email}
        data-testid="email"
        name="email"
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => emailHandler(e)}
        sx={{ borderRadius: "5px", m: "15px 0 0 0" }}
      />
      {emailClick && emailError && (
        <Typography
          data-testid="emailerror"
          sx={{ fontSize: "15px", m: 0 }}
          color="error"
        >
          {emailError}
        </Typography>
      )}
      <TextField
        label="Comments"
        placeholder="write..."
        value={comments}
        name="comments"
        type="text"
        onChange={(e) => setComments(e.target.value)}
        sx={{ borderRadius: "5px", m: "15px 0 0 0" }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
        {isLoading ? (
          <Button
            size="medium"
            variant="contained"
            endIcon={<CircularProgress />}
          >
            Expect
          </Button>
        ) : (
          <Button
            size="medium"
            type="submit"
            disabled={!formValid}
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </Button>
        )}
      </Box>
    </Box>
  );
}
