require('dotenv').config();
const express=require("express");
const fs=require('fs');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const{validateTocken}=require('./auth/tocken_validator')



const app=express();

/**************************************
 * import all routes
 *****************************************/
const AgreementRouter=require("./api/agreement/agreement.route");
const AssociateRouter=require("./api/associate/associate.route");
const BankAccountRouter=require("./api/bank_account/bank_account.route");
const CustomerRouter=require("./api/customer/customer.route");
const DesignationRouter=require("./api/designation/designation.route");
const DocumentRouter=require("./api/document/document.route");
const EmployeeRouter=require("./api/employee/employee.route");
const EmployeeInfoRouter=require("./api/employee_info/employee_info.route");
const InvestmentRouter=require("./api/investment/invesment.route");
const NomineeRouter=require("./api/nominee/nominee.route");
const PaymentRouter=require("./api/payment/payment.route");
const QualificationRouter=require("./api/qualification/qualification.route");
const RequestRouter=require("./api/request/request.route");
const SalaryRouter=require("./api/salary/salary.route");
const WithdrawalRequestRouter=require("./api/withdrawal_request/withdrawal_request.route");
const WorkReportRouter=require("./api/work_report/work_report.route");

/***********************************
 *       All Middlewares
 **********************************/
 app.use(cors());
 app.use(express.json());
 app.use(fileUpload());






/************************************** 
 * Routes(localhost:5000/api/) base url
//domain:port/api/dbname
********************************************/


app.use("/api/agreement",AgreementRouter);
app.use("/api/associate",validateTocken,AssociateRouter);
app.use("/api/bank_account",BankAccountRouter);
app.use("/api/customer",CustomerRouter);
app.use("/api/designation",DesignationRouter);
app.use("/api/document",DocumentRouter);
app.use("/api/employee",EmployeeRouter);
app.use("/api/employee_info",EmployeeInfoRouter);
app.use("/api/investment",InvestmentRouter);
app.use("/api/nominee",NomineeRouter);
app.use("/api/payment",PaymentRouter);
app.use("/api/qualification",QualificationRouter);
app.use("/api/request",RequestRouter);
app.use("/api/salary",SalaryRouter);
app.use("/api/withdrawal_request",WithdrawalRequestRouter);
app.use("/api/work_report",WorkReportRouter);



////////////////////////***End Routing*/////////////////////////////

/************************
 * Api Documentaion Url
 *************************/
 app.get("/",(request,response)=>{
    response.send("API Documentation");
});

/**
 * To access files routes
 */
app.get('/uploads/images/:id', function (req, res) {
    id=req.params.id;
    if(fs.existsSync(`${__dirname}/uploads/images/${id}`))
     res.sendFile(`${__dirname}/uploads/images/${id}`);
     else
     res.send('invalid');
});
app.get('/uploads/agreement/:id', function (req, res) {
    id=req.params.id;
    if(fs.existsSync(`${__dirname}/uploads/agreement/${id}`))
     res.sendFile(`${__dirname}/uploads/agreement/${id}`);
     else
     res.send('invalid');
});
app.get('/uploads/certificate/:id', function (req, res) {
    id=req.params.id;
    if(fs.existsSync(`${__dirname}/uploads/certificate/${id}`))
     res.sendFile(`${__dirname}/uploads/certificate/${id}`);
     else
     res.send('invalid');
});
/****************************
 * To handle all invalid request
 * ***************************/

 app.all("*",(request,response)=>{
    response.status(500).json({
        message:"invalid request"
    });
    });


/*Server Initilization */
     app.listen(5000,()=>{
        console.log(`Api Server Running on Port No : 5000`);
    });
