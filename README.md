# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Node.js. Features a beautiful UI with animations, contact form functionality, and a backend server for handling email communications.

## 🚀 Features

- **Modern React with TypeScript**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Mobile-first approach with Bootstrap and custom CSS
- **Smooth Animations**: Framer Motion and custom animations for engaging user experience
- **Contact Form**: Backend integration with email functionality
- **3D Graphics**: Three.js integration for interactive elements
- **Font Awesome Icons**: Comprehensive icon library
- **ESLint Configuration**: Proper linting setup for code quality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🛠️ Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/rajat6235/portfolio.git
cd portfolio
```

### Step 2: Install Root Dependencies
```bash
npm install
```

### Step 3: Install React App Dependencies
```bash
cd myportfolio
npm install
```

### Step 4: Resolve Dependency Conflicts
Due to peer dependency conflicts with React 18 and some older packages, run:
```bash
npm install --legacy-peer-deps
```

### Step 5: Environment Configuration
Create a `.env` file in the root directory:
```bash
cd ..
touch .env
```

Add the following environment variables to your `.env` file:
```env
# Server Configuration
PORT=6000
NODE_ENV=development

# Email Configuration (if using contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_SERVICE=gmail
```

**Note**: For Gmail, you'll need to use an App Password instead of your regular password. Enable 2-factor authentication and generate an App Password in your Google Account settings.

### Step 6: Start the Development Server
From the root directory, run:
```bash
npm run dev
```

This command will start both:
- **Backend server** on port 6000
- **React development server** on port 3000

## 🌐 Accessing the Application

Once the servers are running, you can access:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:6000

## 📁 Project Structure

```
portfolio/
├── myportfolio/          # React frontend application
│   ├── src/
│   │   ├── Container/    # React components
│   │   ├── assets/       # Images, fonts, and static files
│   │   └── utilities/    # Utility functions and services
│   ├── public/           # Public assets
│   └── package.json      # Frontend dependencies
├── route/                # Backend routes
├── backend/              # Backend files
├── server.js             # Express server
├── package.json          # Root dependencies
└── README.md            # This file
```

## 🚀 Available Scripts

### Root Directory Scripts
- `npm run dev` - Start both frontend and backend servers
- `npm run server` - Start only the backend server
- `npm run myportfolio` - Start only the React development server

### React App Scripts (in myportfolio directory)
- `npm start` - Start the React development server
- `npm run build` - Build the app for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🔧 Troubleshooting

### Port 3000 Already in Use
If you encounter a port conflict, you can:
1. Stop the existing process: `pkill -f "react-scripts start"`
2. Or use a different port: `PORT=3001 npm start`

### Dependency Installation Issues
If you encounter peer dependency warnings:
```bash
cd myportfolio
npm install --legacy-peer-deps
```

### ESLint Errors
The project includes TypeScript ESLint configuration. If you see TypeScript-related errors:
1. Ensure TypeScript is installed: `npm install typescript`
2. Restart your development server
3. Clear ESLint cache if needed

### Email Configuration Issues
If the contact form isn't working:
1. Verify your `.env` file has correct email credentials
2. For Gmail, ensure you're using an App Password, not your regular password
3. Check that 2-factor authentication is enabled on your Google account

## 🛠️ Development

### Adding New Components
1. Create your component in `myportfolio/src/Container/`
2. Follow the existing TypeScript patterns
3. Add proper ESLint configuration if needed

### Styling
- Use CSS modules or regular CSS files
- Follow the existing naming conventions
- Bootstrap classes are available for responsive design

### Backend API
- Add new routes in the `route/` directory
- Follow the existing Express.js patterns
- Test API endpoints using tools like Postman

## 📦 Deployment

### Production Build
```bash
cd myportfolio
npm run build
```

### Heroku Deployment
The project includes Heroku configuration. The `heroku-postbuild` script will automatically build the React app for production.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Rajat Gupta**
- GitHub: [@rajat6235](https://github.com/rajat6235)

## 🐛 Issues

If you encounter any issues, please:
1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed information about your problem

---

**Happy Coding! 🎉**
