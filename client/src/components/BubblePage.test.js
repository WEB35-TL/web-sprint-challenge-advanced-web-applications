import React from 'react'
import { queryAllByTestId, render } from '@testing-library/react'
import BubblePage from './BubblePage'

test('Fetches data and renders the bubbles', async () => {
	const token =
		'ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98'
	localStorage.setItem('token', token)
	const { getByText } = render(<BubblePage />)

	await wait(() => {
		getByText(/lilac/i)
	})
	const bubble = screen.getByText(/lilac/i)

	expect(bubble).toBeInTheDocument()
})
