import Prisma from "../../../lib/prisma";

async function Add(req, res) {
  try {
    const task = await Prisma.task.create({ data: req.body });
    res.send(task);
  } catch (err) {
    console.log(err);
  }
}

export default Add;
