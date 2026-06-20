# Day 20 - AI Face Puzzle Game

## Challenge

Build a complete Face Puzzle Game using Claude AI that captures a user's photo through the webcam and converts it into an interactive puzzle game.

## Project Overview

This project demonstrates how Claude can generate a complete browser-based application including:

* Webcam access using MediaDevices API
* Image capture and processing
* Puzzle piece generation
* Drag-and-drop gameplay
* Touch support for mobile devices
* Timer and move tracking
* Local leaderboard using browser storage
* Responsive UI design

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Canvas API
* MediaDevices API
* LocalStorage API

## Features

### Camera Module

* Live webcam preview
* Front camera support
* Photo capture functionality
* Camera permission handling
* Retake photo option

### Puzzle Engine

* 3×3 Difficulty
* 4×4 Difficulty
* 5×5 Difficulty
* Randomized solvable puzzles
* Piece position validation

### Gameplay

* Drag-and-drop support
* Mobile touch support
* Piece swapping
* Correct placement indicators
* Real-time completion tracking

### Statistics

* Live timer
* Move counter
* Correct pieces counter
* Completion summary

### Leaderboard

* Top 5 best scores
* Difficulty tracking
* Completion date
* Persistent browser storage

---

## Key Learnings

### 1. Browser Camera APIs

Learned how getUserMedia() provides direct webcam access from the browser.

### 2. Canvas Image Processing

Learned how images can be sliced into puzzle pieces using the Canvas API.

### 3. Drag and Touch Events

Implemented responsive controls that work seamlessly across desktop and mobile devices.

### 4. Local Storage

Stored and retrieved leaderboard data using localStorage.

### 5. AI-Assisted Development

Observed how Claude can generate complete applications with minimal manual coding effort.

---



## Conclusion

This project showcased how AI can significantly accelerate software development by generating a complete interactive browser application. The Face Puzzle Game combines computer vision concepts, image processing, browser APIs, and game mechanics into a fun and engaging user experience.

#60DayClaudeChallenge
