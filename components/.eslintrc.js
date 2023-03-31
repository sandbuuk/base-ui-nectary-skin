module.exports = {
  rules: {
    'no-console': process.env.CI != null ? 2 : 0,
  },
}
