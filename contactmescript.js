document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
  
    let emailBody = "First Name: " + firstName + "\n" +
                    "Last Name: " + lastName + "\n" +
                    "Phone Number: " + phoneNumber + "\n" +
                    "Email Address: " + emailAddress + "\n" +
                    "Subject: " + subject + "\n" +
                    "Message: " + message;
  
    let link = "mailto:jinkilee552@gmail.com" +
               "?subject=" + encodeURIComponent(subject) +
               "&body=" + encodeURIComponent(emailBody);
  
    window.location.href = link;
  });
  