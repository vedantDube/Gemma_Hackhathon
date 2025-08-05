// Environment variable injection for Vercel deployment
// This script will be called during build to inject environment variables

const fs = require("fs");
const path = require("path");

function injectEnvironmentVariables() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;

  if (!apiKey) {
    console.warn("⚠️ GOOGLE_AI_API_KEY not found in environment variables");
    return;
  }

  // Create a JavaScript file that will inject the API key
  const envScript = `
// Environment variables injected at build time
window.VERCEL_ENV_GOOGLE_AI_API_KEY = "${apiKey}";
console.log("✅ Environment variables loaded from Vercel");
`;

  // Write the environment script to the root directory (parent of scripts)
  fs.writeFileSync(path.join(__dirname, "..", "vercel-env.js"), envScript);
  console.log("✅ Environment variables injected for Vercel deployment");
}

// Run if called directly
if (require.main === module) {
  injectEnvironmentVariables();
}

module.exports = { injectEnvironmentVariables };
