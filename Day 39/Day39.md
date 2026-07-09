# Day 39 – PDF Splitter & Merger

## Overview

Today I built a **PDF Splitter & Merger** using Claude AI. The application is a modern single-page HTML application that performs PDF processing entirely within the browser using client-side JavaScript, ensuring user privacy and offline functionality after the initial load.

---

## Prompt Used

```
You are an expert UI/UX designer, frontend developer, document processing specialist, and JavaScript engineer.

Before generating anything, ask the user the following question.

1. Would you like Claude to automatically design the application, or would you like to customize its features?

If the user chooses customization, ask which additional PDF features they would like included.

After collecting the response, generate a premium single-page interactive HTML application called 'PDF Splitter & Merger'.

The application should provide two primary tools:

PDF Splitter:
Allow users to upload a PDF and automatically detect the total number of pages. Display visual page thumbnails for every page and allow users to preview the document before splitting. Users should be able to split the PDF by entering page numbers, selecting custom page ranges, splitting after specific pages, splitting every N pages, or extracting selected pages into one or more new PDF files. Allow users to create multiple split ranges in a single operation, validate all page ranges, preview the resulting document structure before processing, and clearly highlight invalid inputs.

PDF Merger:
Allow users to upload multiple PDF files using drag-and-drop or file selection. Display all uploaded files in a sortable list with page counts and visual previews. Users should be able to reorder the PDFs using drag-and-drop before merging. Display the total number of files, total page count, and estimated output before generating the merged document. Generate the merged PDF and provide an easy download option.

Perform all PDF processing entirely within the browser using client-side JavaScript. Do not upload files to external servers or rely on backend services. Use reliable browser-compatible libraries where necessary and ensure the application continues to work offline after the initial page load.

Include drag-and-drop uploads, processing indicators, loading animations, responsive layouts, dark mode, accessibility features, intuitive error handling, keyboard shortcuts where appropriate, and smooth micro-interactions throughout the application.

Generate everything as a single self-contained HTML file using HTML, CSS, and JavaScript only.

Design the interface as a polished commercial application comparable to professional PDF utilities, with exceptional UI/UX, beautiful typography, modern layouts, smooth animations, intuitive navigation, and an experience users would genuinely choose over existing online PDF tools.
```

## Features Implemented

### PDF Splitter

* Upload PDF files
* Automatic page count detection
* Page thumbnail previews
* Split by:

  * Individual page numbers
  * Custom page ranges
  * Split after selected pages
  * Every N pages
  * Multiple ranges in a single operation
* Input validation
* Preview output before processing
* Download generated PDFs

### PDF Merger

* Drag-and-drop file upload
* Multiple PDF selection
* File previews
* Drag-and-drop reordering
* Display total files and page count
* Merge PDFs into a single document
* Download merged PDF

### User Experience

* Responsive commercial-style UI
* Dark Mode
* Smooth animations
* Loading indicators
* Error handling
* Accessibility improvements
* Keyboard-friendly interactions

---


# Key Learnings

* Learned how modern PDF processing can be performed completely on the client side.
* Understood how drag-and-drop workflows improve usability.
* Explored browser-compatible PDF libraries.
* Practiced designing productivity applications with polished UI/UX.
* Learned how AI can rapidly generate production-quality frontend applications.
* Improved understanding of responsive layouts, accessibility, and micro-interactions.

---
