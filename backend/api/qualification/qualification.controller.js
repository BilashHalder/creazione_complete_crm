const { add, update, find, findall, remove } = require("./qualification.service");
const Qualification = require('./qualification.schema')
const qualification = new Qualification()
const Find_ = (request, response) => {
    let _id = request.params.id;
    if (isNaN(_id))
        response.status(400).json({ message: "Invalid Request" });
    else {
        find(_id, (err, result) => {
            if (err)
                response.status(500).json({ message: "Internal Server Error" });
            else if (result.length == 0)
                response.status(404).json({ message: "No data found" });
            else
                response.status(200).json(result)
        });
    }
}

const FindAll_ = (request, response) => {
    findall(null, (err, result) => {
        if (err)
            response.status(500).json({ message: "Internal Server Error" });
        else if (result.length == 0)
            response.status(404).json({ message: "No data found" });
        else
            response.status(200).json(result)
    });
}

const Add_ = (request, response) => {
    const { degree_name, year_of_pass, degree_from, marks, employee_id } = request.body;
    if (degree_name == undefined || year_of_pass == undefined || degree_from == undefined || marks == undefined || employee_id == undefined)
        response.status(400).json({ message: "Invalid Request" });
    else if (request.files == undefined)
        response.status(400).json({ message: "Invalid Request" });
    else if (request.files.certificate == undefined)
        response.status(400).json({ message: "Invalid Request" });
    else {
        let certificatePdf = request.files.certificate;
        originalname = certificatePdf.name;
        fileExt = originalname.split('.').at(-1);
        if (fileExt != 'pdf')
            response.status(400).json({ message: "Invalid File Type" });
        else if (certificatePdf.size > 5000000)
            response.status(400).json({ message: "File size To large" });
        else {
            let newName = certificatePdf.md5 + '#_#' + Date.now() + '' + '.' + fileExt;
            let uploadPath = (__dirname + '../../../uploads/certificate/' + newName);
            certificatePdf.mv(uploadPath, function (err) {
                if (err)
                    response.status(500).json({ message: "Internal Server Error" });
                else {
                    qualification.document_url = newName;
                    qualification.degree_from = degree_from;
                    qualification.degree_name = degree_name;
                    qualification.marks = marks;
                    qualification.employee_id = employee_id;
                    qualification.year_of_pass = year_of_pass;
                    add(qualification, (err, result) => {
                        if (err)
                            response.status(500).json({ message: "Internal Server Error" });
                        else {
                            response.status(201).json({ message: "data saved successfully", data: result });
                        }
                    });
                }
            });
        }

    }



}
const Update_ = (request, response) => {
    if (isNaN(request.params.id))
        response.status(400).json({ message: "Invalid Request" });
    else {
        find(request.params.id, (err, result) => {
            if (err)
                response.status(500).json({ message: "Internal Server Error" });
            else if (result.length == 0)
                response.status(404).json({ message: "Invalid request" });
            else {
                const { degree_name, year_of_pass, degree_from, marks, document_url, employee_id } = request.body;
                let temp = new Qualification();
                temp = result[0];
                temp.degree_name = degree_name ? degree_name : temp.degree_name;
                temp.year_of_pass = year_of_pass ? year_of_pass : temp.year_of_pass;
                temp.degree_from = degree_from ? degree_from : temp.degree_from;
                temp.marks = marks ? marks : temp.marks;
                temp.employee_id = employee_id ? employee_id : temp.employee_id;
                if (request.files == undefined && request.files.certificate == undefined) {
                    update(salary, (err, res) => {
                        if (err)
                            response.status(500).json({ message: "Internal Server Error" });
                        else
                            response.status(200).json({ message: "data updated successfully", data: salary });
                    });

                }
                else {
                    let certificatePdf = request.files.certificate;
                    originalname = certificatePdf.name;
                    fileExt = originalname.split('.').at(-1);
                    if (fileExt != 'pdf')
                        response.status(400).json({ message: "Invalid File Type" });
                    else if (certificatePdf.size > 5000000)
                        response.status(400).json({ message: "File size To large" });
                    else {
                        let newName = certificatePdf.md5 + '#_#' + Date.now() + '' + '.' + fileExt;
                        let uploadPath = (__dirname + '../../../uploads/certificate/' + newName);
                        certificatePdf.mv(uploadPath, function (err) {
                            if (err)
                                response.status(500).json({ message: "Internal Server Error" });
                            else {
                                temp.document_url = newName;
                                update(temp, (err, res) => {
                                    if (err)
                                        response.status(500).json({ message: "Internal Server Error" });
                                    else
                                        response.status(200).json({ message: "data updated successfully", data: temp });
                                });

                            }
                        });
                    }
                }
            }
        });
    }
}

const Remove_ = (request, response) => {
    let _id = request.params.id;
    if (isNaN(_id))
        response.status(400).json({ message: "Invalid Request" });
    else {
        remove(_id, (err, result) => {
            if (err)
                response.status(500).json({ message: "Internal Server Error" });
            else if (result.affectedRows == 0)
                response.status(406).json({ message: "No Data Found" });
            else
                response.status(200).json({ message: "Data Deleted Successfully" })
        });
    }
}
module.exports = { Find_, FindAll_, Add_, Update_, Remove_ }