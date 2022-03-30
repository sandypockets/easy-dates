const fs = require('fs');

const args = process.argv.slice(2);


function writeNewDocumentation() {
  const markdownContent = `---
sidebar_label: ${args[0]}
---

# \`${args[0]}\`
???

## Usage
\`\`\`javascript
import { ${args[0]} } from 'easy-dates';

${args[0]}();
\`\`\`

## Prop types
| prop       | type   | required | default   |
|------------|--------|----------|-----------|
| \`prop\`     | \`type\` | yes      | \`null\`    |

## Examples
\`\`\`javascript
${args[0]}() // Result
\`\`\`
`;

  fs.writeFile(`docs/docs/functions/${args[0]}.md`, markdownContent, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Created docs ${args[0]}.md`);
  });
}

function writeJsFile() {
  const jsContent = `export function ${args[0]}() {
  // Do something
}
`
  fs.writeFile(`src/${args[0]}/${args[0]}.js`, jsContent, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Created ${args[0]}.js`);
  });
}

function appendFileExport() {
  const content = `
export { ${args[0]} } from "./${args[0]}/${args[0]}";`
  fs.appendFile('src/index.js', content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Appended { ${args[0]} } export to src/index.js`)
  })

}

function writeTestFile() {
  const testContent = `const { ${args[0]} } = require('../../dist');

test("", () => {
  // Test something
}); 
`
  fs.writeFile(`src/${args[0]}/${args[0]}.test.js`, testContent, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Created ${args[0]}.test.js`);
  });
}

fs.mkdir(`src/${args[0]}`, (err) => {
  if (err) {
    console.log(`Error creating folder: ${args[0]}/ -`, err);
  } else {
    console.log(`Created ${args[0]}/`);
    writeJsFile()
    writeTestFile()
    appendFileExport()
    writeNewDocumentation()
  }
});