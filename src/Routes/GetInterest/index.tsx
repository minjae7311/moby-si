/** @format */

import React, {useState} from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import {GET_INTEREST} from "./mutations.gql"
// import {GetAllInterest} from "../../types/api";
// import { SIForm } from '../SIForm';
// // import queryString from 'query-string'
// import Search from '../../Components/Style/Search'
// import './main.css'

// export const GetInterests: React.SFC = ({location}:any) => {
//   const [page, setPage] = useState({
//     page : 1
//   })

//   const [limit] = useState({
//     limit : 2
//   })
 
//   const {data} = useQuery<GetAllInterest>(
//     GET_INTEREST,
//     {
//       variables:{page: page.page}
//     }
//   )
//   const interestId = data?.GetAllInterest.interests
//   const interestNumb = data?.GetAllInterest.number
//   const getInterest = interestId?.sort((a: any,b: any) => a.id - b.id);

//   const style={
//     gridTemplateColumns: '25% 25% 25% 25%'
//   }

//   let Page_Arr = [] as any;
//   for(let i = 1; i <= Math.ceil(interestNumb as any / limit.limit); i++) {
//     Page_Arr.push(i);
//   }

//   function paging(currentPage): any{
//     const pageCnt = 5;
//     const totalPage = Page_Arr.length
//     const pageGroup = Math.ceil(currentPage / pageCnt);

//     let last = pageGroup * pageCnt;
//     if(last > totalPage){return last = totalPage;}

//     let first = last - (pageCnt - 1)
//     const next = last + 1;
//     const prev = first - 1;

//     if (totalPage < 1) {
//       first = last;
//     }

//     if (first > 5) {
//       return <li className='page_num'><a onClick={()=>true} style={{marginLeft: "2px"}}>prev</a></li>
//     }

//     let qwe=''
//     for (let i = first; i <= last; i++){
//       if (currentPage === (i)){
//         qwe += <li>{i}</li>
//       } else if (i > 0) {
//         qwe += <li>{i}</li>
//       }
//     }

//     if(next > 5 && next < totalPage){
//       return <li className='page_num'><a onClick={()=>true} style={{marginLeft: "2px"}}>next</a></li>
//     }
//   }

//    // let searchInput = queryString.parse(location.search)
//   // console.log(searchInput)

//   return (
//     <SIForm>
//       <div className='List'>
//         <div className='list_grid list_tit' style={style}>
//           <div> Id </div>
//           <div> Interests </div>
//           <div> Create </div>
//           <div> Update </div>
//         </div>

//         {getInterest ? getInterest.map( (item: any, index: any) => {
//           const createStamp = item.createdAt * 1
//           const updateStamp = item.updatedAt * 1
//           const createDate = new Date(createStamp).toLocaleString()
//           const updateDate = new Date(updateStamp).toLocaleString()
//             return(
//               <div className='list_data list_text' style={style} key={index}>
//                 <div> {item.id} </div>
//                 <div> {item.name} </div>
//                 <div> {createDate} </div>
//                 <div> {updateDate} </div>
//               </div>
//             )
//           })
//         :null}
//         <div className='paging_div'>
//           <div> </div>
//           <div>
//             <ul>
//               <div></div>
//               {paging(page.page)}
//               {/* {Page_Arr ? Page_Arr.map( (item, index) => {
//                 return(
//                   item === page.page ? 
//                   <li key={index} className='page_num'> <b> {item} </b> </li>
//                   : 
//                   <li key={index} className='page_num' onClick={() => setPage({page: item})}> {item} </li>
//                   )
//                 })
//                 : null
//               } */}
//             </ul>
//             <Search />
//           </div>
//         </div>
//       </div>
//     </SIForm>
//   );
// }
