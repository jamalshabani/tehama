const Submission = require("../models/submission.model")

const postSubmission = async (req, res) => {
    try {
        console.log(req.body)
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded.");
        }
        // Saving the uploaded pdf to a server
        pdfFile = req.files.pdfFile;
        uploadPath = "public/submissions/" + JSON.stringify(Date.now()) + pdfFile.name;

        // Use the mv() method to place the file somewhere on your server
        pdfFile.mv(uploadPath, function(err) {
            if (err){
                return res.status(500).send(err);
            }
            console.log("File uploaded!");
        });

        req.body.pdfFile = uploadPath.replace("public/", "");
        await Submission.create(req.body);
        res.status(200).redirect("/profile");

    } catch (err) {
        console.log(err)
        //const errors = handleErrors(err);
        //res.status(400).render("pages/signup", {title: "Sign Up", errors: errors});
        res.status(400).redirect("/submission");
    }
}


module.exports = {
    postSubmission
}