import { addNewTask, updateTask } from './server';

(async function myFunc() {

    await addNewTask({
        name:"My Task 02",
        id: "1234502"
    });

    updateTask({
        id: "1234502",
        name:"My Task 02 updated "
    });

}) ();


