# Real-Time Vocabulary Quiz – Coding Challenge Submission

## 👤 Candidate

**Name:** Huy Huynh  
**Role:** Software Engineer  
**Focus:** Real-time systems, product-oriented development

---
## 🎥 Demo Video

A walkthrough covering:
- System design overview
- Real-time quiz demo
- AI collaboration process
- Conclusion  
👉 Watch here: https://drive.google.com/file/d/1lX_k_RIr1g0u0F3ccfwZjbu6T0lFllg4/view?usp=drive_link
---
## 📌 Assignment Overview

This project implements a **real-time vocabulary quiz feature** for an English learning application. The system allows multiple users to:

* Join a quiz session using a unique quiz ID
* Submit answers in real time
* See scores and a leaderboard update instantly

A core requirement of this challenge is **mandatory collaboration with Generative AI tools**, which is documented clearly in both the design and implementation.

---

## 🧠 Part 1 – System Design

### High-Level Architecture

**Components:**

* Client (Web / Mobile)
* Quiz Gateway Server (Node.js + Socket.IO)
* State Layer (In-memory)
* Mocked Data Source (quiz questions & answers)

Clients communicate with the Quiz Gateway Server via **WebSocket (Socket.IO)** for low-latency, bi-directional communication.

---

### Data Flow

1. **Join Quiz**

   * Client connects via WebSocket
   * Emits `join_quiz` with `quizId` and `userId`
   * Server registers the user and joins them to a quiz room

2. **Submit Answer**

   * Client emits `submit_answer`
   * Server validates the answer and updates the score

3. **Leaderboard Update**

   * Server recalculates leaderboard
   * Broadcasts updated leaderboard to all users in the quiz room

---

### Technology Stack

| Layer     | Technology        | Reason                               |
| --------- | ----------------- | ------------------------------------ |
| Runtime   | Node.js           | Event-driven, non-blocking I/O       |
| Real-time | Socket.IO         | Reliable WebSocket abstraction       |
| State     | In-memory | Fast access & horizontal scalability |
| Protocol  | WebSocket         | Low latency updates                  |

---

### Scalability & Reliability Considerations

* **Room-based design** isolates quiz sessions
* **Stateless server design** enables horizontal scaling
* **Redis Pub/Sub (future)** can synchronize state across multiple server instances
* Graceful handling of user disconnects

---

## 💻 Part 2 – Implementation

### Implemented Component

**Quiz Gateway Server** – the core real-time component responsible for:

* Managing WebSocket connections
* Handling quiz participation
* Calculating scores
* Broadcasting real-time leaderboard updates

Other components are mocked to keep the scope aligned with interview expectations.

---

### Project Structure

```
quiz-server/
├─ public/
│  └─ client.html        # Minimal HTML client to demo real-time quiz behavior
│                        # (join quiz, submit answer, live leaderboard)
│
├─ src/
│  ├─ server.js          # Quiz Gateway Server
│  │                    # - Handles WebSocket connections (Socket.IO)
│  │                    # - Manages quiz rooms
│  │                    # - Broadcasts real-time leaderboard updates
│  │
│  ├─ quizManager.js     # Quiz state & scoring manager
│  │                    # - Manages quiz sessions and users
│  │                    # - Updates scores on answer submission
│  │
│  ├─ leaderboard.js     # Leaderboard utility module
│  │                    # - Pure function to build & sort leaderboard
│  │                    # - Stateless and easy to evolve or test
│
├─ package.json          # Project metadata and dependencies
└─ README.md             # System design, setup instructions,
                         # and AI collaboration documentation
```

---

### How to Run

```bash
npm install
npm start
```

The server runs on **port 3000**.

You can open `public/client.html` in multiple browser tabs to simulate multiple users joining the same quiz and observe real-time score and leaderboard updates.

---

## 🤖 AI Collaboration (Mandatory Section)

### Tools Used

* **ChatGPT** – system design brainstorming, Socket.IO boilerplate, data structure suggestions
* *(Optional)* GitHub Copilot/Gemini/Claude – minor code completion/ review code

---

### How AI Was Used

AI tools were used to:

* Brainstorm the real-time system architecture
* Generate an initial Socket.IO server skeleton
* Suggest data structures for managing quizzes and leaderboards

---

### Verification & Quality Control (Critical)

All AI-assisted output was **manually reviewed and validated**:

* Event names and responsibilities were refined for clarity
* Over-engineered logic suggested by AI was simplified
* Scoring logic was made deterministic
* Manual testing was performed using multiple concurrent clients
* Leaderboard ordering and consistency were verified under simultaneous submissions

> AI was treated as a **engineer**: helpful for speed, but never trusted blindly.

---

### Observed Limitations of AI

* Tendency to over-engineer simple flows
* Limited awareness of real-world scalability trade-offs

Final architectural and implementation decisions were made intentionally by the developer.

---

## 🚀 Future Improvements

Given more time, the system can be extended with:

* Redis-based shared state and Pub/Sub
* Persistent storage for quiz results
* Authentication and user profiles
* Metrics, logging, and monitoring (Prometheus / Grafana)

---

## 🎯 Conclusion

This submission demonstrates:

* Real-time system design skills
* Clean and maintainable implementation
* Thoughtful scalability considerations
* Responsible and effective collaboration with Generative AI

The scope and depth are intentionally aligned with **technical interview expectations** rather than full production deployment.

---

Thank you for reviewing this submission.
