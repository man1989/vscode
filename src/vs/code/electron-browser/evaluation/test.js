const {ipcRenderer: ipc} = require("electron");
window.addEventListener("submit", (e)=>{
	e.preventDefault();
	ipc.send("start-test", "start");
});

window.addEventListener("closed", ()=>{
	alert("closing");
});