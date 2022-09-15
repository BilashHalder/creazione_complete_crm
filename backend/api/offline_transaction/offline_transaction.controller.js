const { add, update, find, findall, remove } = require("./offline_transaction.service");
let tran_info={};

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
    const { customer_id, transaction_id, amount} = request.body;
    if (customer_id == undefined || transaction_id == undefined || amount == undefined )
        response.status(400).json({ message: "Invalid Request " });
    else if (request.files == undefined)
        response.status(400).json({ message: "Invalid Request " });
    else if (request.files.file == undefined)
        response.status(400).json({ message: "Invalid Request " });
    else {
        let certificatePdf = request.files.file;
        originalname = certificatePdf.name;
        fileExt = originalname.split('.').at(-1);
        if (fileExt != 'pdf')
            response.status(400).json({ message: "Invalid File Type" });
        else if (certificatePdf.size > 5000000)
            response.status(400).json({ message: "File size To large" });
        else {
            let newName = certificatePdf.md5 + '__' + Date.now() + '' + '.' + fileExt;
            let uploadPath = (__dirname + '../../../uploads/transactions/' + newName);
            certificatePdf.mv(uploadPath, function (err) {
                if (err)
                    response.status(500).json({ message: "Internal Server Error" });
                else {
                    tran_info.customer_id = customer_id;
                    tran_info.transaction_id = transaction_id;
                    tran_info.amount = amount;
                    tran_info.file_url = newName;
                    tran_info.status=0;
                    add(tran_info, (err, result) => {
                        if (err)
                            response.status(500).json({ message: err });
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
                const { customer_id, transaction_id, amount,status } = request.body;
                temp = result[0];
                temp.customer_id = customer_id ? customer_id : temp.customer_id;
                temp.transaction_id = transaction_id ? transaction_id : temp.transaction_id;
                temp.amount = amount ? amount : temp.amount;
                temp.status = status ? status : temp.status;
                if (request.files == undefined && request.files.certificate == undefined) {
                    update(temp, (err, res) => {
                        if (err)
                            response.status(500).json({ message: "Internal Server Error" });
                        else
                            response.status(200).json({ message: "data updated successfully", data: temp });
                    });

                }
                else {
                    let certificatePdf = request.files.file;
                    originalname = certificatePdf.name;
                    fileExt = originalname.split('.').at(-1);
                    if (fileExt != 'pdf')
                        response.status(400).json({ message: "Invalid File Type" });
                    else if (certificatePdf.size > 5000000)
                        response.status(400).json({ message: "File size To large" });
                    else {
                        let newName = certificatePdf.md5 + '__' + Date.now() + '' + '.' + fileExt;
                        let uploadPath = (__dirname + '../../../uploads/transactions/' + newName);
                        certificatePdf.mv(uploadPath, function (err) {
                            if (err)
                                response.status(500).json({ message: "Internal Server Error" });
                            else {
                                temp.file_url = newName;
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


const UserTransaction=(request, response)=>{
const {customer_id,status}=request.body;
if (isNaN(customer_id))
        response.status(400).json({ message: "Invalid Request" });
else
{
    if(status==undefined){
        findall(customer_id, (err, result) => {
            if (err)
                response.status(500).json({ message: "Internal Server Error" });
            else if (result.length == 0)
                response.status(404).json({ message: "No data found" });
            else
                response.status(200).json(result.filter((item)=>{return item.customer_id==customer_id}))
        });
    }
    else if(status>=0 && status<4){
        findall(customer_id, (err, result) => {
            if (err)
                response.status(500).json({ message: "Internal Server Error" });
            else if (result.length == 0)
                response.status(404).json({ message: "No data found" });
            else
                response.status(200).json(result.filter((item)=>{return item.customer_id==customer_id && item.status==status}))
        });
    }
    else{
        response.status(400).json({ message: "Invalid Request" });
    }

}


}
module.exports = { Find_, FindAll_, Add_, Update_, Remove_ ,UserTransaction}