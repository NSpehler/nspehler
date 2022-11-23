const Preview = async (req, res) => {
  const secret = process.env.NEXT_DATOCMS_PREVIEW_SECRET

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid token" })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to requested URL or homepage
  res.writeHead(307, { Location: req.query.redirect || "/" })
  res.end()
}

export default Preview
