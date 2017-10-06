

// Creating database objects for pertinent job history

const clinicalAdvisor = {
    "title": "Clinical Advisor",
    "company": "HealthStream",
    "dates employed": "Feb 2017 – Present",
    "location": "Greater Nashville Area, TN",
}

const clinicalSolutionRepresentative = {
    "title": "Specialty Clinical Courseware Solution Manager",
    "company": "HealthStream",
    "dates employed": "Jul 2015 - Feb 2017",
    "location": "Greater Nashville Area, TN",
}

const solutionRepresentaive = {
    "title": "Solution Representative",
    "company": "HealthStream",
    "dates employed": "May 2014 – Jul 2015",
    "location": "Greater Nashville Area, TN",
}

const advertisingManager = {
    "title": "Advertising Sales Manager",
    "company": "The Daily Beacon",
    "dates employed": "Dec 2013 – May 2014",
    "location": "Knoxville, TN",
}

const advertisingSales = {
    "title": "Sales Representative",
    "company": "The Daily Beacon",
    "dates employed": "May 2013 – May 2014",
    "location": "Knoxville, TN",
}

//Creating Objects of Objects

const jobs = {
    "clinicalAdvisor": clinicalAdvisor,
    "clinicalSolutionRepresentative": clinicalSolutionRepresentative,
    "solutionRepresentaive": solutionRepresentaive,
    "advertisingManager": advertisingManager,
    "advertisingSales": advertisingSales,
}

// Parsing and storing the Data

const jobsString = JSON.stringify(jobs)
localStorage.setItem("jobs", jobsString)


