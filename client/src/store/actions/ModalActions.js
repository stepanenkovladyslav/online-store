export const activateModal = () => {
	return { type: "ACTIVATEADDMODAL", payload: true };
};
export const deActivateModal = () => {
	return { type: "DEACTIVATEMODAL", payload: false };
};
