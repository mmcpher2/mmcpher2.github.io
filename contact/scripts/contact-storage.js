
// Creating Objects of Objects

const contactInfo = []

// Creating Objects for Contact Information

const emailAddress = {
    "type": "email",
    "name": "mmcpher2@gmail.com",
}

const phoneNumber = {
    "type": "phone number",
    "name": "615-714-9489"
}

const linkedIn = {
    "type": "linkedIn",
    "name": "https://www.linkedin.com/in/ryan-mcpherson-6b636549/"
}

const faceBook = {
    "type": "facebook",
    "name": "https://www.facebook.com/ryan.mcpherson.142"
}

// Pushing objects into array

contactInfo.push(emailAddress, phoneNumber, linkedIn,faceBook)

// Parsing and Storing the Data

const contactInfoString = JSON.stringify(contactInfo)
localStorage.setItem("contactInfo", contactInfoString)