import React, { useState } from "react";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import CustomTextField from "@Components/CustomTextField";
import { signup } from "../../services/networkServices";

const useStyles = makeStyles(() => ({
	rootContainer: {
		height: "inherit",
		width: "inherit",
	},
	formContainer: {
		height: "70px",
		width: "inherit",
	},
	longURLTextFieldRootStyles: {
		width: "200px",
	},
	shortEndPointTextFieldRootStyles: {
		width: "200px",
	},
	buttonRootStyles: {
		border: "1.4px solid #777",
		margin: "10px",
		height: "39px",
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

const Signup = () => {
	const classes = useStyles();
	const [shortenedURL, setShortenedURL] = useState("");

	const [username, setUsername] = useState("");
	const handleUsernameChange = (e) => setUsername(e.target.value);

	const [password, setPassword] = useState("");
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleSignupButtonClick = async () => {
		const response = await signup(username, password);
		console.log(response);
		if (response.success === true) {
			setShortenedURL("User created");
		} else {
			setShortenedURL("User creation failed");
		}
	};

	return (
		<Grid
			container
			direction="column"
			justifyContent="space-around"
			alignItems="center"
			className={classes.rootContainer}
		>
			<Grid
				container
				justifyContent="flex-end"
				alignItems="top"
				className={classes.formContainer}
			>
				<CustomTextField
					value={username}
					onChangeHandler={handleUsernameChange}
					size="small"
					label="Username"
					classes={{ root: classes.longURLTextFieldRootStyles }}
				/>

				<CustomTextField
					value={password}
					type="password"
					onChangeHandler={handlePasswordChange}
					size="small"
					label="Password"
					classes={{ root: classes.shortEndPointTextFieldRootStyles }}
				/>

				<Button
					variant="contained"
					classes={{ root: classes.buttonRootStyles }}
					onClick={handleSignupButtonClick}
				>
					Signup
				</Button>
			</Grid>
			<Typography className={classes.shortURLRootStyles}>{shortenedURL}</Typography>
		</Grid>
	);
};

export default Signup;
