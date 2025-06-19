import Prisma from "../../../lib/prisma";

const handleGet = async (req, res) => {
  try {
    // Ensure the database connection is established

    const task = await Prisma.task.findMany();
    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

export default handleGet;
