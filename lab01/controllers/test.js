'use strict';

const post = async (req, res, next) => {
  try {

    const { name } = req.body;

    console.log(name);

    res.send({ message: `Your name: ${ name }` });

  } catch (err) {
    if (err) {
      next(err);
      return;
    }
  }
};

module.exports.post = post;
