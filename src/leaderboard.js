/**
 * Leaderboard utility
 *
 * AI-assisted:
 * - Initial sorting logic suggested by ChatGPT
 * - Manually simplified for clarity and determinism
 */

function buildLeaderboard(usersMap) {
  return [...usersMap.entries()]
    .map(([userId, data]) => ({
      userId,
      score: data.score
    }))
    .sort((a, b) => b.score - a.score);
}

module.exports = { buildLeaderboard };
