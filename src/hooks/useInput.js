import { useState } from 'react'

export default function useInput() {
    const [value, setValue] = useState();


    const handleChanges = (e) => {
        setValue({[e.target.name]: e.target.value})
    }

    return [value, setValue, handleChanges]
}
