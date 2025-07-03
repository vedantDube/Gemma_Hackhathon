"use strict";
/**
 * VoiceVision Web Server
 *
 * Simple HTTP server that serves the VoiceVision web application.
 * All AI processing happens in the browser using TensorFlow.js and Tesseract.js
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const PORT = 3000;
class VoiceVisionWebServer {
    constructor() {
        this.server = http.createServer(this.handleRequest.bind(this));
    }
    handleRequest(req, res) {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
        // Enable CORS
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        if (req.url === "/" || req.url === "/index.html") {
            this.serveFile(res, "voicevision-enhanced.html", "text/html");
        }
        else if (req.url === "/favicon.ico") {
            // Simple favicon response
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 - Not Found");
        }
    }
    serveFile(res, filename, contentType) {
        const filePath = path.join(__dirname, "..", filename);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("500 - Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        });
    }
    start() {
        this.server.listen(PORT, () => {
            console.log("🚀 VoiceVision Web Application Started!");
            console.log("==========================================");
            console.log(`🌐 Web App: http://localhost:${PORT}`);
            console.log("");
            console.log("� How to use:");
            console.log("1. Open the URL in your browser");
            console.log("2. Allow camera permissions when prompted");
            console.log("3. Click 'Start Camera & AI' to begin");
            console.log("4. Use buttons or keyboard shortcuts to interact");
            console.log("");
            console.log("🧠 AI Features:");
            console.log("   • Real object detection with TensorFlow.js");
            console.log("   • Text reading with Tesseract.js OCR");
            console.log("   • Scene analysis and description");
            console.log("   • Voice feedback with speech synthesis");
            console.log("");
            console.log("⚠️  Camera access requires HTTPS in production");
            console.log("Press Ctrl+C to stop the server");
        });
    }
    stop() {
        this.server.close(() => {
            console.log("👋 Server stopped");
        });
    }
}
// Start the web server
const server = new VoiceVisionWebServer();
server.start();
// Handle graceful shutdown
process.on("SIGINT", () => {
    console.log("\n🛑 Shutting down server...");
    server.stop();
    process.exit(0);
});
process.on("SIGTERM", () => {
    console.log("\n🛑 Shutting down server...");
    server.stop();
    process.exit(0);
});
//# sourceMappingURL=server.js.map