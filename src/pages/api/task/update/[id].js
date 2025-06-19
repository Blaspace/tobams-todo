import Prisma from "../../../../lib/prisma";

const handleUpdateTask = async (req, res) => {
  try {
    const { id } = req.query;
    const { task, tasks } = req.body;

    if (!tasks) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const existingTask = await Prisma.task.update({
      where: { id },
      data: {
        tasks,
      },
    });
    // Assuming you have a function to update the task in your database
    // await updateTaskInDatabase(id, task, tasks);

    // For demonstration, we will just return the updated task
    res.status(200).json({ id, task, tasks });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handleUpdateTask