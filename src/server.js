/**
 * AI-assisted section:
 * - Initial Socket.IO server boilerplate generated with ChatGPT
 * - Manually reviewed event naming & error handling
 */

const { Server } = require("socket.io");
const http = require("http");
const { QuizManager } = require("./quizManager");

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: "*" }
});

const quizManager = new QuizManager();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_quiz", ({ quizId, userId }) => {
    quizManager.joinQuiz(quizId, userId);
    socket.join(quizId);
    io.to(quizId).emit(
      "leaderboard_updated",
      quizManager.getLeaderboard(quizId)
    );
  });

  socket.on("submit_answer", ({ quizId, userId, answer }) => {
    quizManager.submitAnswer(quizId, userId, answer);
    io.to(quizId).emit(
      "leaderboard_updated",
      quizManager.getLeaderboard(quizId)
    );
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

server.listen(3000, () =>
  console.log("Quiz Gateway running on port 3000")
);
