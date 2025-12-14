# 📘 specializedin – Community Skill Exchange Platform

**specializedin** is a community-driven platform that empowers people to offer skills, request help, swap knowledge, and book small jobs within their local area.

Its goal is to reduce unemployment, promote collaboration, and help youths gain practical experience by connecting them through valuable skills.

---

## 🚀 Features

### ✅ Skill Offering
Users can list skills they can provide (baking, hairdressing, design, plumbing, tutoring, etc.).

### ✅ Skill Requests
Users who need help can post requests that others in the community can respond to.

### ✅ Skill Swapping
A unique barter system:
> “Teach me X, I teach you Y.”

### ✅ Local Community Matching
Users can browse skills available in their area or city.

### ✅ Bookings
- Book a provider
- Chat / messaging (optional)
- Confirm completion
- Leave ratings & reviews

### ✅ User Profiles
- Bio
- Skills
- Location
- Rating
- Availability

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **TailwindCSS** / Foundation 6 / Material UI
- **React Router**
- **Axios** / **React Query**

### Backend
Supports any of the following:
- **Supabase** (Auth + Database + Storage)
- **Firebase**
- OR **Node.js** + **Express** + **MongoDB**

### Hosting
- **Vercel** (Frontend)
- **Supabase/Firebase** for backend services

---

## 📂 Project Structure

```bash
specializedin/
├── app/
│   ├── layout.tsx                 # Global layout (navbar, footer)
│   ├── page.tsx                   # Landing page (/)
│   ├── loading.tsx                # Global loading UI
│   ├── error.tsx                  # Global error boundary
│   │
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx            # /auth/login
│   │   ├── register/
│   │   │   └── page.tsx            # /auth/register
│   │
│   ├── dashboard/
│   │   ├── layout.tsx              # Dashboard sidebar layout
│   │   ├── page.tsx                # /dashboard
│   │   ├── skills/
│   │   │   ├── page.tsx            # My skills
│   │   │   └── new/
│   │   │       └── page.tsx        # Add skill
│   │   ├── requests/
│   │   │   └── page.tsx            # Skill requests
│   │   ├── swaps/
│   │   │   └── page.tsx            # Skill swaps
│   │   ├── bookings/
│   │   │   └── page.tsx            # Bookings
│   │
│   ├── skills/
│   │   ├── page.tsx                # Browse skills (/skills)
│   │   └── [id]/
│   │       └── page.tsx            # Skill details (/skills/123)
│   │
│   ├── requests/
│   │   ├── page.tsx                # Browse requests
│   │   └── [id]/
│   │       └── page.tsx            # Request details
│   │
│   ├── profile/
│   │   └── [username]/
│   │       └── page.tsx            # User profile
│   │
│   └── api/                        # API routes (optional)
│       ├── skills/route.ts
│       ├── bookings/route.ts
│       └── reviews/route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── skills/
│   │   ├── SkillCard.tsx
│   │   ├── SkillForm.tsx
│   │   └── SkillFilter.tsx
│   │
│   ├── bookings/
│   │   ├── BookingButton.tsx
│   │   └── BookingStatus.tsx
│   │
│   ├── ui/                         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   └── Input.tsx
│
├── lib/
│   ├── firebase.ts                 # Firebase config
│   ├── supabase.ts                 # Supabase client
│   ├── auth.ts                     # Auth helpers
│   └── api.ts                      # Axios / fetch wrapper
│
├── hooks/
│   ├── useAuth.ts
│   ├── useUser.ts
│   ├── useBookings.ts
│   └── useSkills.ts
│
├── types/
│   ├── user.ts
│   ├── skill.ts
│   ├── booking.ts
│   └── review.ts
│
├── styles/
│   └── globals.css
│
├── public/
│   └── images/
│
├── middleware.ts                  # Route protection
├── tailwind.config.ts
├── next.config.js
└── package.json
```


