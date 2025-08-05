// Configuration file for VoiceVision
// This file contains environment-specific configuration

class VoiceVisionConfig {
  constructor() {
    // Load configuration from environment or defaults
    this.config = {
      // Google AI API Key - should be loaded from environment variables
      GOOGLE_AI_API_KEY: this.loadFromEnv("GOOGLE_AI_API_KEY") || "",

      // Development settings
      NODE_ENV: this.loadFromEnv("NODE_ENV") || "development",
      DEBUG_MODE: this.loadFromEnv("DEBUG_MODE") === "true",

      // Model settings
      AI_MODEL: "gemini-1.5-flash",
      AI_TEMPERATURE: 0.7,
      AI_MAX_TOKENS: 1024,

      // Application settings
      SPEECH_RATE: 0.9,
      SPEECH_VOLUME: 0.8,
      GESTURE_THRESHOLD: 30,
    };

    this.validateConfig();
  }

  loadFromEnv(key) {
    // In a browser environment, we can't directly access process.env
    // This method can be overridden by a build process or environment setup

    // Check if environment variables are available (e.g., through webpack or similar)
    if (typeof process !== "undefined" && process.env) {
      return process.env[key];
    }

    // Check for global variables set by environment loading scripts
    if (typeof window !== "undefined" && window.ENV) {
      return window.ENV[key];
    }

    return null;
  }

  validateConfig() {
    const required = ["GOOGLE_AI_API_KEY"];
    const missing = required.filter((key) => !this.config[key]);

    if (missing.length > 0) {
      console.warn("⚠️ Missing required configuration:", missing.join(", "));
      console.warn("Please ensure all required environment variables are set.");

      if (this.config.NODE_ENV === "development") {
        console.info("💡 Running in development mode");
        console.info("Please check your .env file and ensure it contains:");
        missing.forEach((key) => console.info(`   ${key}=your_value_here`));
      }
    } else {
      console.log("✅ VoiceVision configuration loaded successfully");
    }
  }

  get(key) {
    return this.config[key];
  }

  getGoogleAIKey() {
    const key = this.get("GOOGLE_AI_API_KEY");
    if (!key) {
      throw new Error(
        "Google AI API key not configured.\n" +
          "Please set GOOGLE_AI_API_KEY in your .env file or environment variables."
      );
    }
    return key;
  }

  isDevelopment() {
    return this.get("NODE_ENV") === "development";
  }

  isDebugMode() {
    return this.get("DEBUG_MODE") === true;
  }
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = VoiceVisionConfig;
} else {
  window.VoiceVisionConfig = VoiceVisionConfig;
}
