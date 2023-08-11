# Material Confirm (TypeScript version)

Stateless confirmation dialog component, made to be simple to use.  
It was inspired by [Andrew Bliss component](https://medium.com/javascript-in-plain-english/creating-a-confirm-dialog-in-react-and-material-ui-3d7aaea1d799).



## Dependencies

* ReactJS  
	Back-bone of the project  
* **Material UI**  
	For the Material UI dialog components



## Props

* `cancelLabel`? : string  
Label for the action button that closes the dialog without triggering confirmation.  
If not provided, `"No"` will be used.

* `children`: JSX.Element|JSX.Element[]  
Content used on the body of the Dialog.

* `closeDialog`: function  
Function to be executed when the dialog is closed.  
Generally used to set state on the parent component.

* `confirmLabel`?: string  
Label for the action button that triggers confirmation.  
If not provided, `"Yes"` will be used.

* `disabled`: boolean  
If the action buttons are enabled.

* `onConfirm`: function  
Content used on the body of the Dialog.

* `open`: boolean  
If the dialog must be shown on screen.

* `title`: string  
Title for the dialog.



# How to use

```jsx
import React from "react";
import ConfirmDialog from "./ConfirmDialog";

const CustomComponent = (props) => {
	// Could come from props or context
	const [disabled, setDisabled] = useState(false);
	const [open, setOpen] = useState(false);

	const CloseDialog = () => setOpen(false);
	const SaveChanges = () => {
		console.debug("Saving changes.");

		setOpen(false);
	};
	/// ...

	return [
		/// Rest of the component layout

		<ConfirmDialog
			closeDialog={CloseDialog}
			disabled={disabled}
			onConfirm={SaveChanges}
			key={"some_arbitrary_component_key"}
			open={open}
			title={"Confirm changes?"}
		>{
			"Do you wish to save the current changes."
		}</ConfirmDialog>
	];
};
export CustomComponent;
```