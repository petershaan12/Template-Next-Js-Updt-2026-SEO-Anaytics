# 🚀 Instruksi Setup Portfolio Template

Selamat! Anda telah mengunduh template portfolio dengan Next.js 15 + DaisyUI + SEO + Analytics.

## 📋 Checklist Setup

### ✅ Langkah 1: Install Dependencies

```bash
npm install
```

### ✅ Langkah 2: Setup Environment Variables

1. Copy file `.env.example` menjadi `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` dan isi dengan tracking IDs Anda:
   ```env
   NEXT_PUBLIC_GA_TRACKING_ID="G-XXXXXXXXXX"  # Dari Google Analytics
   NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"          # Dari Google Tag Manager
   ```

### ✅ Langkah 3: Kustomisasi Site Config

Edit file `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Portfolio Anda", // ← Ganti nama portfolio
  url: "https://yoursite.com", // ← Ganti URL website
  username: "yourusername", // ← Ganti username
  author: "Nama Anda", // ← Ganti nama Anda
  description: "Deskripsi portfolio", // ← Ganti deskripsi

  social: {
    email: "mailto:your@email.com", // ← Ganti email
    whatsapp: "https://wa.me/...", // ← Ganti WhatsApp
    instagram: "https://...", // ← Ganti Instagram
  },

  special: {
    speciality: "Web Development", // ← Ganti keahlian
    availability: "Available", // ← Ganti ketersediaan
    experience: "5+ years", // ← Ganti pengalaman
    location: "Jakarta, Indonesia", // ← Ganti lokasi
  },

  testimonials: [
    // ← Ganti testimonial dengan yang asli
  ],
};
```

### ✅ Langkah 4: Setup Analytics

#### Google Analytics:

1. Buka [Google Analytics](https://analytics.google.com/)
2. Buat properti baru
3. Copy Measurement ID (G-XXXXXXXXXX)
4. Paste ke `.env.local`

#### Google Tag Manager:

1. Buka [Google Tag Manager](https://tagmanager.google.com/)
2. Buat container baru
3. Copy Container ID (GTM-XXXXXXX)
4. Paste ke `.env.local`

### ✅ Langkah 5: Test & Development

```bash
npm run dev
```

Buka http://localhost:3000 untuk melihat portfolio Anda!

## 🎨 Kustomisasi Lanjutan

### Theme DaisyUI

Ganti theme di `src/app/layout.tsx`:

```tsx
<html lang="en" data-theme="dark"> {/* light, dark, cupcake, etc */}
```

### Colors & Styling

Edit `src/app/globals.css` untuk custom CSS.

### SEO

- Edit metadata di `src/lib/seo.ts`
- Edit structured data di `src/config/structured-data.ts`

## 🚀 Deploy

### Vercel (Recommended):

1. Push ke GitHub
2. Connect di [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

### Netlify:

1. Push ke repository
2. Connect di [netlify.com](https://netlify.com)
3. Set build: `npm run build`
4. Deploy!

## 🆘 Need Help?

- Cek dokumentasi di `README.md`
- Issues? Buat GitHub issue
- Questions? Contact developer

---

**Happy coding! 🎉**
