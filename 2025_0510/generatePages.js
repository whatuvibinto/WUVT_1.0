const fs = require("fs");
const path = require("path");

const playlists = JSON.parse(fs.readFileSync("playlists.json", "utf8"));
const template = fs.readFileSync("template.html", "utf8");

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

playlists.forEach((entry) => {
  let html = template
    .replace("{{MORNING_URL}}", entry.morning)
    .replace("{{EVENING_URL}}", entry.evening)
    .replace("{{NIGHT_URL}}", entry.night)
    .replace("{{NORMAL_URL}}", entry.normal);

  fs.writeFileSync(path.join("dist", entry.filename), html, "utf8");
  console.log(`✅ Generated ${entry.filename}`);
});
