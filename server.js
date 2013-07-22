var port = process.env.PORT || 4000,
    app = require('./app').init(port),
//    emailTemplates = require('email-templates')
    nodemailer = require('nodemailer');

console.log("app" + app);
var locals = {
    // add other vars here
};

app.get('/', function (req, res) {
    res.render("index");
});

app.post('/contact', function (req, res) {
    console.log(req.body);
    // Prepare nodemailer transport object
    var transport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "neubauer.peter@gmail.com",
            pass: process.env.GMAIL_PWD
        }
    });
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.email, // sender address
        to: "neubauer.peter@gmail.com", // list of receivers
        subject: "Kidscraft message from " + req.body.email, // Subject line
        text: req.body.message, // plaintext body
        html: req.body.message // html body
    }

    // send mail with defined transport object
    transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
    console.log('Form submitted.');
    res.send('Tack, vi hör av oss!');
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function (req, res) {
    res.render('404.ejs', locals);
});