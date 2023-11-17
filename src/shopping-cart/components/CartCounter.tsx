'use client'

import React, { useState } from 'react'

interface CartCounterProps {
    value?: number
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
    const [count, setCount] = useState(value)

    return (
        <div className="flex flex-col items-center justify-between space-y-4">
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button
                    onClick={() => setCount(count + 1)}
                    className="flex items-center justify-center p-4 rounded bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-4">
                    +1
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="flex items-center justify-center p-4 rounded bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-4">
                    -1
                </button>
            </div>
        </div>
    )
}
