// import React from 'react';
//
// function Products(props) {
//     const arr = [
//         {name: 'milk', price: 50, left: 30 },
//         {name: 'bread', price: 15, left: 2 },
//         {name: 'water', price: 15, left: 0 },
//         {name: 'meet', price: 500, left: 15 },
// //     ];
// const filtered = arr.filter( (product) => {
//     if (product.left !== 0){
//         return true;
//     }
// });
// //     const filtered = arr.filter((product) =>
// //          product.left !== 0
// //     )
//     const filtered = arr.filter((p) =>
//     p.left !== 0);
//
//
// // function powerFunc(){
// //     alert()
// // }
// //     const myFunc = () => {
// //     alert()
// // }
// // myFunc()
//
//     // const myFunction = p => p / 2;
//     //
//     // function myFunction2(product){
//     //     return product / 2;
//     // }
//     // (number) => number *2;
//     //
//     // (number) => {
//     //     return number *2;
//     // }
//
// const newProducts = filtered.map((product) =>{
//     return(
//         <tr>
//             <td>
//                 {product.name}
//             </td>
//             <td>
//                 {product.price}
//             </td>
//             <td>
//                 {product.left}
//             </td>
//         </tr>
//     );
// });
//
//
//     return (
//         <div>
//             {newProducts}
//         </div>
//     );
// }
//
// export default Products;