const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8080
const { Sequelize, DataTypes } = require('sequelize');

app.use(bodyParser.json())
app.use(cors())

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

var Notes="";

//intialization
app.listen(port, async () => {
    console.log(`Todo Server app listening at http://localhost:${port}`)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        Notes = sequelize.define('Notes', {
            note: {
              type: DataTypes.STRING,
              allowNull: false
            },
            summary: {
              type: DataTypes.STRING
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            id:{
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
            }
          });

        sequelize.sync()
          .then(() => {
            console.log(`Database & tables created!`);
          });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  })

//fetch notes
app.get('/select', async (req, res) => {
    const notes = await Notes.findAll();
    console.log(notes.every(user => user instanceof Notes)); 
    // console.log("All users:", JSON.stringify(users, null, 2));
    res.json(notes)
})

//create new note
app.put('/', async (req, res) => {
    console.log(req.body);
    const note = await Notes.create({ note: req.body.note, summary: req.body.summary, status: req.body.status });
    // console.log("auto-generated ID:", jane.id);
    res.json({userid: note.id});
})

//delete note
app.delete('/:id', async (req,res) => {
    await Notes.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json("Success");
})

//update note
app.patch('/:id', async (req,res) => {
    let note = req.body.note;
    let summary = req.body.summary;
    let status = req.body.status;
    console.log(req.params.id)
    await Notes.update({ summary: summary, status: status, note: note}, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("success");
})

app.get('/', (req, res) => {
    res.send('App Working!!')
})