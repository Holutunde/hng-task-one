const getData = async (req, res) => {
  const bio =
    'I am a backend developer with sound knowledge in nodejs and reactnative framework'
  res
    .status(200)
    .json({ slackUsername: 'Holutunde', backend: true, age: 25, bio: bio })
}

const operation = async (req, res) => {
  const { operation_type, x, y } = req.body

  let result
  if (operation_type === 'addition') {
    result = x + y
  } else if (operation_type === 'subtraction') {
    result = x - y
  } else if (operation_type === 'multiplication') {
    result = x * y
  }

  res
    .status(200)
    .json({
      slackUsername: 'Holutunde',
      result: result,
      operation_type: operation_type,
    })
}
module.exports = {
  getData,
  operation,
}
