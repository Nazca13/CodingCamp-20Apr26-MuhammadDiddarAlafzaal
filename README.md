# Productivity Dashboard

A modern, minimalist productivity dashboard built with vanilla HTML, CSS, and JavaScript. This dashboard helps you organize your day with a greeting section, focus timer, to-do list, and quick links to your favorite websites.

## Features

### Core Features (MVP)
- **Dynamic Greeting**: Displays current time, date, and personalized greeting that changes based on time of day
- **Focus Timer**: 25-minute Pomodoro timer with Start, Stop, and Reset controls
- **To-Do List**: Full CRUD operations (Create, Read, Update, Delete) with task completion tracking
- **Quick Links**: Save and access your favorite websites with custom names

### Enhanced Features
- **Light/Dark Mode**: Toggle between light and dark themes
- **Custom Name**: Personalize your greeting with your own name
- **Duplicate Prevention**: Prevents adding duplicate tasks to keep your list clean
- **Task Sorting**: Sort tasks by creation order, alphabetically, or by completion status
- **Custom Timer Duration**: Set timer duration between 1-60 minutes
- **Data Persistence**: All data is saved to browser Local Storage

## Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **Local Storage API**: Client-side data persistence

## File Structure

```
productivity-dashboard/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Single CSS file with all styles
├── js/
│   └── app.js          # Single JavaScript file with all functionality
└── README.md           # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start using the dashboard immediately - no installation required!

## Usage

### Greeting Section
- View current time and date
- Click "Edit Name" to personalize your greeting
- Greeting message changes based on time of day (Morning/Afternoon/Evening)

### Focus Timer
- Default 25-minute Pomodoro timer
- Use Start/Stop/Reset buttons to control the timer
- Set custom duration (1-60 minutes) using the input field
- Receive notifications when timer completes

### To-Do List
- Add new tasks using the input field
- Click checkbox or task text to mark as complete
- Double-click task text or click "Edit" to modify tasks
- Click "Delete" to remove tasks
- Sort tasks using the dropdown menu
- Duplicate tasks are automatically prevented

### Quick Links
- Add favorite websites with custom names
- Click links to open in new tab
- Hover over links to see delete button
- All links are saved automatically

### Theme Switcher
- Click the moon/sun icon in top-right corner
- Toggle between light and dark modes
- Theme preference is saved automatically

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6+ support and Local Storage

## Data Storage

All data is stored locally in your browser using the Local Storage API:
- Custom name and preferences
- Timer duration settings
- All tasks and their completion status
- Quick links and their URLs
- Theme preference
- Sort order preference

**Note**: Data is tied to your browser and domain. Clearing browser data will reset the dashboard.

## Features in Detail

### Responsive Design
- Mobile-friendly layout
- Adapts to different screen sizes
- Touch-friendly interface on mobile devices

### Accessibility
- Keyboard navigation support
- Semantic HTML structure
- High contrast colors
- Screen reader friendly

### Performance
- Lightweight (~50KB total)
- Fast loading times
- Smooth animations
- Efficient Local Storage usage

## Customization

The dashboard uses CSS variables for easy customization. You can modify colors, spacing, and other design elements by editing the CSS variables in `styles.css`.

## Contributing

This is a learning project built with vanilla web technologies. Feel free to fork and modify for your own use!

## License

This project is open source and available under the MIT License.