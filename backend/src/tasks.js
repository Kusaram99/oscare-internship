let tasks = [];
let currentId = 1;

// resnd all tasks
const getTasks = (req, res) => {
    res.status(200).json(tasks);
};

// get sepcific task by task Id
const getTaskById = (req, res) => {
    try {
        const { id } = req.params;
        const task = tasks.find(t => t.id === parseInt(id));
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }

    } catch (error) {
        res.status(505).json({ message: 'SERVER ERROR' });
    }
};

// add new tasks
const createTask = (req, res) => {
    try {

        const { title, description } = req.body;
        // check is value valide?
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        // add task
        const task = { id: currentId++, title, description };
        tasks.push(task);

        // send response
        res.status(201).json(task);

    } catch (error) {
        res.status(505).json({ message: 'SERVER ERROR' });
    }
};

// update task 
const updateTask = (req, res) => {
    try {

        // extract id from params and body values
        const { id } = req.params;
        const { title, description } = req.body; 

        // return task object if found else return -1
        const task = tasks.find(t => t.id === parseInt(id));

        // check if task exist and update values
        if (task) {
            if (title) task.title = title;
            if (description) task.description = description;
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }

    } catch (error) {
        res.status(505).json({ message: 'SERVER ERROR' });
    }
};

// delete task by task ID
const deleteTask = (req, res) => {

    try {
        // extract id
        const { id } = req.params;

        // find task by id and return date if found else return -1 
        const index = tasks.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            // delete task
            tasks.splice(index, 1);
            res.status(200).json({ message: 'Task deleted' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }

    } catch (error) {
        res.status(505).json({ message: 'SERVER ERROR' });
    }
};

export { getTasks, getTaskById, createTask, updateTask, deleteTask };
