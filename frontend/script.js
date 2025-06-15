// ✅ Initialize Fabric Canvas
const shapeColorPicker = document.getElementById("shapeColorPicker");
const brushColorPicker = document.getElementById("brushColorPicker");

const canvas = new fabric.Canvas('c', {
  isDrawingMode: false,
  selection: true,
});
console.log("✅ Canvas initialized.");

// ➕ Add Rectangle
function addRectangle() {
  const rect = new fabric.Rect({
    left: 50,
    top: 50,
    fill: shapeColorPicker.value,
    width: 100,
    height: 100,
    selectable: true,
  });
  canvas.add(rect).setActiveObject(rect);
  console.log("➕ Rectangle added.");
}

// ➕ Add Circle
function addCircle() {
  const circle = new fabric.Circle({
    radius: 50,
    fill: shapeColorPicker.value,
    left: 150,
    top: 150,
    selectable: true,
  });
  canvas.add(circle).setActiveObject(circle);
  console.log("➕ Circle added.");
}

// ➕ Add Triangle
function addTriangle() {
  const triangle = new fabric.Triangle({
    width: 100,
    height: 100,
    fill: shapeColorPicker.value,
    left: 250,
    top: 100,
    selectable: true,
  });
  canvas.add(triangle).setActiveObject(triangle);
  console.log("➕ Triangle added.");
}

// ➕ Add Line
function addLine() {
  const line = new fabric.Line([50, 100, 200, 100], {
    stroke: shapeColorPicker.value,
    strokeWidth: 3,
    selectable: true,
  });
  canvas.add(line).setActiveObject(line);
  console.log("➕ Line added.");
}

// ➕ Add Arrow
function addArrow() {
  const line = new fabric.Line([0, 0, 100, 0], {
    stroke: shapeColorPicker.value,
    strokeWidth: 3,
    selectable: false,
  });

  const triangle = new fabric.Triangle({
    width: 10,
    height: 15,
    fill: shapeColorPicker.value,
    left: 100,
    top: 0,
    originX: 'center',
    originY: 'center',
    angle: 90,
    selectable: false,
  });

  const group = new fabric.Group([line, triangle], {
    left: 200,
    top: 200,
    selectable: true,
  });

  canvas.add(group).setActiveObject(group);
  console.log("➕ Arrow added.");
}

// ➕ Add Text
function addText() {
  const text = new fabric.IText('Enter text', {
    left: 300,
    top: 200,
    fontSize: 20,
    fill: shapeColorPicker.value,
    selectable: true,
  });
  canvas.add(text).setActiveObject(text);
  console.log("📝 Text box added.");
}

// ✏️ Enable Free Draw
function enableFreeDraw() {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width = 3;
    canvas.freeDrawingBrush.color = brushColorPicker.value;
    console.log("✏️ Free drawing enabled with color:", brushColorPicker.value);
  }

// 🛑 Disable Free Draw
function disableFreeDraw() {
  canvas.isDrawingMode = false;
  console.log("🛑 Free drawing disabled.");
}

// 🧹 Clear Canvas
function clearCanvas() {
  if (confirm("Are you sure you want to clear the canvas?")) {
    canvas.clear();
    console.log("🧹 Canvas cleared.");
  }
}

// 💾 Save Drawing
function saveDrawing() {
  const json = canvas.toJSON();
  console.log("📦 Saving drawing:", json);

  fetch('http://localhost:8000/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: "my_drawing",
      elements: json
    })
  })
    .then(response => response.json())
    .then(data => {
      alert("✅ Drawing saved!");
      console.log("✅ Drawing successfully saved.");
    })
    .catch(error => {
      alert("❌ Error saving drawing: " + error);
      console.error("❌ Save failed:", error);
    });
}

// 🔁 Restore Drawing
function restoreDrawing() {
  fetch('http://localhost:8000/load')
    .then(res => res.json())
    .then(data => {
      console.log("📥 Restoring drawing:", data);
      canvas.loadFromJSON(data.elements, () => {
        canvas.renderAll();
        console.log("✅ Drawing restored to canvas.");
      });
    })
    .catch(err => {
      alert("❌ Could not restore: " + err);
      console.error("❌ Load failed:", err);
    });
}

// 🖼️ Export as PNG
function exportAsImage() {
  const dataURL = canvas.toDataURL({
    format: 'png',
    quality: 1.0,
  });

  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'drawing.png';
  link.click();

  console.log("🖼️ Exported as PNG.");
}

// 📄 Export as PDF
function exportAsPDF() {
  const dataURL = canvas.toDataURL({ format: 'png', quality: 1.0 });
  const pdf = new jsPDF('l', 'pt', [canvas.width, canvas.height]);

  pdf.addImage(dataURL, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save('drawing.pdf');

  console.log("📄 Exported as PDF.");
}

// 🌗 Toggle Dark Mode
function toggleDarkMode() {
  const htmlEl = document.documentElement;
  htmlEl.classList.toggle('dark');

  const body = document.body;
  if (htmlEl.classList.contains('dark')) {
    body.classList.replace('bg-gray-100', 'bg-gray-900');
  } else {
    body.classList.replace('bg-gray-900', 'bg-gray-100');
  }

  console.log("🌗 Dark mode toggled.");
}

// 🗑️ Delete Selected
function deleteSelected() {
  const active = canvas.getActiveObject();
  if (active) {
    canvas.remove(active);
    canvas.discardActiveObject();
    canvas.requestRenderAll();
    console.log("🗑️ Object deleted.");
  }
}

// 🔍 Zoom In/Out
let currentZoom = 1;

function zoomIn() {
  currentZoom *= 1.1;
  canvas.setZoom(currentZoom);
  console.log("🔍 Zoom In:", currentZoom);
}

function zoomOut() {
  currentZoom /= 1.1;
  canvas.setZoom(currentZoom);
  console.log("🔎 Zoom Out:", currentZoom);
}
