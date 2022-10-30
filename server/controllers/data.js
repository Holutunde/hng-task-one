const getData = async (req, res) => {
  const bio =
    'I am a backend developer with sound knowledge in nodejs and reactnative framework'
  res
    .status(200)
    .json({ slackUsername: 'Holutunde', backend: true, age: 25, bio: bio })
}

module.exports = {
  getData,
}
