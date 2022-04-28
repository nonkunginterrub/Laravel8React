// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = "http://localhost:8100/api/products"

function App() {
  // สร้างตัวแปรแบบ state ไว้เก็บข้อมูลที่ได้จาก api
  // การสร้างตัวแปรแบบ state ด้วย React Hook
  const [ products, setProducts ] = useState(null)

  useEffect(() => {
    const token = "3|ku4sQcvWG7Nkf9usulfMMQz3ufNdrfgJodMke3mA"
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    // เขียนฟังกืชั่นการอ่านข้อมูลด้วย axios
    axios.get(baseURL, config).then((Response) => {
      setProducts(Response.data)
      // console.log(Response.data)
    })
  }, [])

  if (!products) return null

  console.log({ products })

  return (
    <div>
      <h1>Product List ({products.length})</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Price</th>
            <th>CreatedDate</th>
            <th>ModifiedDate</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.slug}</td>
                  <td>{element.price}</td>
                  <td>{element.created_at}</td>
                  <td>{element.updated_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
//   return (
//     <>
//       <h1>Product List ({ products.length })</h1>
//      <table border="1">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Image</th>
//           <th>ProductName</th>
//           <th>UnitPrice</th>
//           <th>UnitInStock</th>
//           <th>CreatedDate</th>
//           <th>ModifiedDate</th>
//         </tr>
//       </thead>
//       <tbody>
//         { products.map(Element => {
//           return (
//             <tr key={Element.id}>
//               <td>{Element.id}</td>
//               <td><img src={Element.ProductPicture} width="100" alt="" /></td>
//               <td>{Element.ProductName}</td>
//               <td>{Element.UnitPrice}</td>
//               <td>{Element.UnitInStock}</td>
//               <td>{Element.CreatedDate}</td>
//               <td>{Element.ModifiedDate}</td>
//             </tr>
//           )
//         } )}
        
//       </tbody>
//      </table>
//     </>
//   );
}

export default App;
