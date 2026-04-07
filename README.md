# Krishna Infotech Website

A modern, responsive website built for Krishna Infotech IT company using React + Vite with a Krishna-inspired theme.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Krishna Theme**: Beautiful blue and teal color scheme inspired by Krishna
- **Multiple Pages**: 
  - Home with hero section and features
  - About company, founders, and team
  - Comprehensive services showcase
  - Project portfolio
  - Contact form with multiple channels
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **High Security**: Built with React and TypeScript for type safety
- **Modern Technologies**: React Router for navigation, form handling with React

## 📋 Pages

1. **Home** - Hero section, features overview, how we work process, and CTA
2. **About** - Company information, founder story, team members, and culture
3. **Services** - All IT services offered (8 services with descriptions and features)
4. **Projects** - Portfolio of completed projects with technologies used
5. **Founders** - Leadership information, vision & mission, company culture
6. **Contact** - Contact form, contact information, FAQs, and why choose us

## 🎨 Design

- **Color Scheme**: Blues (#1e90ff, #00d4ff) and dark backgrounds (#0f172a, #1e3a5f)
- **Typography**: Clean, modern sans-serif fonts
- **Responsive**: Mobile-first approach with breakpoints at 768px and 480px
- **Animations**: Smooth transitions and hover effects throughout

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **TypeScript** - Type safety
- **CSS3** - Styling with gradients, flexbox, and grid

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Available Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/projects` - Projects/Portfolio page
- `/founders` - Founders page
- `/contact` - Contact page

## 📱 Responsive Breakpoints

- Desktop: 1024px and up
- Tablet: 768px to 1023px
- Mobile: Below 768px

## 🔒 Security Features

- Type-safe with TypeScript
- Built with modern React best practices
- Secure form handling
- HTTPS ready for deployment

## 📝 Contact Information

- **Email**: krishnainfotech.official@gmail.com
- **Phone**: +91 9042850490
- **Location**: Rajapalayam, Tamilnadu - 626108

## 🚀 Deployment

The site is optimized for deployment on any static hosting:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Simply run `npm run build` and deploy the `dist` folder.

## 📄 License

All rights reserved © Krishna Infotech

---

Built with 🙏 by Krishna Infotech

      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
