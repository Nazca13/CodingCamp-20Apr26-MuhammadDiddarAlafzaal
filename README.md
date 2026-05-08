# To-Do List Life Dashboard

A simple and clean productivity dashboard built with vanilla HTML, CSS, and JavaScript. This dashboard helps you organize your day with a greeting section, focus timer, to-do list, and quick links to your favorite websites.

## 📋 Project Overview

This project is part of a 5-day coding course assignment to build a web application from start to finish. The dashboard provides essential productivity tools in a clean, minimalist interface with a blue and white color scheme.

## ✨ Features

### Required Features (MVP)
- **Greeting Section**: 
  - Displays current time and date
  - Shows dynamic greeting based on time of day (Good Morning/Afternoon/Evening)
  - Custom name personalization

- **Focus Timer**: 
  - 25-minute Pomodoro timer by default
  - Start, Stop, and Reset controls
  - Customizable timer duration (1-60 minutes)

- **To-Do List**: 
  - Add new tasks
  - Edit existing tasks (double-click or click Edit button)
  - Mark tasks as complete
  - Delete tasks
  - All tasks saved to Local Storage

- **Quick Links**: 
  - Add favorite website links with custom names
  - Quick access buttons to open websites in new tab
  - Links saved to Local Storage

### Additional Features (3 Challenges Implemented)
1. **Light/Dark Mode**: Toggle between light and dark themes
2. **Custom Name in Greeting**: Personalize your greeting message
3. **Prevent Duplicate Tasks**: Automatically prevents adding duplicate tasks (case-insensitive)

### Bonus Features
- **Task Sorting**: Sort tasks by creation order, alphabetically, or by completion status
- **Custom Timer Duration**: Set any duration between 1-60 minutes
- **Data Persistence**: All data automatically saved to browser Local Storage

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Simple styling with CSS Variables for theming
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **Local Storage API**: Client-side data persistence

## 📁 File Structure

```
To-Do-List-Life-Dashboard/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Single CSS file (as per requirements)
├── js/
│   └── app.js          # Single JavaScript file (as per requirements)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, or Safari)
- No installation or setup required!

### How to Use
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start using the dashboard immediately

### Deployment
This project can be deployed using GitHub Pages:
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select your branch and save
4. Your dashboard will be live!

## 📖 Usage Guide

### Greeting Section
- The time updates automatically every second
- Click "Edit Name" to set your custom name
- Greeting changes automatically: Morning (00:00-11:59), Afternoon (12:00-17:59), Evening (18:00-23:59)

### Focus Timer
- Click "Start" to begin the countdown
- Click "Stop" to pause the timer
- Click "Reset" to return to initial duration
- Enter a number (1-60) and click "Set Duration" to customize timer length
- Browser notification appears when timer completes (if permission granted)

### To-Do List
- Type your task and click "Add" or press Enter
- Click the checkbox to mark tasks as complete
- Double-click task text or click "Edit" to modify
- Click "Delete" to remove a task
- Use the dropdown to sort tasks
- Duplicate tasks are automatically prevented

### Quick Links
- Enter link name and URL
- Click "Add Link" or press Enter
- Click link button to open website in new tab
- Hover over link and click "×" to delete

### Theme Switcher
- Click the moon/sun icon in the top-right corner
- Toggle between light and dark modes
- Your preference is saved automatically

## 💾 Data Storage

All data is stored locally in your browser using Local Storage:
- Custom name
- Timer duration preference
- All tasks and completion status
- Quick links
- Theme preference
- Task sort order

**Note**: Data is browser-specific. Clearing browser data will reset the dashboard.

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop computers (optimal experience)
- Tablets (2-column layout)
- Mobile phones (single-column layout)

## 🎨 Design

- **Color Scheme**: Simple blue and white theme
- **Typography**: System fonts for fast loading
- **Layout**: Clean, minimal interface with clear visual hierarchy
- **Interactions**: Smooth transitions and hover effects

## ⚡ Performance

- Lightweight: ~50KB total size
- Fast load time: No external dependencies
- Efficient: Minimal DOM manipulation
- Smooth: Optimized animations and transitions

## 🔧 Technical Constraints Met

✅ **TC-1**: HTML, CSS, Vanilla JavaScript only (no frameworks)  
✅ **TC-2**: Browser Local Storage API for data persistence  
✅ **TC-3**: Compatible with modern browsers  
✅ **NFR-1**: Clean, minimal, easy-to-use interface  
✅ **NFR-2**: Fast load time and responsive interactions  
✅ **NFR-3**: User-friendly aesthetic with clear hierarchy  

## 📝 Code Quality

- Clean, well-commented code
- Modular component structure
- Consistent naming conventions
- Error handling for edge cases
- Input validation for user data

## 🐛 Known Limitations

- Data is stored locally (not synced across devices)
- Browser notification requires user permission
- Local Storage has size limits (~5-10MB depending on browser)

## 🤝 Contributing

This is a learning project. Feel free to fork and modify for your own use!

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ as part of the Coding Camp course**# CodingCamp-04May26-Muhammad-Diddar-Al-Afzaal
