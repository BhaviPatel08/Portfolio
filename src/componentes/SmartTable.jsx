import React from 'react'

function SmartTable({field,data}) {
    // console.log(JSON.stringify(field));
    const keys = []
    field.map((item)=>{
        keys.push(item.field)
    })
    console.log(keys)
  return (
    <div>
        <table>
            <thead>

            <tr>
                {
                    keys.map((item,index)=>(
                        <th key={index}>
                        {item}
                        </th>
                    ))
                }
            
            </tr>
                </thead>
                <tbody>

            {
                data?.map((item,index)=>(
                    
                    <tr key={index}>
                        {console.log(item)}
                        {keys.map((ke,ind)=>(
                            <td key={ind}>{item[`${ke}`]}</td>
                        ))}
                    </tr>
                ))
            }
            </tbody>
            
        </table>
    </div>
  )
}

export default SmartTable