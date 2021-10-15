import React, { useState } from "react";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import CustomTextField from "./../components/CustomTextField";
import { shortenUrl } from "./../services/networkServices";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: "inherit",
    width: "inherit",
  },
  longURLTextFieldRootStyles: {
    width: "400px",
  },
  shortEndPointTextFieldRootStyles: {
    width: "200px",
  },
  buttonRootStyles: {
    border: "1.4px solid #777",
    margin: "10px",
  },
  shortURLRootStyles: {
    border: "1.4px solid #777",
    borderRadius: "5px",
    margin: "10px",
    height: "100px",
    width: "300px",
    textAlign: "center",
    color: "#333",
  },
}));

const Shortner = () => {
  const classes = useStyles();
  const [shortenedURL, setShortenedURL] = useState("Short URL");

  const [longURL, setLongURL] = useState("");
  const handleLongURLChange = (e) => setLongURL(e.target.value);

  const [shortEndPoint, setShortEndPoint] = useState("");
  const handleShortEndPointChange = (e) => setShortEndPoint(e.target.value);

  const handleShortenButtonClick = async () => {
    const response = await shortenUrl(longURL, shortEndPoint);
    console.log(response);
    if (response.success === true) {
      setShortenedURL(response.shortUrl);
    } else {
      setShortenedURL(`Failed to generate Shortened URL. Please try again`);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.rootContainer}
    >
      <CustomTextField
        value={longURL}
        onChangeHandler={handleLongURLChange}
        size="medium"
        label="Long URL"
        classes={{ root: classes.longURLTextFieldRootStyles }}
      />

      <CustomTextField
        value={shortEndPoint}
        onChangeHandler={handleShortEndPointChange}
        size="small"
        label="Shorter End-point"
        classes={{ root: classes.shortEndPointTextFieldRootStyles }}
      />

      <Button
        variant="contained"
        classes={{ root: classes.buttonRootStyles }}
        onClick={handleShortenButtonClick}
      >
        Shorten
      </Button>

      <Typography className={classes.shortURLRootStyles}>
        {shortenedURL}
      </Typography>
    </Grid>
  );
};

export default Shortner;
