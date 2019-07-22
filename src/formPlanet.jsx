import React from 'react'
export default props => (
    <form>
        <label>Name</label>
        <input onChange={props.onChange} type="text"/>
        <label>Climate</label>
        <input onChange={props.onChange} type="text"/>
        <label>Terrain</label>
        <input onChange={props.onChange} type="text"/>
        <button onClick={props.onClick}>Salvar</button>
    </form>
)