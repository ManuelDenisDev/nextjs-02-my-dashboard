'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice'
import { useEffect } from 'react'

interface CartCounterProps {
    value?: number
}

// Generated by https://quicktype.io
export interface CounterResponse {
    method: string
    count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then((res) => res.json())
    return data
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
    //@ts-ignore
    const count = useAppSelector((state) => state.counter.count)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(initCounterState(value))
    // }, [dispatch, value])

    useEffect(() => {
        getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
    }, [dispatch])

    return (
        <div className="flex flex-col items-center justify-between space-y-4">
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button
                    onClick={() => dispatch(addOne())}
                    className="flex items-center justify-center p-4 rounded bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-4">
                    +1
                </button>
                <button
                    onClick={() => dispatch(substractOne())}
                    className="flex items-center justify-center p-4 rounded bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-4">
                    -1
                </button>
            </div>
        </div>
    )
}
