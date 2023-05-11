
const profileInfo = async (req, res, next) => {
  try {
    res.send(JSON.stringify(req.oidc.user));
  } catch (error) {
    res.status(500).json(error || "Some error occurred");
  }
};

module.exports = {
  profileInfo,
};