import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	inputLabelStyles: {
		color: "#aaa",
	},
	notchedOutlineInputStyles: {
		border: "1.4px solid #777",
		"&:hover": {
			border: "1.4px solid #777",
		},
	},
	outlinedInputRootStyles: {
		backgroundColor: "#eee",
	},
	textFieldRootStyles: {
		margin: "10px",
	},
}));

const CustomTextField = (props) => {
	const {
		classes = { root: undefined },
		onChangeHandler,
		size,
		value,
		label,
		type = "text",
	} = props;
	const baseClasses = useStyles();
	return (
		<TextField
			id="outlined-basic"
			label={label}
			type={type}
			variant="outlined"
			color="primary"
			classes={{ root: clsx(baseClasses.textFieldRootStyles, classes.root) }}
			InputLabelProps={{
				classes: { outlined: baseClasses.inputLabelStyles },
			}}
			InputProps={{
				classes: {
					notchedOutline: baseClasses.notchedOutlineInputStyles,
					root: baseClasses.outlinedInputRootStyles,
				},
			}}
			size={size}
			value={value}
			onChange={onChangeHandler}
		/>
	);
};

export default CustomTextField;
