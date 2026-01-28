/**
 * AI-assisted:
 * - Data structure suggestion from ChatGPT
 * - Refined manually to ensure deterministic scoring
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

    return [...quiz.users.entries()]
      .map(([userId, data]) => ({
        userId,
        score: data.score,
      }))
      .sort((a, b) => b.score - a.score);
  }
}

module.exports = { QuizManager };
