# 🌟 Edit Ease - Online Code Editor Platform 💻

An advanced, community-driven online code editor with support for multiple programming languages, customizable themes, and smart output handling. Built with the latest technologies for an efficient and delightful coding experience. ✨

---

## 🚀 Features 

- 🛠️ **Tech Stack**: Next.js 15, Convex, Clerk, TypeScript
- 👨‍💻 **IDE**: Multi-language support (10 languages)
- 🎨 **Themes**: 5 VSCode-inspired themes
- ✅ **Output Handling**: Clear success and error states
- 💰 **Pricing Plans**: Flexible Free & Pro options
- 🤝 **Community Sharing**: Share and collaborate on code snippets
- 🔍 **Search**: Advanced filtering & search functionality
- 👤 **User Profiles**: Execution history tracking
- 📊 **Stats Dashboard**: Comprehensive usage insights
- ⚙️ **Customizable UI**: Font size controls, themes
- 🔌 **Integration**: Webhook support
- 📚 **Deployment Guide**: Professional walkthrough

---

## 📋 Table of Contents

1. 🎥 [Demo](#demo)
2. ⚡ [Tech Stack](#tech-stack)
3. 🎬 [Getting Started](#getting-started)
4. ⚙️ [Setup Instructions](#setup-instructions)
5. 📂 [Project Structure](#project-structure)
6. 🤝 [Contribution](#contribution)
7. 📜 [License](#license)

---

## 🌐 Demo

Access the live project: [Edit Ease](https://edit-ease-two.vercel.app) 

---

## 🛠️ Tech Stack

- 🎯 **Frontend**: Next.js 15, TypeScript
- ⚡ **Backend**: Convex for serverless storage and API handling
- 🔐 **Authentication**: Clerk for user management
- 💅 **Styling**: Tailwind CSS and custom VSCode-inspired themes

---

## 🎬 Getting Started

Follow these instructions to set up the project locally. 🚀

### 1. Fork & Clone the Repository 📦

1. Fork this repository by clicking the `Fork` button at the top-right corner of this page.
2. Clone the forked repository to your local machine:

```bash
git clone https://github.com/<your-username>/edit-ease.git
cd edit-ease
```

## ⚙️ Setup Instructions

### 2. Install Dependencies 📥

Install all required dependencies with the following command:

```bash
npm install
```

### 3. Environment Variables 🔑

Create a .env.local file in the root directory and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api-key
NEXT_PUBLIC_CONVEX_URL=your-convex-instance-url
```

Replace `your-clerk-frontend-api-key` and `your-convex-instance-url` with your actual keys.

### 4. Setup Clerk 🔐

- Sign up at Clerk.dev and create a new project.
- Copy the Frontend API Key from your Clerk project and paste it into the .env.local file.

### 5. Setup Convex ⚡

- Sign up at Convex.dev and create a new project.
- Copy your instance URL from Convex and paste it into the .env.local file.

### 6. Running the Application Locally 🏃‍♂️

Start the development server:

```bash
npm run dev
```

Your application should now be running on http://localhost:3000 🎉

## 📂 Project Structure

```plaintext
edit-ease/
├── .next/                 # Next.js build output (auto-generated) 🏗️
├── convex/                # Convex API configuration and functions ⚡
├── node_modules/          # Project dependencies (auto-generated) 📦
├── public/                # Public assets like images and icons 🖼️
├── src/                   # Source code for the project 📱
│   ├── components/        # Reusable React components 🧩
│   ├── pages/             # Next.js pages 📄
│   ├── styles/            # Global and module-specific styles 💅
│   └── utils/             # Helper functions and utilities 🛠️
├── .env.local             # Environment variables (do not share publicly) 🔒
├── .gitignore             # Git ignore rules 👀
├── eslint.config.mjs      # ESLint configuration 📝
├── next-env.d.ts          # TypeScript definitions for Next.js 📋
├── next.config.ts         # Next.js configuration ⚙️
├── package.json           # Project dependencies and scripts 📦
├── package-lock.json      # Lockfile for installed dependencies 🔒
├── postcss.config.mjs     # PostCSS configuration 🎨
├── README.md              # Project documentation 📚
├── tailwind.config.ts     # Tailwind CSS configuration 🎨
└── tsconfig.json          # TypeScript configuration ⚙️
```

## 🤝 Contribution

Contributions are welcome! Please follow these steps: ✨

1. 🍴 Fork the project repository.
2. 🌿 Create a new branch: `git checkout -b feature/your-feature-name`
3. 💾 Make your changes and commit them: `git commit -m "Add your message here"`
4. 📤 Push the branch: `git push origin feature/your-feature-name`
5. 🔄 Open a pull request.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details. ⚖️

## 🎉 Happy Coding! Feel free to contribute and share your feedback! 💫
