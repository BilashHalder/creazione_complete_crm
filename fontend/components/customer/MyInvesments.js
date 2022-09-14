import React,{useEffect,useState} from 'react'
import {apiUrl} from '../../locale';
import axios from 'axios';
import DataTable ,{ memoize }from 'react-data-table-component';
const clickHandler=(e)=>{
  console.log(e)
}
const columns = [
  {
      name: 'Investment Id',
      selector: row => row.investment_id,
      sortable: true,
  },
  {
      name: 'Ammount',
      selector: row => row.ammount,
      sortable: true,
  },
  {
    name: 'Date & Time',
    selector: row => row.date_time,
    sortable: true,
},
{
  name: 'Return',
  selector: row => row.roi,
  sortable: true,
},
{
  name: 'Status',
  selector: row => row.status,
  sortable: true,
},
{
  button: true,
  cell:() => <button onClick={clickHandler} >Action</button>
}
];


export default function ActiveInvesments() {
 
  const [invesments, setinvesments] = useState(null)
  useEffect(()=>{
    const uid=localStorage.getItem("uid");
    axios.get(apiUrl+'investment').then((response)=>{
      let data=[]
      response.data.forEach((item)=>{
        if(item.user_id==uid){
          item.investment_id='CRZNINV000'+item.investment_id
         item.status=item.status?"Active":"Complete";
         item.date_time=item.date_time.replace("T"," ").replace(".000Z"," ");
         data.push(item);
        }
        // console.log(ite)
      });
      setinvesments(data);
      
    }).catch((err)=>{
     console.log(err);
    });
  },[]);
 
  return (
     <>
     {
      invesments?
      <DataTable
            columns={columns}
            data={invesments} pagination
        />:<div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
      
     }
    
     </>
    
  )
}


const MyDocument=()=>{
  return(
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  )
}