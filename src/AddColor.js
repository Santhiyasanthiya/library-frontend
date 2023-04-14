import React, { useState } from 'react'
import { ColorBox } from './ColorBox'

export function AddColor() {
    const [color, setColor] = useState("orange")

    const colorStyles = {
                background:color,
                color:"white",
                marginTop:"30px"
            }
            
 const [colorList, setColorList] = useState(["green", "blue", "red", "yellow"])


  return (
    <div className='add-color'>
          <input style={colorStyles} 
          type="text" 
          placeholder='Enter a Color'
          onChange={(event) => setColor(event.target.value)}
          value={color}
         />
     <button onClick={()=> setColorList([...colorList, color]) }>Add-Color</button>



{ 
colorList.map((list)=> <ColorBox updateColor={list} />)
}
    </div>
  )
  }

