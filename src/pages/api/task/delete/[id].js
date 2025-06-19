import Prisma from "../../../../lib/prisma";

const handleDeleteTask = async (req, res) => {
    const { id } = req.query;
    try {
        const task = await Prisma.task.delete({
            where: { id },
        });
        res.send(task);
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error")
    }
}

export default handleDeleteTask;