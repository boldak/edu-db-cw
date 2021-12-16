import Router from 'express'
import { User } from './model/user.js';
import { Project } from './model/project.js';
import { Task } from './model/task.js';
import { Action } from './model/action.js';
import { Artifact } from './model/artifact.js';


const router = new Router();

// user
router.post('/user', () => { console.log('post user')} );
router.get('/user', () => { console.log('get user')}); 
router.put('/user', () => { console.log('put user')}); 
//router.get('/user/:id', controllerTask.getOneTask);

router.delete('/user/:id', () => { console.log('delete user')}); 


router.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send("Unexpected server error: " + JSON.stringify(err));
})

export { router };
