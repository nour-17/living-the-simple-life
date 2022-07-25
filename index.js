let form = document.getElementById("emailCollector");
form.addEventListener("submit", event => {
	event.preventDefault();
	let ourFormData = new FormData(event.target);
	let userFirstName = ourFormData.get("firstName");
	let userEmailAddress = ourFormData.get("emailAddress");

	let updatedHtmlContent = `
        <h2>Thank you, ${userFirstName}!</h2>

        <p>I will get in touch with you ASAP!</p>
        
        <p>check out the emails sent to: ${userEmailAddress}</p> 
        
    `;
	let updatedContentContainer = document.getElementById("Main-Content");
	updatedContentContainer.innerHTML = updatedHtmlContent;
});
