import React from 'react'

export default function Cart({ order, quantity, setQuantity }) {
    return (
        <div className='w-full min-h-[3em] border-2 border-gray-100 p-4 mb-4'>
            <h2 className='my-2'>Your selected product :</h2>
            <ul className='w-full gap-3 my-4 '>
                <li className='flex flex-col justify-between gap-2 px-4 py-1 bg-white md:flex-row md:items-center' >
                    <span className='font-bold text-md'>{order.item}</span>
                    <div className='flex items-center gap-4'>
                        <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} min={1} max={20} className=' grow font-semibold px-4 py-2 max-w-[200px] text-lg' /> items
                    </div>
                </li>
            </ul>
        </div>
    )
}
