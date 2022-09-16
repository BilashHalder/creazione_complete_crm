const { add, update, find, findall, remove,findby } = require("./associate.service");
const Associate = require('./associate.schema');
let associate = new Associate();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');



const Add_ = (request, response) => {
    let data = request.body;
    if (data.name == undefined || data.phone == undefined || data.email == undefined || data.pass == undefined || data.gender == undefined ||data.commission_rate==undefined)
        response.status(400).json({ message: "Invalid Request" });
    else if (request.files == undefined)
        response.status(400).json({ message: "Invalid Request" });
    else if (request.files.image == undefined)
        response.status(400).json({ message: "Invalid Request" });

    else {
        const hash = bcrypt.hashSync(data.pass, saltRounds);
        associate.pass = hash;
        associate.name = data.name;
        associate.email = data.email;
        associate.phone = data.phone;
        associate.commission_rate=data.commission_rate;
        associate.status = 1;
        associate.gender = data.gender;
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
                    associate.image = newName;
                    add(associate, (err, result) => {
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
                let temp = result[0];
                const { name, gender, email, phone, document_id, pass, image, status, associate_id,commission_rate } = request.body;
                temp.name = name ? name : temp.name;
                temp.gender = gender != undefined ? gender : temp.gender;
                temp.email = email ? email : temp.email;
                temp.phone = phone ? phone : temp.phone;
                temp.document_id = document_id ? document_id : temp.document_id;
                temp.status = status != undefined ? status : temp.status;
                temp.pass = pass ? bcrypt.hashSync(pass, saltRounds) : temp.pass;
                temp.commission_rate=commission_rate?commission_rate:temp.commission_rate;
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
                                response.status(500).json({ message: "Internal Server Error" });
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
                                    response.status(500).json({ message: "Internal Server Error" });
                                else {
                                    temp.image = newName;
                                    update(temp, (err, result) => {
                                        if (err)
                                            response.status(500).json({ message: "Internal Server Error" });
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
    const {old_pass,new_pass,associate_id}=request.body;
    if(old_pass==undefined|| new_pass==undefined||associate_id==undefined)
        response.status(400).json({ message: "Invalid Request" });
    else{
        find(associate_id, (err, result) => {
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


const Login_=(request, response)=>{
    let {emailorphone,pass}=request.body;
    if(emailorphone==undefined || pass==undefined)
        response.status(400).json({ message: "Invalid Request" });
else{
    findby(emailorphone,(err,result)=>{
        if(err)
        response.status(500).json({ message: err });
        else if(result.length==0)
        response.status(400).json({ message: "invalid user credentials" });
        else{
            if(bcrypt.compareSync(pass,result[0].pass))
            {
                let user=result[0];
                user.pass=undefined;
                const token=jwt.sign({result:user},'qwerty369',{
                    expiresIn:'1h'
                });
                response.status(200).json({message:'login success',key:token});
            }
             else
             response.status(400).json({ message: "invalid user credentials" });
            
        }
    })
}
   

}
module.exports = { Find_, FindAll_, Add_, Update_, Remove_ ,ResetPass,Login_}