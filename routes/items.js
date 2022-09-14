const {
  getItem,
  getItems,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/items");

const ItemOpts = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
  },
};

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: ItemOpts,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: ItemOpts,
    },
  },
  handler: getItem,
};

const addItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: {
          type: "string",
        },
      },
    },
    response: {
      201: {
        type: "array",
        items: ItemOpts,
      },
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: {
          type: "string",
        },
      },
    },
    response: {
      204: ItemOpts,
    },
  },
  handler: updateItem,
};

function itemRoutes(fastify, options, done) {
  fastify.get("/items", getItemsOpts);

  fastify.get("/item/:id", getItemOpts);

  fastify.post("/item", addItemOpts);

  fastify.delete("/item/:id", deleteItemOpts);

  fastify.put("/item/:id", updateItemOpts);

  done();
}

module.exports = itemRoutes;
