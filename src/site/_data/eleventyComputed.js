const { getGraph } = require("../../helpers/linkUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  // These must all be async and use await
  graph: async (data) => await getGraph(data),
  userComputed: async (data) => await userComputed(data)
};
