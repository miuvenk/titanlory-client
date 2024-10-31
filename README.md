# Frontend for Project

## Overview
This is the frontend client for the project, built with React, Redux and Tailwind CSS. It provides an interactive UI for viewing and searching the leaderboard, with dark mode support.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Features
- **Leaderboard View**: Display top players with ranking and daily change indicators
- **Dark Mode**: Switch between light and dark themes
- **Search**: Search functionality to find players quickly, with automatic scrolling to the player's position and a highlight effect for one second.
- **Real-time updates:** Real-time leaderboard updates using WebSocket.

## Tech Stack
- **React**: For building the user interface
- **Tailwind CSS**: For styling
- **Redux**: For state management
- **WebSocket:** For real-time solution
- **Notistack:** For error messages

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/miuvenk/titanlory-client

2. Navigate to the project directory:
   ```bash
   cd titanlory

3. Install dependencies:
   ```bash
   npm install

3. Configure environment variables by creating a .env file in the root directory:
   ```bash
   REACT_APP_API_URL=your_api_url

4. Run the server:
   ```bash
   npm start

## Usage

  - View the leaderboard sorted by weekly earnings.
  - Use the search bar to find players by name, which automatically scrolls to the player's position and highlights them for one second.