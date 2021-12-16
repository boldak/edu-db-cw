import express from 'express'
import { router } from './route.js';

//Database
import { sequelize } from './config/db.js';

const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.query);
  res.status(200).json('Server working');
})
 

app.use('/', router);
 
async function startApp() {
  try {

    sequelize.sync().then(()=>{
      app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

    }).catch(err=>console.log(err));


  } catch(e) {
    console.log(e);
  }
}

startApp()