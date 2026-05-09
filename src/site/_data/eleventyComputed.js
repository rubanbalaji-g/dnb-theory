const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  // These must all be async and use await
  graph: async (data) => {
    return { nodes: {}, homeAlias: "/" };
  },
  filetree: async (data) => {
    if (!global.fileTreeCache) {
      global.fileTreeCache = await getFileTree(data);
    }
    return global.fileTreeCache;
  },
  userComputed: async (data) => await userComputed(data)
};
