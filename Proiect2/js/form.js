function createForm(){
	var x = document.getElementById("form_sample");

	var createform = document.createElement('form'); // Create New Element form
		createform.setAttribute("action", "");        // Setting action Attribute on form
		createform.setAttribute("method", "post");  // Setting method Attribute on form
		x.appendChild(createform);

	var heading = document.createElement('h2'); // Heading of form
		heading.innerHTML = "Contact ";  
		createform.appendChild(heading);

	var line = document.createElement('hr');  //giving horizontal row after heading
		createform.appendChild(line);

	var linebreak = document.createElement('br');
		createform.appendChild(linebreak);

	var namelabel = document.createElement('label'); // Create Label for name field
		namelabel.innerHTML = "Your Name : ";            // Set Field Labels
		createform.appendChild(namelabel);

	var inputelement = document.createElement('input'); // Create input field for name
		inputelement.setAttribute("type", "text");  
		inputelement.setAttribute("name", "name");
		inputelement.setAttribute("id", "name");
		createform.appendChild(inputelement);

	var linebreak = document.createElement('br');
		createform.appendChild(linebreak);


	var emaillabel = document.createElement('label');  //Create Label for email field
		emaillabel.innerHTML = "Your Email : ";
		createform.appendChild(emaillabel);

	var emailelement = document.createElement('input'); // Create input field for email
		emailelement.setAttribute("type", "text");
		emailelement.setAttribute("name", "email");
		emailelement.setAttribute("id", "email");
		createform.appendChild(emailelement);

	var emailbreak = document.createElement('br');
		createform.appendChild(emailbreak);

	// Append Textarea
	var messagelabel = document.createElement('label'); 
		messagelabel.innerHTML = "Your Message : ";
		createform.appendChild(messagelabel);

	var texareaelement = document.createElement('textarea'); 
		texareaelement.setAttribute("name", "message");
		texareaelement.setAttribute("id", "message");
		createform.appendChild(texareaelement);

	var messagebreak = document.createElement('br');
		createform.appendChild(messagebreak);

	// Append Submit Button
	var submitelement = document.createElement('input'); 
		submitelement.setAttribute("type", "button");
		submitelement.setAttribute("name", "Submit");
		submitelement.setAttribute("value", "Submit");
		submitelement.onclick = 	function Post() {
			// creat post object
			const postObject = {
					name: name.value,
					email: email.value,
					mesaje: message.value
			}
			fetch('http://localhost:3000/reviews', {
					method: 'post',
					headers: {
							"Content-type": "application/json"
					},
					body: JSON.stringify(postObject)
				}).then(function () {
					while (createform.firstChild) {
						createform.removeChild(createform.firstChild);
					}
					createForm();
			});
	}
		createform.appendChild(submitelement);
}

createForm();