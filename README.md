
# Portfolio Website

An interactive and responsive portfolio showcasing my journey as a Full-Stack Web Developer, featuring projects, skills, experiences, and a contact form with real-time integrations.

![Landing Page](https://res.cloudinary.com/dbfye7vqa/image/upload/v1734545157/Screenshot_2024-12-18_at_10.35.31_PM_sluuyz.png)

<HeroSection />

---

## Features

- 🚀 **Scalable Landing Page**: Includes dynamic sections like About, Skills, Projects, Experience, and Contact.
- 📱 **Responsive Design**: Built with Tailwind CSS for seamless viewing across all devices.
- 🎨 **Interactive Animations**: Powered by `framer-motion` for smooth transitions and engaging UI interactions.
- 📂 **Project Showcase**: Projects, experience, skills and credentials are all defined in `client/src/data/content.js` — edit that one file to update the site.
- ✉️ **Contact**: Direct email, phone and social links. No backend dependency on the front end.
- 🪟 **Visual identity**: Timurid tilework palette (lapis, turquoise, saffron) with an eight-pointed *girih* star as the recurring motif.

---

## Technologies Used

### Frontend
- **React**: Component-based framework for building a responsive and interactive UI.
- **Tailwind CSS**: Utility-first CSS framework for custom, scalable styles.
- **Framer Motion**: For smooth animations and transitions.
- **React Icons**: SVG-based icons for UI design.

### Backend
- **Node.js**: Runtime for server-side JavaScript.
- **Express**: Web framework for API endpoints.
- **Nodemailer**: Email service for form submission handling.
- **Slack API**: Integration for real-time notifications.

### Database
- **MongoDB**: NoSQL database for storing project and contact data.

---

## Setup and Installation

### Prerequisites
- Node.js installed on your system.
- MongoDB instance running locally or in the cloud (e.g., MongoDB Atlas).
- A Slack webhook URL for notifications.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```
2. Install dependencies:
    ```bash
   cd portfolio
   cd client
   npm install
   cd server
   npm install
   ```
3. Set up environment variables: Create a .env file in the backend directory:
    ```bash
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
    ```
4. Start the development server:
    - Frontend:
    npm run start
    - Backend:
    node server

5. Open the app in your browser at http://localhost:3000.

### Project Structure
Client
```bash
client/
├── public/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── projects.png
│   │   └── contact.png
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
└── package.json
```
Server
```bash
server/
├── models/
│   ├── Contact.js
│   └── Project.js
├── routes/
│   └── portfolio.js
├── .env
├── .gitignore
├── server.js
└── package.json
```
