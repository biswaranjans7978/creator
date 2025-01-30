import React from 'react'

function EquipmentCard({title,img,price}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
    <img src={img} alt={title} className="w-full h-20 object-cover rounded-lg mb-2" />
    <h3 className="text-sm font-bold mb-1">{title}</h3>
    {price ? <p className="text-red-500">{price}</p> : <button className="text-blue-500">Add</button>}
  </div>
  )
}

export default EquipmentCard