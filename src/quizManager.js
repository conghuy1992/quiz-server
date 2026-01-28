const { buildLeaderboard } = require("./leaderboard");

/**
 * Quiz state manager
 *
 * AI-assisted:
 * - Data structure suggestion from ChatGPT
 * - Final structure refined manually
 */

class QuizManager {
  constructor() {
    this.quizzes = new Map();
  }

  joinQuiz(quizId, userId) {
    if (!this.quizzes.has(quizId)) {
      this.quizzes.set(quizId, {
        users: new Map(),
      });
    }

    const quiz = this.quizzes.get(quizId);
    if (!quiz.users.has(userId)) {
      quiz.users.set(userId, { score: 0 });
    }
  }

  submitAnswer(quizId, userId, answer) {
    const quiz = this.quizzes.get(quizId);
    if (!quiz) return;

    // Mock correct answer
    const isCorrect = answer === "A";
    if (isCorrect) {
      quiz.users.get(userId).score += 10;
    }
  }

  getLeaderboard(quizId) {
    const quiz = this.quizzes.get(quizId);
    if (!quiz) return [];

    return buildLeaderboard(quiz.users);
  }
}

module.exports = { QuizManager };
