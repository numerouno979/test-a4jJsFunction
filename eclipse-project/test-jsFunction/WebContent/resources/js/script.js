function handleUnLoad() {
	if (!_test) {
		console.log("fn not found");
	} else {
		console.log("fn found");
	}
	_test();
	console.log("page unloaded");
}

function handleBeforeUnLoad() {
	var leave_message = "Your active session will be lost if you continue with your current action. Continue With Current Action?";
	var e = window.event;
	e.cancelBubble = true;
	e.returnValue = leave_message;
	if (e.stopPropagation) {
		e.stopPropagation();
		e.preventDefault();
	}
	return leave_message;
}
window.onbeforeunload = handleBeforeUnLoad;
window.onunload = handleUnLoad;