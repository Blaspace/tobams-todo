import Prisma from "../../../lib/prisma";

const handleGetSingleTask = async(req, res) =>{
    const {id} = req.query;
    try {
        const task = await Prisma.task.findUnique({
            where:{
                 id
            }
        })
        res.send(task)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleGetSingleTask