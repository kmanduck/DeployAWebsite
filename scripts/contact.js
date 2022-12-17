// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

var contact = document.getElementById('submit-button');

contact.onclick = function () {
    document.getElementById('contact-page').remove();
    //document.write ('<br />');


    this.remove();

     var change = document.getElementById("text");
                if (change.innerHTML == "We'd love to hear from you!")
                {

                    change.innerHTML = "Thank you for your message!";

                    //document.write('<br>');
                }

};


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

