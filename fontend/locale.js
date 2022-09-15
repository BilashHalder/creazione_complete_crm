const imageUrl="http://localhost:5000/uploads/images/"
const customerApi="http://localhost:5000/api/customer/"
const apiUrl="http://localhost:5000/api/"

const calCulateSalary=(salary)=>{
    const {basic,hra,conveyance,medical,special,insurance,pf,tax}=salary;
    return((basic+hra+conveyance+medical+special)-(insurance-pf-tax))
}
module.exports={imageUrl,customerApi,apiUrl,calCulateSalary}