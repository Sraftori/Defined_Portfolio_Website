# Sraf.dev — Full-Stack Developer & Systems Administrator Portfolio

A minimalist, dark-themed developer and systems administration portfolio built for **Omar Mohamed Ahmed (`@Sraftori`)**. Engineered with semantic **HTML5**, modular **CSS3**, **Tailwind CSS**, and vanilla **JavaScript** across separated, cleanly linked files with zero build-step overhead.

---

## 📁 Project Structure

Keep all files in the root directory so relative links resolve automatically across local servers, GitHub Pages, and Vercel:

```text
sraf-portfolio/
├── index.html   # Semantic HTML5 layout, accessibility landmarks & Tailwind utility classes
├── styles.css   # Custom CSS variables, overflow-x-clip guards, RTL Arabic styling & animations
├── script.js    # Workstation console, Arabic AI preview, project filtering, modal & Scope Builder
└── README.md    # Project documentation & setup guide
```

### How the Files Connect
* **`index.html` → `styles.css`**: Linked in `<head>` via `<link rel="stylesheet" href="./styles.css" />` with zero inline `<style>` tags.
* **`index.html` → `script.js`**: Loaded at the end of `<body>` via `<script src="./script.js" defer></script>` with zero inline `<script>` blocks, binding to the DOM through semantic IDs and `data-*` attributes.

---

## ✨ Key Features

* **Interactive Workstation Console (`sraf@workstation:~`)**: Switch between `stack.json` (JavaScript, HTML5, CSS3, Tailwind CSS, React, Node.js, Express.js, MongoDB, PostgreSQL, Git & GitHub) and `sysadmin.sh` (Windows & Linux Administration, UEFI/Secure Boot, firewalls, and hardware diagnostics).
* **Flagship Showcase — Arabic AI-Integrated PC Builder (`PartSync`)**:
  * Highlights the Arabic (RTL) AI-powered PC component advisor and hardware compatibility engine built for Arab PC builders.
  * Clearly indicates its **Vercel Private Preview (Not Public Yet)** staging status without exposing private preview URLs.
  * Includes an interactive RTL Arabic preview switcher (`Cairo` typography) demonstrating hardware compatibility and bottleneck recommendations.
* **Filterable Projects & Architecture Modal**: Filter projects across **All**, **Full-Stack & React**, **AI & Backend APIs**, and **Windows & Linux Admin**, and inspect detailed engineering highlights in an accessible modal (`Esc` or backdrop click to close).
* **Technical Stack & Administration Matrix**: Three-pillar breakdown covering Frontend Engineering, Backend/Databases/VCS, and Windows & Linux Systems Administration.
* **Interactive Project Scope Builder**: Toggle between **Custom Project Request** (with selectable stack chips) and **Direct Message**, dynamically generating a formatted brief preview with one-click clipboard copy and pre-filled `mailto:` dispatch.
* **Zero Horizontal Overflow (`overflow-x-clip`)**: Engineered with `overflow-x-clip`, `min-width: 0` grid/flex guards, and `overflow-wrap: anywhere` so layouts never trigger horizontal scrolling from `360px` mobile screens to ultrawide monitors.

---

## 🛠️ Tech Stack Covered

| Domain | Technologies & Tools |
| :--- | :--- |
| **Frontend** | JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React, RTL Arabic UI (`Cairo`) |
| **Backend & Databases** | Node.js, Express.js, REST APIs, LLM/AI Integration, MongoDB, PostgreSQL |
| **Systems Administration** | Windows 10/11 & Server Admin, Linux Admin (Fedora KDE Plasma, Arch, Ubuntu), PowerShell, Bash, UEFI/Secure Boot, Hardware Diagnostics |
| **Version Control & Hosting** | Git, GitHub, Vercel |

---

## 🚀 Running Locally

Because the site uses standard HTML, CSS, and vanilla JS with Tailwind CSS via CDN, no `npm install` or bundler is required.

1. **Clone or extract the repository:**
   ```bash
   git clone https://github.com/Sraftori/sraf-portfolio.git
   cd sraf-portfolio
   ```

2. **Serve locally** (using any static server so relative paths behave identically to production):
   * **VS Code Live Server:** Right-click `index.html` and select **Open with Live Server**.
   * **Python:**
     ```bash
     python3 -m http.server 8080
     ```
   * **Node (`serve`):**
     ```bash
     npx serve .
     ```
   Then open `http://localhost:8080` (or the printed local port) in your browser.

---

## 🌐 Deployment

### Deploy to Vercel
1. Push `index.html`, `styles.css`, `script.js`, and `README.md` to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com/).
3. Leave the **Build Command** empty and set **Output Directory** to `.` (root), then click **Deploy**.

### Deploy to GitHub Pages
1. Open your repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, and click **Save**.

---

## 📬 Contact

* **Author:** Omar Mohamed Ahmed (`Sraf`)
* **Email:** [sraftori15@gmail.com](mailto:sraftori15@gmail.com)
* **GitHub:** [github.com/Sraftori](https://github.com/Sraftori)
* **Location:** Cairo, Egypt