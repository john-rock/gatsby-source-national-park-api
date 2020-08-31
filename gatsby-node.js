const fetch = require("node-fetch");

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  try {
    const { apiKey } = options;

    const res = await fetch(
      `https://developer.nps.gov/api/v1/parks?limit=100&api_key=${apiKey}`
    );
    const data = await res.json();
    data.data.forEach((park) => {
      const node = {
        ...park,
        id: createNodeId(`park-${park.id}`),
        internal: {
          type: "National__Park",
          contentDigest: createContentDigest(park),
        },
      };
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }
};

