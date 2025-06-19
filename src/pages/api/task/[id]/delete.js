import Task from "../../../../models/TaskSchema"

const handleDelete =async (req, res) =>{
    const {id} = req.query
    try {
        const task = await Task.findByIdAndDelete(id)
        res.send(task)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

}

export default handleDelete;