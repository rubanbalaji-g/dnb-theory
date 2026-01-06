const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  // These must all be async and use await
  graph: async (data) => await getGraph(data),
  filetree: async (data) => await getFileTree(data),
  userComputed: async (data) => await userComputed(data)
};
