<h1 align="center">👨‍💻 Soubhagya Kabiraj — Personal Portfolio</h1>
<img width="1901" height="862" alt="Screenshot 2026-08-20 195941" src="https://github.com/user-attachments/assets/608bb87c-278e-4513-a5e9-8e47260bc580" />

<h3 align="center">
  Full-Stack Python Developer • Django Developer • Problem Solver
</h3>

<p align="center">
  A modern, responsive personal portfolio website built with Django, HTML, CSS and JavaScript.
</p>

<p align="center">
  <a href="https://my-portfolio-2cdu.onrender.com/">
    <img src="https://img.shields.io/badge/🚀_Visit_Live_Portfolio-000000?style=for-the-badge&logo=render&logoColor=white" alt="🌐 View Live Portfolio">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.x-blue?logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Django-Framework-092E20?logo=django&logoColor=white" alt="Django">
  <img src="https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-purple?logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render&logoColor=white" alt="Render">
</p>

---

## 📋 Table of Contents

| # | Section |
| --- | --- |
| 1 | [About the Project](#-about-the-project) |
| 2 | [Features](#-features) |
| 3 | [Portfolio Preview](#-portfolio-preview) |
| 4 | [Live Demo](#-live-demo) |
| 5 | [Tech Stack](#️-tech-stack) |
| 6 | [Project Structure](#-project-structure) |
| 7 | [Run Locally](#️-run-locally) |
| 8 | [Deployment](#-deployment) |
| 9 | [Environment Variables](#-environment-variables) |
| 10 | [Author](#-author) |
| 11 | [Support](#-support) |

---

## 🚀 About the Project

This is my personal developer portfolio website, designed to showcase my **technical skills, education, projects, experience, and contact information** in a clean and responsive interface.

The portfolio is built with **Django** as the backend framework and uses **HTML, CSS, and JavaScript** for the frontend.

It is deployed as a production Django application and includes responsive layouts, project showcases, downloadable resume functionality, and organized portfolio sections.

---

## ✨ Features

- 🎨 Clean and modern responsive UI
- 🏠 Professional home/hero section
- 💡 "What I Do" section
- 👨‍💻 About Me section
- 🎓 Education section
- 🛠️ Technical Skills section
- 📂 Projects showcase
- 📄 Resume download
- 📬 Contact section
- 📱 Responsive design for different screen sizes
- ⚡ Django-powered backend
- 🌐 Production deployment

---

## 📸 Portfolio Preview

### 🏠 Home Page
<p align="center">
  <img src="https://github.com/user-attachments/assets/a92644ae-bdb9-4726-8f5c-b866b31c9a65" width="48%" alt="Home Page">
  <img src="https://github.com/user-attachments/assets/721c80d1-cda3-45bc-ac7a-88288b185c6f" width="48%" alt="Home Page - What I Do">
</p>

### 👨‍💻 About Me
<p align="center">
  <img src="https://github.com/user-attachments/assets/566e3f4f-4e50-4288-ba33-547f018cf984" width="48%" alt="About Me">
  <img src="https://github.com/user-attachments/assets/56bfd948-15ee-4b10-af96-18e8515e32ac" width="48%" alt="About Me - Education">
</p>

### 🛠️ My Skills
<p align="center">
  <img src="https://github.com/user-attachments/assets/86b4ecb7-7b6f-4544-b084-bf053d5fb98a" width="48%" alt="My Skills">
  <img src="https://github.com/user-attachments/assets/5deb7871-104f-4384-b414-6c71b06a7036" width="48%" alt="My Skills - Remaining">
</p>

### 📂 My Projects & 📬 Contact
<p align="center">
  <img src="https://github.com/user-attachments/assets/08723b7d-8522-4c11-b4aa-70ce3e690647" width="48%" alt="My Projects">
  <img src="https://github.com/user-attachments/assets/9be9935b-bf2d-4a06-b6d6-aea9493d5131" width="48%" alt="Contact Me">
</p>

---

## 🌐 Live Demo

<p align="center">
  <strong>🔗 Live URL:</strong> <a href="https://my-portfolio-2cdu.onrender.com/">https://my-portfolio-2cdu.onrender.com/</a>
</p>

---

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript, Bootstrap |
| **Backend** | Python, Django |
| **Database** | SQLite |
| **Tools & Platforms** | Git, GitHub, VS Code, Render |

---

## 📂 Project Structure

```text
My_Portfolio/
│
├── mysite/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── polls/
│   ├── views.py
│   ├── urls.py
│   ├── models.py
│   └── admin.py
│
├── static/
│   ├── CSS/
│   │   └── style.css
│   ├── image/
│   └── resume/
│
├── template/
│   └── polls/
│       ├── home.html
│       ├── about.html
│       ├── skills.html
│       ├── projects.html
│       └── contact.html
│
├── manage.py
├── requirements.txt
├── .gitignore
└── README.md
```

---

## ⚙️ Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/Soubhagya-Kabiraj/My_Portfolio.git
```

**2. Navigate into the project**

```bash
cd My_Portfolio
```

**3. Create a virtual environment**

```bash
python -m venv env
```

**4. Activate the virtual environment**

Windows:

```bash
env\Scripts\activate
```

macOS / Linux:

```bash
source env/bin/activate
```

**5. Install dependencies**

```bash
pip install -r requirements.txt
```

**6. Run migrations**

```bash
python manage.py migrate
```

**7. Start the development server**

```bash
python manage.py runserver
```

Open in your browser:

```text
http://127.0.0.1:8000/
```

---

## 📦 Deployment

The portfolio is configured for deployment as a Django web service.

**Production Build Command**

```bash
pip install -r requirements.txt && python manage.py collectstatic --no-input
```

**Production Start Command**

```bash
gunicorn mysite.wsgi:application
```

The application uses **WhiteNoise** to serve static files in production.

---

## 🔐 Environment Variables

For production deployment, sensitive configuration such as the Django secret key is stored through environment variables rather than committed directly to the repository.

```env
SECRET_KEY=your-secret-key
DEBUG=False
```

---


## 👨‍💻 Author

### Soubhagya Kabiraj

**B.Tech Computer Science & Engineering**

Interested in:

- Python Development
- Django Development
- Backend Development
- REST APIs
- Data Structures & Algorithms
- Software Development

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐.

<p align="center">
  <strong>Built with ❤️ using Python & Django</strong>
</p>
