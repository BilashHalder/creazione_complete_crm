const { add, update, find, findall, remove,findby } = require("./employee.service");
const Employee = require('./employee.schema');
let employee = new Employee();
const bcrypt = require('bcrypt');
const saltRounds = 10;



const Add_ = (request, response) => {
    let data = request.body;
    if (data.name == undefined || data.phone == undefined || data.email == undefined || data.pass == undefined || data.gender == undefined)
        response.status(400).json({ message: "Invalid Request" });
    else if (request.files == undefined)
        response.status(400).json({ message: "Invalid Request" });
    else if (request.files.image == undefined)
        response.status(400).json({ message: "Invalid Request" });

    else {
        const hash = bcrypt.hashSync(data.pass, saltRounds);
        employee.pass = hash;
        employee.name = data.name;
        employee.email = data.email;
        employee.phone = data.phone;
        employee.status = 1;
        employee.gender = data.gender;
        let image = request.files.image;
        originalname = image.name;
        fileExt = originalname.split('.').at(-1);
        if (fileExt != 'jpg' && fileExt != 'jpeg' && fileExt != 'png')
            response.status(400).json({ message: "Invalid Image" });
        else if (image.size > 2000000)
            response.status(400).json({ message: "File size To large" });
        else {
            let newName = image.md5 + '__' + Date.now() + '' + '.' + fileExt;
            let uploadPath = (__dirname + '../../../uploads/images/' + newName);
            image.mv(uploadPath, function (err) {
                if (err)
                    response.status(500).json({ message: "Internal Server Error" });
                else {
                    employee.image = newName;
                    add(employee, (err, result) => {
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
                response.status(500).json({ message: "Internal Server Error 11" });
            else if (result.length == 0)
                response.status(404).json({ message: "Invalid request" });
            else {
                let temp = result[0];
                const { name, gender, email, phone, document_id, pass, image, status, employee_id } = request.body;
                temp.name = name ? name : temp.name;
                temp.gender = gender != undefined ? gender : temp.gender;
                temp.email = email ? email : temp.email;
                temp.phone = phone ? phone : temp.phone;
                temp.document_id = document_id ? document_id : temp.document_id;
                temp.status = status != undefined ? status : temp.status;
                temp.pass = pass ? bcrypt.hashSync(pass, saltRounds) : temp.pass;
                if (request.files == undefined)
                    {
                        temp.image = temp.image;
                        update(temp, (err, result) => {
                            if (err)
                                response.status(500).json({ message: err });
                            else {
                                response.status(201).json({ message: "data saved successfully", data: temp });
                            }
                        });

                    }
                else if (request.files.image == undefined)
                    {
                        temp.image = temp.image;
                        update(temp, (err, result) => {
                            if (err)
                                response.status(500).json({ message: "Internal Server Error 33" });
                            else {
                                response.status(201).json({ message: "data saved successfully", data: temp });
                            }
                        });
                    }
                else {
                    let image = request.files.image;
                    originalname = image.name;
                    fileExt = originalname.split('.').at(-1);
                    if (fileExt != 'jpg' && fileExt != 'jpeg' && fileExt != 'png')
                        response.status(400).json({ message: "Invalid Image" });
                        else if (image.size > 2000000)
                        response.status(400).json({ message: "File size To large" });
                        else {
                            let newName = image.md5 + '__' + Date.now() + '' + '.' + fileExt;
                            let uploadPath = (__dirname + '../../../uploads/images/' + newName);
                            image.mv(uploadPath, function (err) {
                                if (err)
                                    response.status(500).json({ message: "Internal Server Error 44" });
                                else {
                                    temp.image = newName;
                                    update(temp, (err, result) => {
                                        if (err)
                                            response.status(500).json({ message: "Internal Server Error 55" });
                                        else {
                                            response.status(201).json({ message: "data saved successfully", data: temp });
                                        }
                                    });
                                }
                            });
                        }

                }



            }
        })
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
const ResetPass=(request, response)=>{
    const {old_pass,new_pass,employee_id}=request.body;
    if(old_pass==undefined|| new_pass==undefined||employee_id==undefined)
        response.status(400).json({ message: "Invalid Request" });
    else{
        find(employee_id, (err, result) => {
            if (err)
                response.status(500).json({ message: "Internal Server Error" });
            else if (result.length == 0)
                response.status(404).json({ message: "No data found" });
            else{
               if(!bcrypt.compareSync(old_pass,result[0].pass))
               response.status(404).json({ message: "Invalid Old Password" });
                else{
                    let temp=result[0];
                    temp.pass=bcrypt.hashSync(new_pass,saltRounds);
                    update(temp, (err, result) => {
                        if (err)
                            response.status(500).json({ message: "Internal Server Error" });
                        else {
                            response.status(201).json({ message: "password reset"});
                        }
                    });
                }
            }
                
        });
    }
}
module.exports = { Find_, FindAll_, Add_, Update_, Remove_,ResetPass }

