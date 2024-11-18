const fs = require("fs");
const { globSync } = require('glob');
const path = require('path');

function copyFiles(pattern, destination) {
  const files = globSync(pattern);
  console.log(`Files matched by pattern "${pattern}":`, files); // Log matched files

  files.forEach((file) => {
    const fileName = path.basename(file);
    const destinationPath = path.join(destination, fileName);

    console.log(`Copying file: '${file}' to '${destinationPath}'`);

    for (let i = 1; i < 3; i++) {
      try {
        fs.copyFileSync(file, destinationPath);
        console.log(`Copied '${file}' -> '${destinationPath}'`);
        break; // Break out of the retry loop on success
      } catch (e) {
        if (e.code === "ENOENT") {
          const parent = path.dirname(destinationPath);
          console.log(`Creating directory: '${parent}'`);
          fs.mkdirSync(parent, { recursive: true });
          continue;
        } else {
          console.error(`Failed to copy file '${file}':`, e);
          break;
        }
      }
    }
  });
}

// Ensure destination directory exists
fs.mkdirSync("./dist", { recursive: true });
console.log("Created destination directory: './dist'");

// Call the copyFiles function
copyFiles("/Users/bhavyabatta/Projects/Typescript/weather-app/src/assests/static/icons/*.svg", "dist/static/img/");