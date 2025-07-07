// const Nomination = require("../models/nomination.model")

const postNomination = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded.");
        }
        // Saving the uploaded pdf to a server
        nomination_files = req.files.nomination_files;
        uploadPath = "public/submissions/" + JSON.stringify(Date.now()) + nomination_files.name;

        // // Use the mv() method to place the file somewhere on your server
        // nomination_files.mv(uploadPath, function(err) {
        //     if (err){
        //         return res.status(500).send(err);
        //     }
        //     console.log("File uploaded!");
        // });

        // req.body.pdfFile = uploadPath.replace("public/", "");
        // await Submission.create(req.body);
        res.status(200).redirect("/nomination");

    } catch (err) {
        console.log(err)
        //const errors = handleErrors(err);
        //res.status(400).render("pages/signup", {title: "Sign Up", errors: errors});
        res.status(400).redirect("/submission");
    }
}


module.exports = {
    postNomination
}