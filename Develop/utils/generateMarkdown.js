// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
      return '';
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
      return '';
  }
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://opensource.org/licenses/GPL-3.0';
    // Add more licenses as needed.
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. Read more about it [here](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![Technologies Used](https://img.shields.io/badge/Technologies-${data.technologies.join('%20')}-blue)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [Author](#author)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

![Application Image](${data.imageLink})

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Video
[Walkthrough Video](${data.videoLink})

## Author
- **${data.author}**
- [LinkedIn](${data.linkedin})
- [GitHub](${data.github})
- [Portfolio](${data.portfolio})

## Contributing
${data.contributing}

## Credits
${data.credits}

## Questions
For any additional questions, you can reach out to me at [${data.email}](mailto:${data.email}).

- [LinkedIn](${data.linkedin})
- [GitHub](${data.github})
- [Portfolio](${data.portfolio})

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

  `;
}

module.exports = generateMarkdown;
