// main.js - Project entry point

// --- Imports ---
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { marked } from "marked";
import "./style.css";

// --- Blog Rendering Engine ---

// 1. Get the container element from the DOM
const blogContainer = document.getElementById("blog-container");

// 2. Use Vite's glob import to get all markdown files
const postModules = import.meta.glob("./posts/*.md", { as: "raw" });

// 3. Check if the container exists to avoid errors
if (blogContainer) {
  // 4. Loop through the imported modules
  for (const path in postModules) {
    postModules[path]().then((markdownContent) => {
      // Parse the markdown content to HTML
      const htmlContent = marked(markdownContent);

      // Create a wrapper for the post to apply grid styling
      const postWrapper = document.createElement("div");
      postWrapper.classList.add("col-md-6", "mb-4"); // Bootstrap grid column

      // Create the article element
      const postElement = document.createElement("article");
      postElement.classList.add("card", "h-100");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = htmlContent;

      // Assemble the elements and append to the container
      postElement.appendChild(cardBody);
      postWrapper.appendChild(postElement);
      blogContainer.appendChild(postWrapper);
    });
  }
}
