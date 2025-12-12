# Wedfinity Frontend - Wedding Platform

A modern, responsive wedding platform frontend built with React + Vite + Tailwind CSS.

## Features
- Wedding vendor showcase
- Service packages display
- Responsive design
- Modern UI/UX
- Smooth animations

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/KODAVATISANJAY/wedfinity_frontend.git
cd wedfinity_frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 5. Build for Production
```bash
npm run build
```

## Project Structure

```
wedfinity_frontend/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── VendorCard.jsx
│   │   └── ServiceCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Vendors.jsx
│   │   └── Services.jsx
│   ├── data/
│   │   └── weddingData.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Next Steps

1. Add remaining component files
2. Create data files with wedding vendor/service information
3. Setup routing with React Router
4. Connect to backend API
5. Deploy to Vercel

## Deployment

The application is ready to be deployed to Vercel. Connect your GitHub repository to Vercel and it will automatically build and deploy on push.
