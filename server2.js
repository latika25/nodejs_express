
const express = require("express")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.sendFile(__dirname+"/first.html");
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html");
})
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
})
app.get("/first", (req, res) => {
    res.sendFile(__dirname + "/first.html");
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
})

app.post('/last', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const gender=req.body.Gender;
var g;
	if(gender==0)
		g="Female";
	if(gender==1) 
		g="Male"	 
    const course=req.body.course;
var c;
if(course==0)
c="BTEch"
if(course==1)
c="MBA"
if(course==2)
c="MCA"
if(course==3)
c="MTech"
    const contact=req.body.contact;
    const address=req.body.address;
    const email=req.body.email;
    const pwd=req.body.pwd;
    const per10=req.body.per10;
    const year10=req.body.year10;
    const per12=req.body.per12;
    const year12=req.body.year12;
    const content = `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Contact</title>
</head>

<body class="bg-dark">
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <span class="navbar-brand " href="#">Course Registration</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link text-light" href="/register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="/about">About This</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link text-light" href="/contact">Contact Us</a>
                </li>
            </ul>

        </div>
    </nav>
    <div class="container text-center  mt-5">
        <h2 class="text-light">Welcome <span class="text-warning"> ${fname} ${lname}</span>,Your Registration is Completed</h2>
        <div>
        <h3 class="text-light">Your data is</h3>
        <table class="table table-bordered table-info border-danger rounded" name="edu">
            <thead>
                <tr>
                    <th class="text-danger" scope="col">Field</th>
                    <th class="text-danger" scope="col">Entered Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="text-primary">FullName</th>
                    <td>${fname} ${lname}</td>
                    
                </tr>
                <tr>
         
                    <th scope="row" class="text-primary" >Gender</th>
                    <td>${g}</td>
                </tr>
                <tr>
                    <th scope="row" class="text-primary" >Course Entered</th>
                    <td>${course}</td>
                </tr>
                <tr>
                    <th scope="row" class="text-primary">Contact No</th>
                    <td>${contact}</td>
                </tr>
                <tr>
                    <th scope="row"class="text-primary">Address</th>
                    <td>${address}</td>
                </tr>
                <tr>
                    <th scope="row"class="text-primary">Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th scope="row"class="text-primary">Password</th>
                    <td>${pwd}</td>
                </tr>
                <tr>
                    <th scope="row"class="text-primary">Percentage and Passing Year Class 10th</th>
                    <td>${per10}%, ${year10}</td>
                </tr>
                <tr>
                    <th scope="row" class="text-primary">Percentage and Passing Year Class 12th</th>
                    <td>${per12}%, ${year12}</td>
                </tr>
                
            </tbody>
        </table>
        </div>
       
    </div >

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</body >

</html > `

    res.send(content)
})
app.listen(3000, (e) => {
    console.log("Server Started....connected")
})
