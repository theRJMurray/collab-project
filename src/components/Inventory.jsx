import React from 'react'

const Inventory = () => {
	let items = [
		{name: 'axe', quantity: '1'},
		{name: 'wood', quantity: '1'}
	]
	return <div style={{width: 300, height: 350, background: '#EEE', position: 'absolute', bottom: 20, right: 20, border: '1px solid black'}}>
		{items.map(e => <div>
			<div>{e.name}</div>
			<div>{e.quantity}</div>
		</div>)}
	</div>
}

export default Inventory