const imageUrl="http://localhost:5000/uploads/images/"
const customerApi="http://localhost:5000/api/customer/"
const apiUrl="http://localhost:5000/api/"
const employeePrefix="CRZNEMP"
const associatePrefix="CRZNAST"
const customerPrefix="CRZNCUS"
const adminPrefix="CRZNADM"

const calCulateSalary=(salary)=>{
    const {basic,hra,conveyance,medical,special,insurance,pf,tax}=salary;
    return((basic+hra+conveyance+medical+special)-(insurance+pf+tax))
}

const prefixConvert = (prefix) => {
    let type = prefix.slice(4, 7);
    let id = prefix.slice(8);
    id = parseInt(id);
    if (type == 'EMP')
        return { type: "employee", id: id }
    else if (type == 'AST')
        return { type: "associate", id: id }
    else if (type == 'CUS')
        return { type: "customer", id: id }
    else if (type == 'ADM')
        return { type: "admin", id: id }
    else
        return { type: null, id: id }
}
module.exports={imageUrl,customerApi,apiUrl,employeePrefix,associatePrefix,customerPrefix,adminPrefix,calCulateSalary,prefixConvert}
