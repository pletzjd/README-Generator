function renderLicenseLink(license) {
  if(license === 'GNU_AGPLv3'){
    return 'https://choosealicense.com/licenses/agpl-3.0/'
  }else if(license === 'GNU_GPLv3'){
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  }else if(license === 'GNU_LGPLv3'){
    return 'https://choosealicense.com/licenses/lgpl-3.0/'
  }else if(license === 'Mozilla_Public_License_2.0'){
    return 'https://choosealicense.com/licenses/mpl-2.0/'
  }else if(license === 'Apache_License_2.0'){
    return 'https://choosealicense.com/licenses/apache-2.0/'
  }else if(license === 'MIT_License'){
    return 'https://choosealicense.com/licenses/mit/'
  }else if(license === 'Boost_Software_License_1.0'){
    return 'https://choosealicense.com/licenses/bsl-1.0/'
  }else if(license === 'The_Unlicense'){
    return 'https://choosealicense.com/licenses/unlicense/'
  }else{
    return ''
  }
}

function generateMarkdown(data) {
  licenseLink = renderLicenseLink(data.license)
  return `# ${data.title}
  ![license](https://img.shields.io/badge/license-${data.license}-green)<br>
  Click [here](${licenseLink}) for license details

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.constribution}
  
  ## Test
  
  ${data.test}
  
  ## Questions
  
  My GitHub profile can be found here: [https://github.com/${data.username}](https://github.com/${data.username})<br>
  Or I can be reached by email at: ${data.email}

`;
}

module.exports = {generateMarkdown}
