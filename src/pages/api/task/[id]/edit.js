import Task from "../../../../models/TaskSchema";

const handleEdit =async (req, res) =>{
    const {id} = req.query
    try {
        const task = await Task.findByIdAndUpdate(id, body)
        res.send(task)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

export default handleEdit;