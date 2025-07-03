# VoiceVision Real-Time Usage Guide

## 🚀 Running VoiceVision in Real-Time Mode

VoiceVision can run in real-time mode to provide actual AI assistance using your device's camera. Here are the different ways to use it:

### 📱 Method 1: Web-Based Real-Time (Recommended)

The easiest way to use VoiceVision with real camera input:

1. **Open the HTML file directly:**

   ```bash
   # Navigate to project directory
   cd c:\Users\Vedan\OneDrive\Desktop\gemma_impact

   # Open the HTML file in your browser
   start voicevision-realtime.html
   ```

2. **Or serve it with HTTP server:**

   ```bash
   npm run serve
   ```

   Then open http://localhost:3000 in your browser

3. **Browser Setup:**
   - Allow camera permissions when prompted
   - For best results, use Chrome, Firefox, or Edge
   - HTTPS is preferred for camera access (production)

### 🖥️ Method 2: Node.js Real-Time Mode

For command-line interface with keyboard shortcuts:

```bash
npm run realtime
```

**Features:**

- Real-time camera processing
- Keyboard shortcuts (D, R, O, N, V, Q)
- Voice command support
- Audio feedback

### 🎮 Interactive Controls

#### Web Interface:

- **🚀 Start Camera** - Initialize camera access
- **📷 Describe Scene** - Get detailed scene descriptions
- **📖 Read Text** - Extract and read text aloud
- **🔍 Find Objects** - Identify objects in view
- **⏹️ Stop** - Stop camera and processing

#### Keyboard Shortcuts:

- **D** - Describe current scene
- **R** - Read text in view
- **O** - Identify objects
- **N** - Navigation assistance (Node.js mode)
- **V** - Voice command (Node.js mode)
- **Q** - Quit application

### 🎯 Real-Time Features

#### Scene Description

- Analyzes the current camera view
- Provides detailed environmental descriptions
- Includes lighting and spatial context
- Audio feedback through text-to-speech

#### Text Reading (OCR)

- Detects text in camera view
- Reads signs, documents, menus aloud
- Handles various text sizes and fonts
- Provides reading suggestions

#### Object Identification

- Identifies common objects
- Provides confidence scores
- Estimates distances and locations
- Useful for "What am I holding?" queries

#### Navigation Assistance

- Detects obstacles and hazards
- Provides directional guidance
- Safety warnings with haptic feedback
- Real-time path analysis

### 🔧 Technical Requirements

#### Browser Requirements:

- Modern browser with WebRTC support
- Camera permissions enabled
- Microphone permissions (for voice commands)
- JavaScript enabled

#### System Requirements:

- Working camera (webcam or mobile camera)
- Audio output (speakers/headphones)
- Stable internet connection (for AI processing)

### 🎛️ Configuration Options

#### For Web Interface:

Edit the HTML file to customize:

- Camera resolution preferences
- Speech synthesis settings
- UI themes and layouts
- Keyboard shortcut mappings

#### For Node.js Mode:

Modify the config in `src/start-realtime.ts`:

```typescript
const config = {
  realTimeMode: true,
  autoDescribe: false, // Auto-describe scenes
  continuousMode: false, // Continuous vs interactive
  voiceActivation: true, // Voice command support
  descriptionInterval: 3, // Auto-description interval
};
```

### 🔒 Privacy & Security

- **Local Processing**: AI runs in your browser/device
- **No Data Upload**: Images stay on your device
- **Camera Control**: You control when camera is active
- **Audio Control**: You control text-to-speech output

### 🐛 Troubleshooting

#### Camera Issues:

- Check browser permissions
- Ensure no other apps are using camera
- Try refreshing the page
- Use HTTPS for better camera access

#### Audio Issues:

- Check system volume settings
- Ensure browser audio is enabled
- Try different speech synthesis voices
- Check for conflicting audio applications

#### Performance Issues:

- Close other resource-intensive applications
- Use lower camera resolution
- Clear browser cache
- Restart the application

### 📚 Usage Examples

#### Daily Tasks:

1. **Reading Mail**: Point camera at letters/documents
2. **Menu Reading**: Identify restaurant menu items
3. **Shopping**: Read product labels and prices
4. **Navigation**: Get guidance in unfamiliar spaces

#### Accessibility Features:

- High contrast UI elements
- Large, readable fonts
- Clear audio feedback
- Simple keyboard navigation
- Screen reader compatibility

### 🔄 Switching Between Modes

**Demo Mode**: `npm run demo`

- Simulated functionality
- No camera required
- Educational/presentation purposes

**Real-Time Mode**: `npm run realtime` or open HTML file

- Actual camera input
- Live AI processing
- Real-world assistance

**Development Mode**: `npm run dev`

- Development version
- Debug information
- Testing new features

### 📞 Support & Help

If you encounter issues:

1. Check this guide for troubleshooting
2. Verify system requirements
3. Try different browsers/devices
4. Restart the application
5. Check browser console for error messages

The real-time mode transforms VoiceVision from a demo into a practical accessibility tool that can genuinely assist with daily tasks!
