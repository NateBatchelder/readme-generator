// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU') {
    return '[![License](https://img.shields.io/badge/license-GNU_GPLv3-red)](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (license === 'MIT') {
    return '[![License](https://img.shields.io/badge/license-MIT-blue)](https://choosealicense.com/licenses/mit/)'
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU') {
    return '[GNU License](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (license === 'MIT') {
    return '[MIT License](https://choosealicense.com/licenses/mit/)'
  } else {
    return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License ${renderLicenseLink(license)}`
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#install)
  * [Badges](#badges)
  * [Usage](#usage)
  * [Features](#features)
  * [Tests](#tests)
  * [Influences](#influences)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${data.install}

  ## Badges
  ${data.badges} 

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}
  
  ## Tests
  ${data.test}
  
  ## Influences
  ${data.influences}
  
  ## Credits
  Created by ${data.username}
  // include a badge for your github repo and another for linkedin
  // contact email, twitter
  
  
  ## License
  Copyright (c) Forked Lightning Productions,LLC. All rights reserved.
  ${renderLicenseBadge(data.license)}
  

`;
}

module.exports = generateMarkdown;
