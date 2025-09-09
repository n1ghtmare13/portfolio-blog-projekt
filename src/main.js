// main.js - Project entry point

// --- Imports ---
// Import Bootstrap for styling and components
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Markdown parser and HTML sanitizer
import { marked } from "marked";
import DOMPurify from "dompurify";

// Import custom styles
import "./style.css";

// --- Blog Rendering Engine ---

// 1. Get the container element from the DOM where posts will be rendered.
const blogContainer = document.getElementById("blog-container");

// 2. Use Vite's glob import to dynamically get all markdown files from the posts directory.
//    The content is imported as raw text.
const postModules = import.meta.glob("./posts/*.md", { as: "raw" });

// 3. Check if the blog container exists on the page to prevent errors.
if (blogContainer) {
  // 4. Loop through the object of imported post modules.
  for (const path in postModules) {
    postModules[path]().then((markdownContent) => {
      // Step 4.1: Parse the raw Markdown content into a raw HTML string.
      const rawHtml = marked.parse(markdownContent);

      // Step 4.2: Sanitize the raw HTML to prevent XSS attacks.
      //           DOMPurify removes any potentially malicious code (like <script> tags)
      //           while keeping safe formatting. This is a critical security step.
      const cleanHtml = DOMPurify.sanitize(rawHtml);

      // Step 4.3: Create the necessary DOM elements to display the post as a Bootstrap card.
      const postWrapper = document.createElement("div");
      postWrapper.classList.add("col-md-6", "mb-4"); // Bootstrap grid column

      const postElement = document.createElement("article");
      postElement.classList.add("card", "h-100");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = cleanHtml; // Use the sanitized HTML here.

      // Step 4.4: Assemble the elements and append the final post to the container.
      postElement.appendChild(cardBody);
      postWrapper.appendChild(postElement);
      blogContainer.appendChild(postWrapper);
    });
  }
}
