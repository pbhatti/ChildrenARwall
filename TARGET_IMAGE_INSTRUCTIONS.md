# Target Image Instructions

## How to Generate targets.mind

The `targets.mind` file is required for image tracking. This file contains the compiled image target data that MindAR uses to recognize your reference image.

### Step-by-Step Guide

1. **Prepare Your Target Image**
   - Choose a high-contrast image (logo, poster, artwork, etc.)
   - Recommended size: 512x512 pixels or larger
   - Format: JPG or PNG
   - Avoid: Repetitive patterns, low contrast images

2. **Generate targets.mind**

   **Option 1: Online Tool (Easiest)**
   - Go to: https://hiukim.github.io/mind-ar-js-doc/tools/compile/
   - Click "Choose File" and select your image
   - Click "Compile"
   - Download the generated `targets.mind` file
   - Place it in this project directory (same folder as index.html)

   **Option 2: Command Line**
   ```bash
   npm install -g mind-ar
   mind-ar image-targets --input your-image.jpg --output targets.mind
   ```

3. **Test Your Target**
   - Print or display your reference image on a screen
   - Open the WebAR app on your mobile device
   - Point the camera at the image
   - The 3D cube should appear when the image is detected

### Example Target Images

Good examples:
- Company logos
- Movie posters
- Book covers
- Artwork with distinct features
- QR codes (though MindAR is optimized for natural images)

### Tips

- **Lighting**: Ensure good lighting when scanning
- **Distance**: Hold the image 20-50cm from the camera
- **Stability**: Keep the image steady for better tracking
- **Size**: Larger printed images work better than small screens

### Troubleshooting

If the image isn't being detected:
- Try regenerating `targets.mind` with a higher quality image
- Ensure the image has good contrast
- Check that lighting is adequate
- Make sure you're using the exact same image that was used to generate `targets.mind`

