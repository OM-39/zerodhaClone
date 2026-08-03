export const userVerification = (req, res) => {
  console.log("Cookies:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    console.log("No token received");
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("JWT Error:", err.message);
      return res.json({ status: false });
    }

    console.log("JWT Payload:", data);

    const user = await UsersModel.findById(data.id);

    if (!user) {
      console.log("User not found");
      return res.json({ status: false });
    }

    return res.json({
      status: true,
      user: user.username,
    });
  });
};