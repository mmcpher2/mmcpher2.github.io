
//Creating array of Objects

const jobs = []

// Creating database objects for pertinent job history

const clinicalAdvisor = {
    "title": "Clinical Advisor",
    "company": "HealthStream",
    "datesemployed": "Feb 2017 – Present",
    "location": "Greater Nashville Area, TN",
    "description": ""    
}

const clinicalSolutionRepresentative = {
    "title": "Specialty Clinical Courseware Solution Manager",
    "company": "HealthStream",
    "datesemployed": "Jul 2015 - Feb 2017",
    "location": "Greater Nashville Area, TN",
    "description": "The Specialty Clinical Courseware Solution Manger is responsible for delivering solution sales, accelerating adoption through insight and expertise, and evangelizing the value proposition of assigned products to HealthStream clients and prospects. In this role, the Solution Manager seeks to align clinical courseware solutions with clinical and business objectives, build relationships and credibility with key stakeholders effectively, and meet or exceed an assigned sales quota for clinical courseware solutions. This position is ultimately responsibility for all elements of the sales process, including prospecting, qualifying, positioning, demonstrations, presentations, objection handling, and contract negotiations through sale closure."
}

const solutionRepresentaive = {
    "title": "Solution Representative",
    "company": "HealthStream",
    "datesemployed": "May 2014 – Jul 2015",
    "location": "Greater Nashville Area, TN",
    "description": "Our team focuses on qualifying and generating sales-ready leads for all sales teams across the HealthStream sales structure. We do this by responding to leads that have been developed by the Marketing team through our website, through webinars and white papers, and conducting outbound cold-calling campaigns. We also have 2 solutions that we are currently responsible for selling. The first solution is the Neonatal Resuscitation Program. As the sole provider of the Neonatal Resuscitation Program (NRP) and a partner with the American Academy of Pediatrics (AAP), we are responsible for selling and educating new and existing customers on all aspects of the program. The second solution is the Ambulatory Surgery Center Association (ASCA) Regulatory Library, in which we are responsible for selling to all facility looking to purchase for under 50 users."
}

const advertisingManager = {
    "title": "Advertising Sales Manager",
    "company": "The Daily Beacon",
    "datesemployed": "Dec 2013 – May 2014",
    "location": "Knoxville, TN",
    "description": ""    
}

const advertisingSales = {
    "title": "Sales Representative",
    "company": "The Daily Beacon",
    "datesemployed": "May 2013 – May 2014",
    "location": "Knoxville, TN",
    "description": ""    
}

// Pushing objects into jobs array

jobs.push(clinicalAdvisor, clinicalSolutionRepresentative, solutionRepresentaive, advertisingManager, advertisingSales)

// Parsing and storing the Data

const jobsString = JSON.stringify(jobs)
localStorage.setItem("jobs", jobsString)


