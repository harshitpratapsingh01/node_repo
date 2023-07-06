const express = require('express');
const app = express();
const port = 2000;

app.use(express.json());

let details = [
    {
        "id": 1,
        "username": "Jatin Sir",
        "role": "Mentor"
    },
    {
        "id": 2,
        "username": "Harshit",
        "role": "Trainee"
    },
    {
        "id": 3,
        "username": "Sagar",
        "role": "Trainee"
    }
];



app.get('/:id', (req, res) => {
    try{
        const id = Number(req.params.id);
        const user = details.find((find_id) => find_id.id === id);
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(500).send("User Not Found");
        }
        // res.json(details);
        // console.log(req);
    }
    catch{
        res.status(500).send("Server error");
    }
});

app.post('/', (req, res) => {
    try{
        if(Object.keys(details).length !=0){
            
        }
        const add_data = req.body;
        details.push(add_data);
        res.status(200).json(details);
    }
    catch{
        res.status(400).send("Bad Request");
    }
});

app.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);
    const updatedAccount = {...person,...body };

    console.log(updatedAccount);
    details[index] = updatedAccount;

    res.send(details);

});

app.delete('/:id', (req,res) => {
    const id = Number(req.params.id);
    const newDetail = details.filter((find_id) => find_id.id != id);

    console.log(newDetail);

    if(!newDetail){
        res.json("error");
    }
    else{
        details = newDetail;
        res.json(details);
    }
});

app.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);
    const updatedUser = {...person,...body};

    console.log(updatedUser);
    details[index] = updatedUser;

    res.send(details);

});
app.get('/new', (req,res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`listening at: ${port}`);
});
