const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: "someblogpost",
    component: path.resolve("./src/components/postLayout.js")
  })
}
