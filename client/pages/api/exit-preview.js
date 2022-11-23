const Exit = async (req, res) => {
  // Exit the current user from "Preview Mode"
  res.clearPreviewData()

  // Redirect to requested URL or homepage
  res.writeHead(307, { Location: req.query.redirect || "/" })
  res.end()
}

export default Exit
