const express = require('express')
const app = express()
const port = 3000
const workDir = require('path').resolve(process.env['WORKDIR'])
console.log(workDir); 
const git = require('simple-git')(workDir);

//git.clone(repoPath, workDir)

app.get('/', (req, res) => res.send(`Serving api from '${workDir}'`))
app.post('/branch/:branchId', (req, res) => {

    
})

app.listen(port, () => console.log(`Example app listening on port ${port} with ${workDir} working directory!`))