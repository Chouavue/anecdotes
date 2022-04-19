import React, { useState } from 'react'

// 1.12

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
  
//   const [selected, setSelected] = useState(0)

//   const change =() => {
//     setSelected(Math.floor(Math.random()*anecdotes.length))
//   }

//   return (
//     <div>
//       <button onClick = {change}>Click Next</button>
// 			<h1>{anecdotes[selected]}</h1>
//     </div>
//   )
// }

// 1.13

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
  
// const [selected, setSelected] = useState(0)
// const [vote, setVote] = useState([0,0,0,0,0,0])

//   const change =() => {
//     setSelected(Math.floor(Math.random()*anecdotes.length))
//   }

// const voteChange = () => {
//   let copy = [...vote]
//   copy[selected]++
//   setVote(copy)

// }

// return (
//   <div>
      // <h1>{anecdotes[selected]}</h1>
//     <h1>{vote[selected]} Votes</h1>
//     <button onClick = {change}>Click Next</button>
//     <button onClick = {voteChange}>Vote</button>
//   </div>
// )

// }

//1.14
const App = () => {
	const [selected, setIndex] = useState(0)
	const [vote, setVote] = useState({
		0: 0,
		1: 3,
		2: 4,
		3: 2,
	})
	
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	const voteChange = () => {
		setVote({
			...vote,
			[selected]: vote[selected]+1
		})
	}
	
	const Max = () => {
		let max = -1, maxKey = -1
		
		for(let key in vote) {
			if (vote[key] > max) {
				maxKey = key
				max = vote[key]
			}
		}
		return maxKey
	}
	
	return (
		<div>
			<h1>Anecdote of the Day</h1>
			<h2>{anecdotes[selected]}</h2>
      <p>{vote[selected]} Votes</p>
			<button onClick = {handleChange}>Click Next</button>
			<button onClick = {voteChange}>Vote</button>
			<h1>Highest Votes</h1>
			<p>{anecdotes[Max()]}</p>
		</div>
	)
}

export default App
