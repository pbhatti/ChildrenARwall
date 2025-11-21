# WebAR Image Tracking Application

A WebAR application that uses MindAR.js to track images in the real world and display a 3D cube anchored on the detected image.

## Features

- 📱 Mobile browser compatible (Chrome/Safari)
- 🎯 Image tracking using MindAR.js
- 🎲 3D cube with rotation animation
- ✨ Real-time AR experience

## Tech Stack

- **MindAR.js** - Image tracking and AR pipeline
- **A-Frame** - 3D rendering framework
- **HTML5** - Frontend structure

## Setup Instructions

### 1. Generate the Image Target File

You need to create a `targets.mind` file from your reference image. You have two options:

#### Option A: Using MindAR Web Tool (Easiest)
1. Visit: https://hiukim.github.io/mind-ar-js-doc/tools/compile/
2. Upload your target image (JPG/PNG)
3. Download the generated `targets.mind` file
4. Place it in the project root directory

#### Option B: Using MindAR CLI
```bash
# Install MindAR CLI (requires Node.js)
npm install -g mind-ar

# Generate targets.mind from your image
mind-ar image-targets --input your-image.jpg --output targets.mind
```

### 2. Prepare Your Target Image

- Use a high-contrast image (logos, posters, artwork work best)
- Image should be at least 512x512 pixels
- Avoid images with repetitive patterns
- Good examples: company logos, movie posters, book covers, artwork

### 3. Host Over HTTPS

**Important:** Mobile browsers require HTTPS for camera access. You have several options:

#### Option A: Local HTTPS Development (using Node.js)
```bash
# Install a simple HTTPS server
npm install -g local-ssl-proxy

# Run with HTTPS (replace 3000 with your desired port)
local-ssl-proxy --source 3001 --target 3000
# Then serve your files on port 3000
python3 -m http.server 3000
```

#### Option B: Using Vite (Recommended for development)
```bash
# Install Vite
npm install -g vite

# Run with HTTPS
vite --https
```

#### Option C: Deploy to a Hosting Service
- **Netlify** - Drag and drop your folder
- **Vercel** - Connect your GitHub repo
- **GitHub Pages** - Free hosting (requires HTTPS)
- **Any web hosting** with SSL certificate

### 4. Access on Mobile

1. Make sure your phone and computer are on the same network (for local dev)
2. Find your computer's IP address:
   - Mac/Linux: `ifconfig | grep "inet "`
   - Windows: `ipconfig`
3. Open on mobile browser: `https://YOUR_IP:PORT/index.html`
4. Grant camera permissions when prompted
5. Point camera at your target image
6. The 3D cube should appear!

## File Structure

```
.
├── index.html          # Main HTML file with AR scene
├── targets.mind        # Image target file (you need to generate this)
└── README.md          # This file
```

## Customization

### Change the 3D Object

Replace the `<a-box>` element in `index.html` with:

**GLB/GLTF Model:**
```html
<a-gltf-model 
    src="./assets/model.glb" 
    position="0 0.1 0" 
    scale="0.5 0.5 0.5"
    rotation="0 0 0">
</a-gltf-model>
```

**Other A-Frame Primitives:**
- `<a-sphere>` - Sphere
- `<a-cylinder>` - Cylinder
- `<a-torus>` - Torus
- `<a-cone>` - Cone

### Adjust Cube Properties

Edit the `<a-box>` element:
- `position="0 0.1 0"` - Position relative to image (x, y, z)
- `scale="0.2 0.2 0.2"` - Size of the cube
- `color="#4CC3D9"` - Color (hex code)
- `rotation="0 45 0"` - Initial rotation

### Change Animation

Modify the `animation` attribute:
```html
animation="property: rotation; to: 0 405 0; loop: true; dur: 3000; easing: linear"
```

## Troubleshooting

### Camera Not Working
- Ensure you're using HTTPS
- Check browser permissions for camera access
- Try a different browser (Chrome or Safari recommended)

### Image Not Detecting
- Ensure `targets.mind` file is in the correct location
- Check that your target image has good contrast
- Make sure lighting is adequate
- Hold the image steady and at a good distance

### 3D Object Not Appearing
- Check browser console for errors (F12)
- Verify the `targets.mind` file is loaded correctly
- Ensure the image target matches your reference image

## Browser Compatibility

- ✅ Chrome (Android/iOS) - Recommended
- ✅ Safari (iOS) - Recommended
- ⚠️ Firefox - Limited support
- ❌ Desktop browsers - Camera access limited

## Resources

- [MindAR Documentation](https://hiukim.github.io/mind-ar-js-doc/)
- [A-Frame Documentation](https://aframe.io/docs/)
- [MindAR Image Target Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile/)

## License

MIT License - Feel free to use this project for your own purposes.

