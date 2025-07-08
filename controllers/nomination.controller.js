const Nomination = require("../models/nomination.model")

const postNomination = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded.");
        }
        // Saving the uploaded files to a server
        nomination_files = req.files.nomination_files;
        req.body.nomination_files = [];
        for (let index = 0; index < nomination_files.length; index++) {
            uploadPath = "public/nomination_files/" + JSON.stringify(Date.now()) + nomination_files[index].name;

            // Use the mv() method to place the files in nomination_files folder
            nomination_files[index].mv(uploadPath, function(err) {
                if (err){
                    return res.status(500).send(err);
                }
                console.log("File uploaded!");
            });

            req.body.nomination_files.push(uploadPath.replace("public/", ""));
        }
        
        await Nomination.create(req.body);
        res.status(200).render("pages/nomination", {title: "Nomination", message: "success" });

    } catch (err) {
        res.status(400).render("pages/nomination", {title: "Nomination", message: "error" });
    }
}


module.exports = {
    postNomination
}