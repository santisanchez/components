import Button from 'atoms/button'
import TextInput from 'atoms/text-input'
import React from 'react'

export const SubmitForm = ({onSubmit}) => {
    return (<form onSubmit={onSubmit}>
        <TextInput name={"username"} />
        <Button text={"submit"}/>
    </form>)
}
