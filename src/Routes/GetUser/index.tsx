/** @format */

import React, {useState} from 'react';

// import { useQuery } from '@apollo/react-hooks';
// import {GET_USER} from "./mutations.gql"
// import {GetAllUsers} from "../../types/api";
// import { SIForm } from '../SIForm';

// export const GetUsers: React.SFC = () => {
//   const [page, setPage] = useState({
//     page : 1
//   })

//   const [limit] = useState({
//     limit : 10
//   })

//   const {data} = useQuery<GetAllUsers>(
//     GET_USER,
//     {
//       variables: {page: page.page}
//     }
//   )

//   const getUser = data?.GetAllUsers.users?.map((item) => item)
//   const numUser = getUser?.length
//   const style={
//     gridTemplateColumns: '7% 12% 15% 10% 10% 10% 17% 17%'
//   }

//   let Page_Arr = [] as any;
//   for(let i = 1; i <= Math.ceil(numUser as any / limit.limit); i++) {
//     Page_Arr.push(i);
//   }

//   return (
//     <SIForm>
//       <div className='List'>
//         <div className='list_grid list_tit' style={style}>
//           <div> Id </div>
//           <div> Name </div>
//           <div> PhoneNumb </div>
//           <div> Gender </div>
//           <div> BirthDate </div>
//           <div> Job </div>
//           <div> Create </div>
//           <div> Update </div>
//         </div>

//         {getUser ? getUser.map( (item: any, index: any) => {
//           const createStamp = item.createdAt * 1
//           const updateStamp = item.updatedAt * 1
//           const createDate = new Date(createStamp).toLocaleString()
//           const updateDate = new Date(updateStamp).toLocaleString()
//             return(
//               <div className='list_data list_text' style={style} key={index}>
//                 <div> {item.id} </div>
//                 <div> {item.fullName} </div>
//                 <div> {item.phoneNumber} </div>
//                 <div> {item.gender} </div>
//                 <div> {item.birthDate} </div>
//                 <div> {item.job} </div>
//                 <div> {createDate} </div>
//                 <div> {updateDate} </div>
//               </div>
//             )
//           })
//         : null}
          
//         <div className='paging_div'>
//           <div> </div>
//           <div>
//             <ul>
//               {Page_Arr ? Page_Arr.map( (item, index) => {
//                 return(
//                   item === page.page ? 
//                   <li key={index} className='page_num'> <b> {item} </b> </li>
//                   : 
//                   <li key={index} className='page_num' onClick={() => setPage({page: item})}> {item} </li>
//                   )
//                 })
//                 : null
//               }
//             </ul>
//           </div>
//         </div>

//       </div>
//     </SIForm>
//   );
// }
