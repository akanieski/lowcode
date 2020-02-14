const express = require('express'), fs = require('fs')
const app = express()
const port = 3000
const workDir = require('path').resolve(process.env['WORKDIR'])
var git = null
console.log(workDir); 


try {
    if (fs.existsSync(workDir)) fs.unlinkSync(workDir)
    fs.mkdirSync(workDir)
    git = require('simple-git')(workDir)
    git.clone(process.env['TARGETREPO'], workDir)
} catch(ex) {console.log(ex)}

app.get('/', (req, res) => res.send(`Serving api from '${workDir}'`))
app.post('/branch/:branchId', (req, res) => {

    git.checkoutLocalBranch(req.params.branchId, () => {

        res.send("branch created.")

    });
    
})

app.listen(port, () => console.log(`Example app listening on port ${port} with ${workDir} working directory!`))