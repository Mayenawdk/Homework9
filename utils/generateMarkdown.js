// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue.svg)`;
  }
  return '';
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the project, you can contact me at [${data.email}](mailto:${data.email}). You can also view more of my projects on my [GitHub profile](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
