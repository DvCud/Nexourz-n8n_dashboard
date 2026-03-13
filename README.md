# 🌌 Nexourz Workflow Galaxy

A stunning **3D interactive dashboard** by [Nexourz](https://nexourz.com) that visualizes n8n automation workflows as an orbiting galaxy. Built with Next.js 16, React Three Fiber, and TailwindCSS 4.

![Nexourz](https://img.shields.io/badge/Nexourz-Automation-00fff2?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-3D-000?style=for-the-badge&logo=three.js)

> *If It Can Be Done, It Can Be Automated.* — Nexourz

## ✨ Features

- **🌟 3D Galaxy Visualization** — Workflows orbit in an immersive particle-filled space
- **🎨 Glassmorphism UI** — Modern, sleek interface with neon accents
- **🔄 Real-time GitHub Sync** — Automatically fetches workflows from repository
- **📊 Multiple View Modes** — Toggle between Galaxy and Grid views
- **🧩 Embeddable** — Dedicated `/embed` route for iframe integration
- **📱 Responsive Design** — Works beautifully on all devices

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/DvCud/Nexourz-n8n_dashboard.git
cd Nexourz-n8n_dashboard

# Install dependencies
npm install

# Set up environment variables
cp env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router |
| **React Three Fiber** | Declarative 3D rendering |
| **@react-three/drei** | Useful R3F helpers |
| **@react-three/postprocessing** | Bloom & vignette effects |
| **TailwindCSS 4** | Utility-first styling |
| **Framer Motion** | UI animations |
| **Zustand** | State management |
| **Supabase** | Database & caching |

## 📁 Project Structure

```
Nexourz-n8n_dashboard/
├── src/
│   ├── app/
│   │   ├── api/workflows/      # API routes
│   │   ├── embed/              # Embeddable route (for iframes)
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main dashboard
│   ├── components/
│   │   ├── 3d/                 # Three.js components
│   │   └── ui/                 # UI overlay components
│   ├── lib/                    # API & Supabase clients
│   ├── stores/                 # Zustand state management
│   └── types/                  # TypeScript types
├── public/
│   └── nexourz-logo.jpeg       # Nexourz branding
├── EMBEDDING.md                # Integration documentation
├── vercel.json                 # Vercel deployment config
└── supabase-schema.sql         # Database schema
```

## 🎮 Controls

| Action | Control |
|---|---|
| **Rotate** | Click + Drag |
| **Zoom** | Scroll wheel |
| **Select** | Click on card |
| **Pan** | Right-click + Drag |

## 🧩 Embedding

This dashboard can be embedded into any website via iframe. See [EMBEDDING.md](EMBEDDING.md) for full documentation.

```html
<iframe
  src="https://your-deployment-url.vercel.app/embed"
  width="100%" height="600"
  style="border: none; border-radius: 12px;"
  title="Nexourz Workflow Galaxy"
></iframe>
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

## 📄 License

MIT License

## 🔗 Links

- [Nexourz Website](https://nexourz.com)
- [GitHub Repository](https://github.com/DvCud/Nexourz-n8n_dashboard)
- [Powered by n8n](https://n8n.io)

---

<p align="center">
  Built by <a href="https://nexourz.com"><strong>Nexourz</strong></a> — If It Can Be Done, It Can Be Automated.
</p>
