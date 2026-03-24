# Muskan Chauhan — Portfolio

## Stack
- Frontend: React 18 + Vite
- Backend: Node.js + Express + Resend

## Run

### Frontend
```bash
npm install
npm run dev        # http://localhost:5173
```

### Backend
```bash
cd server
npm install
cp .env.example .env    # add your RESEND_API_KEY
npm run dev             # http://localhost:5001
```

## Deploy
- Frontend → Vercel (`npm run build`)
- Backend  → Render (push server/ to GitHub)

## Swap campaign images
Replace any `g-placeholder` card in Gallery.jsx with:
```jsx
{ type: 'img', src: '/images/campaign.jpg', label: 'Brand Name' }
```
Put images in `public/images/` folder.

## Important
Change Resend account email to chauhan.muskan1798@gmail.com
in Resend Dashboard → Settings → Account (free tier restriction).
