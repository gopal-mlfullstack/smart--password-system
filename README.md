🔐 Smart Password System

A full-stack web application that generates secure passwords, analyzes their strength using entropy, and stores history for user insights.

---

🚀 Tech Stack

Backend

- FastAPI (Python)
- SQLAlchemy (ORM)
- SQLite (Database)

Frontend

- React
- TypeScript
- Tailwind CSS

---

📂 Project Structure

smart-password-system/
├── backend/
│   ├── app/
│   │   ├── api/routes/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── database/
│   │   ├── utils/
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
└── README.md

---

⚙️ Getting Started (Run Locally)

1️⃣ Clone the Repository

git clone https://github.com/gopal-mlfullstack/simple-password-system.git
cd simple-password-system

---

🧠 Backend Setup

cd backend
python -m venv venv
source venv/bin/activate   # Linux / Mac
# venv\Scripts\activate    # Windows

pip install -r requirements.txt

▶️ Run Backend

uvicorn app.main:app --reload

Backend runs at:
👉 http://127.0.0.1:8000
👉 API Docs: http://127.0.0.1:8000/docs

---

🎨 Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs at:
👉 http://localhost:5173

---

🔌 API Configuration

Make sure frontend API base URL is set to:

http://127.0.0.1:8000

File:

src/services/api.ts

---

✨ Features

- 🔐 Secure password generation
- 📊 Entropy-based strength analysis
- 📁 Password history storage
- 🎨 Clean UI with Tailwind CSS
- ⚡ Full-stack integration (React + FastAPI)

---

🧠 Key Concepts Learned

- REST API development
- Backend architecture (services, models, schemas)
- Frontend API integration
- Database design with ORM
- State management in React

---

📌 Future Improvements

- User authentication (JWT)
- Password hashing (bcrypt)
- PostgreSQL integration
- Deployment (Render + Vercel)

---
## 💼 Author

**Gopal Mahato**  
GitHub: https://github.com/gopal-mlfullstack

---

⭐ Contributing

Feel free to fork this repo and improve it!

---
