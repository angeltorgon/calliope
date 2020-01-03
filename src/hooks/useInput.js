import { useState } from 'react'

export default function useInput() {
    const [value, setValue] = useState();


    const onChange = () => {
        setValue({[e.target.name]: e.target.value})
    }

    return [value, setValue]
}
