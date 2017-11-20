$(document).ready(function() {
    
        const contactOutputEl = $('');
    
        $.ajax({
            "url": "",
            "method": "GET"
        }).then(
            function (theContacts) {
                let contactsToHtml = "";

                for (var key in theDogs) {
                    dogHTMLRepresentations += `
                        <div>
                            <h3>${key}'s are great dogs!</h3>
                        </div>
                    `;
                }
            contactOutputEl.html(contactsToHtml);
            }
        );
    });