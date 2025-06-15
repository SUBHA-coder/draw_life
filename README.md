# 🖊️ Drawing Board Web App

A modern, browser-based drawing board built using **HTML**, **Tailwind CSS**, **JavaScript**, and **Fabric.js**, featuring dark mode, drawing tools, shape tools, and export options.

---

## 🚀 Live Demo

Coming Soon! (You can deploy using GitHub Pages / Netlify / Vercel)

---

## 🎯 Features

- ✅ Draw rectangles, circles, triangles, arrows, and lines
- ✅ Add and edit text
- ✅ Freehand drawing with color picker
- ✅ Export your canvas to **PNG** or **PDF**
- ✅ Save/restore canvas to/from backend (FastAPI supported)
- ✅ Toggle between light/dark mode
- ✅ Zoom In/Out support
- ✅ Delete selected object
- ✅ Clear entire canvas

---

## 🧰 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | HTML, Tailwind CSS, JavaScript |
| Drawing Engine | [Fabric.js](http://fabricjs.com/) v5.3.0 |
| Export PDF   | jsPDF CDN |
| Backend (Optional) | FastAPI (for Save/Load functionality) |

---

## 🛠️ Getting Started

### 🔧 Requirements

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Python 3.10+ and FastAPI for backend

### 💡 Run Locally

1. Clone or download this repo
2. Open `index.html` in your browser
3. (Optional) Run backend if save/load is required:
   ```bash
   uvicorn main:app --reload
🖼️ Screenshots
Replace these with your actual screenshots



📦 Project Structure
bash
Copy
Edit
drawing-board/
│
├── index.html         # Main HTML
├── script.js          # JS functionality
├── style.css (optional)
├── main.py            # (Optional) FastAPI backend
├── README.md
🔮 Future Enhancements
Here are some awesome features planned for future versions:

🖌️ Drawing Tools
 Eraser Tool

 Change line width & opacity

 Highlighter mode

🌐 Realtime Collaboration
 WebSocket-based collaboration (e.g., using Socket.IO or FastAPI WebSockets)

🎨 UI Improvements
 Minimap/Layer panel

 Shape resize handles with keyboard arrow nudging

 Custom fonts for text

💾 Save Improvements
 Save drawing to localStorage

 Export/Import .json canvas data manually

 Cloud save integration (Firebase/GDrive)

📱 PWA & Mobile
 Make it a Progressive Web App (PWA)

 Touch drawing support and mobile responsiveness

👨‍💻 Author
Subhadip Das
B.Tech CSE, KIIT Bhubaneswar
📧 subhadipdas713151@gmail.com

📝 License
This project is open-source and free to use under the MIT License.

yaml
Copy
Edit

---

Let me know if you want:

- 🧪 A `main.py` FastAPI backend stub for save/load
- 🌐 A hosted demo setup
- 📱 PWA manifest & service worker

I can also generate badges (like GitHub stars, MIT license, etc.) if you're pushing this to GitHub.
