import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

/**
 * Material-ui types.
 * 
 * @typedef {import('@material-ui/core/Button').default} Button
 * @typedef {import('@material-ui/core/Dialog').default} Dialog
 * @typedef {import('@material-ui/core/DialogActions').default} DialogActions
 * @typedef {import('@material-ui/core/DialogContent').default} DialogContent
 * @typedef {import('@material-ui/core/DialogTitle').default} DialogTitle
 */
/**
 * @typedef {{
    cancelLabel?: string,
    children: JSX.Element|JSX.Element[],
    closeDialog: function() : void,
    confirmLabel?: string,
	disabled: boolean,
    onConfirm: function() : void,
    open: boolean,
    title: string
 }} ConfirmDialogProps
 */


/**
 * Stateless confirmation dialog component, inspired by Andrew Bliss component.
 * 
 * @see https://medium.com/javascript-in-plain-english/creating-a-confirm-dialog-in-react-and-material-ui-3d7aaea1d799
 * @param {ConfirmDialogProps} props
 */
const ConfirmDialog = (props) => {
	const Close = () => {
		if (props.closeDialog) {
			props.closeDialog();
		}
	};
	const Confirm = () => {
		if (props.closeDialog) {
			props.closeDialog();
		}

		if (props.onConfirm) {
			props.onConfirm();
		}
	};

	const children = props.children;
	const disabled = props.disabled || false;
	const open = props.open;
	const title = props.title;

	return <Dialog
		open={open}
		onClose={Close}
		aria-labelledby="confirm-dialog"
	>
		<DialogTitle id="confirm-dialog">{
			title
		}</DialogTitle>
		<DialogContent>{
			children
		}</DialogContent>
		<DialogActions>
			<Button
				variant="contained"
				onClick={Close}
				disabled={disabled}
				color="secondary"
			>{
				props.cancelLabel ?? "No"
			}</Button>
			<Button
				variant="contained"
				onClick={Confirm}
				disabled={disabled}
				color="default"
			>{
				props.confirmLabel ?? "Yes"
			}</Button>
		</DialogActions>
	</Dialog>;
};

export default ConfirmDialog;