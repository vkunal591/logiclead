Here’s your **clean and final `README.md`** — focused only on **project setup, installation, environment, and development instructions** (no code or component explanation).

---

# Fastpay Web Application

A responsive and modular web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **PWA support** for modern web and mobile experiences.

---

## ⚙️ System Requirements

* **Node.js:** v18 or higher
* **npm / yarn / pnpm / bun**
* **Git** installed and configured
* **VS Code** (recommended)

---

## 🚀 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vkunal591/logiclead.git
cd logiclead
```

### 2. Install Dependencies

```bash
npm install
```

## 🧠 Development Commands

### Start the Development Server

```bash
npm run dev
```

Runs the app locally on [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Run ESLint

```bash
npm run lint
```

---

## 📱 PWA (Progressive Web App) Setup

1. Ensure `manifest.json` and `service-worker.js` are present in the `public/` directory.
2. The app will automatically register the service worker on build.
3. Add the **Install Prompt** component globally to allow users to install the app on mobile or desktop.
4. Test installation using Chrome Lighthouse → PWA audit.

---

## 🧾 Folder Structure Overview

```
src/
├── app/               # Next.js App Router pages
├── components/        # Reusable UI components
├── context/           # Global Context (Auth, etc.)
├── data/              # Static data and constants
├── public/            # Static assets & PWA files
└── utils/             # Helper functions
```

---

## 🧑‍💻 Development Notes

* Use `Tailwind CSS` for styling (utility-first approach).
* Make sure environment variables are correctly configured before API testing.
* Always rebuild after environment changes using:

  ```bash
  npm run build
  ```
* Keep dependencies updated regularly with:

  ```bash
  npm update
  ```

---

## 🌍 Deployment

You can deploy easily using **Vercel**:

```bash
npm run build
vercel --prod
```

Or deploy manually on any Node.js hosting service by running:

```bash
npm start
```


## 📦 Tools Used

* **Next.js 14 (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **React Icons**
* **Auth Context API**
* **PWA Support**
* **ESLint & Prettier**

---

## 👨‍💻 Developer

**Author:** Kunal Verma
**Framework:** Next.js 14
**Environment:** Node.js + TypeScript + Tailwind
**Deployment:** Vercel

---