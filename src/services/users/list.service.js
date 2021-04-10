const { usersRepository } = require("../../repositories");

module.exports.list = async (options) => {
  console.log(options);
  const query = {};

  if (options.name && options.name !== "") {
    query.where = { name: options.name };
  }

  const { count, rows } = await usersRepository.list(query);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
