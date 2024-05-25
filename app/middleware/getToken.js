const getToken = (req) => {
  const header = req.header('Authorization');
  if (!header) return null;
  return header.replace('Bearer ', '');
};

module.exports = getToken;
