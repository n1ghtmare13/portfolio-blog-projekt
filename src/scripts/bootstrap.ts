// src/scripts/bootstrap.ts

// This function will handle the initialization of Bootstrap's JavaScript components.
function initializeBootstrap() {
  // We use a dynamic import here. This tells the bundler to load the Bootstrap JS
  // code only when this function is actually called.
  import("bootstrap/dist/js/bootstrap.bundle.min.js");
}

// 1. Run the initialization on the very first page load.
initializeBootstrap();

// 2. Listen for Astro's specific 'page-load' event.
//    This event is fired by the <ClientRouter /> after every page transition.
//    We then re-run our initialization function to make sure Bootstrap components
//    (like the navbar toggler) work on the new page.
document.addEventListener("astro:page-load", initializeBootstrap);
