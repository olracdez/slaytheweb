import {uuid, shuffle, random as randomBetween} from './utils.js'
import {StartRoom, MonsterRoom, CampfireRoom, BossRoom, Monster} from './dungeon-rooms.js'
import {monsters} from '../content/dungeon-encounters.js'

/*
 * A procedural generated map for Slay the Web.
 * again, heavily inspired by Slay the Spire.
 *
 * What are the rules?
 *
 * 1. The dungeon has a height (floors) and width (nodes)
 * 2. Each floor has a random number of rooms from 2 to 5
 * 3. Each floor Y has X nodes
 * 4. The order of nodes on a floor is randomized
 * 5. Starting node connects to all nodes on the first floor
 * 6. End node connects to all nodes on the last floor
 * */

const defaultOptions = {
	width: 10,
	height: 6,
	// Rooms per floor.
	minRooms: 2,
	maxRooms: 5,
	// Room types. Repeat a type to increase the chance.
	// M Monster, C Campfire, E Elite
	roomTypes: 'MMMCE',
	// customPaths: '123'
}

export default function Dungeon(options = {}) {
	const graph = generateGraph(options)
	const paths = generatePaths(graph, options.customPaths)
	const nodeFromMove = ([floor, node]) => graph[floor][node]

	// Add ".edges" to each node from the paths, so we know which connections it has.
	// Would be cool if this was part of "generatePaths".
	paths.forEach((path) => {
		path.forEach((move) => {
			const a = nodeFromMove(move[0])
			const b = nodeFromMove(move[1])
			a.edges.add(b)
		})
	})

	// Add "room" to all valid node in the graph.
	graph.forEach((floor, floorNumber) => {
		floor.map((node) => {
			if (node.type) {
				node.room = createRandomRoom(node.type, floorNumber, graph)
			}
		})
	})

	return {
		id: uuid(),
		graph,
		paths,
		x: 0,
		y: 0,
		pathTaken: [{x: 0, y: 0}],
	}
}

// Decide which type the node should be.
function decideRoomType(nodeTypes, floor /*, graph*/) {
	const pick = (types) => shuffle(Array.from(types))[0]
	if (floor < 2) return pick('MMME')
	if (floor < 3) return pick('MMMMEC')
	if (floor < 4) return pick('MMCCMME')
	if (floor < 5) return pick('MMCCMME')
	if (floor < 6) return pick('MMCMMEE')
	if (floor < 7) return pick('MCEE')
	if (floor < 8) return pick('MMEEC')
	if (floor < 9) return pick('MMEEC')
	return pick(nodeTypes)
}

// Decide which (random) room the node's type should be.
function createRandomRoom(nodeType, floor, graph) {
	if (floor === 0) return StartRoom()
	if (floor === graph.length - 1) return BossRoom()
	if (nodeType === 'M') return monsters[shuffle(Object.keys(monsters))[0]]
	if (nodeType === 'E') return MonsterRoom(Monster({intents: [{damage: 10}, {block: 5}], hp: 30}))
	if (nodeType === 'C') return CampfireRoom()
	throw new Error(`Could not match node type ${nodeType} with a dungeon room`)
}

function Node(type = false) {
	return {type, edges: new Set(), room: undefined}
}

// Returns a "graph" of the map we want to render using nested arrays for the floors and nodes.
// graph = [
// 	[startNode]
// 	[node, node, node],
// 	[node, node, node],
// 	[node, node, node],
// 	[bossNode]
// ]
export function generateGraph(props) {
	const graph = []
	const {height, width, minRooms, maxRooms, roomTypes} = Object.assign(defaultOptions, props)

	// Create a row of nodes on each floor.
	for (let floorNumber = 0; floorNumber < height; floorNumber++) {
		const floor = []
		// Each floor as X amount of rooms.
		let numberOfRooms = randomBetween(minRooms, maxRooms)
		if (numberOfRooms > width) numberOfRooms = width
		for (let i = 0; i < numberOfRooms; i++) {
			floor.push(Node(decideRoomType(roomTypes, floorNumber, graph)))
		}
		// And fill it up with empty nodes.
		while (floor.length < width) {
			floor.push(Node())
		}
		// Randomize the order.
		graph.push(shuffle(floor))
	}

	// Finally, add start end end nodes, in this order.
	graph.unshift([Node('start')])
	graph.push([Node('boss')])

	return graph
}

// Returns an array of possible paths from start to finish.
export function generatePaths(graph, customPaths) {
	const paths = []
	// The "customPaths" argument should be a string of indexes from where to draw the paths,
	// For example "530" would draw three paths. First at index 5, then 3 and finally 0.
	if (customPaths) {
		Array.from(customPaths).forEach((value) => {
			const path = findPath(graph, Number(value))
			paths.push(path)
		})
	} else {
		// Otherwise draw a path for each column.
		graph[1].forEach((column, index) => {
			const path = findPath(graph, index)
			paths.push(path)
		})
	}
	return paths
}

// Finds a path from start to finish in the graph.
// Pass it an index of the column you'd like the path to follow where possible.
// Returns an array of moves. Each move contains the Y/X coords of the graph.
// Note, it is Y/X and not X/Y.
// [
// 	[[0, 0], [1,4]], <-- first move.
// 	[[1, 4], [2,1]] <-- second move
// ]
export function findPath(graph, preferredIndex, debug = false) {
	let path = []
	let lastVisited
	if (debug) console.groupCollapsed('finding path', preferredIndex)

	// Look for a free node in the next floor to the right of the "desired index".
	const validNode = (node) => node && Boolean(node.type)

	// Walk through each floor.
	for (let [floorIndex, floor] of graph.entries()) {
		if (debug) console.group(`floor ${floorIndex}`)
		const nextFloor = graph[floorIndex + 1]
		let aIndex = preferredIndex
		let bIndex = preferredIndex

		// If on last floor, stop drawing.
		if (!nextFloor) {
			if (debug) console.log('no next floor, stopping')
			if (debug) console.groupEnd()
			break
		}

		// Find the node we came from.
		let a = lastVisited
		const newAIndex = floor.indexOf(a)
		if (a) {
			if (debug) console.log('changing a index to', newAIndex)
			aIndex = newAIndex
		} else {
			if (debug) console.log('forcing "from" to first node in floor')
			a = floor[0]
			aIndex = 0
		}
		if (!a) throw Error('missing from')

		// Find the node we are going to.
		// Search to the right of our index.
		let b
		for (let i = bIndex; i < nextFloor.length; i++) {
			if (debug) console.log('searching forwards', i)
			let node = nextFloor[i]
			if (validNode(node)) {
				if (debug) console.log('choosing', i)
				b = node
				bIndex = i
				break
			}
		}
		// No result? Search to the left instead.
		if (!b) {
			for (let i = bIndex; i >= 0; i--) {
				if (debug) console.log('searching backwards', i)
				let node = nextFloor[i]
				if (validNode(node)) {
					if (debug) console.log('choosing', i)
					b = node
					bIndex = i
					break
				}
			}
			if (!b) throw Error('missing to')
		}
		lastVisited = b

		if (debug) console.log(`connected floor ${floorIndex}:${aIndex} to ${floorIndex + 1}:${bIndex}`)
		const moveA = [floorIndex, aIndex]
		const moveB = [floorIndex + 1, bIndex]
		path.push([moveA, moveB])
		if (debug) console.groupEnd()
	}

	if (debug) console.groupEnd()
	return path
}

// For debugging purposes, logs a text representation of the map.
export function graphToString(graph) {
	graph.forEach((floor, floorNumber) => {
		let str = `${String(floorNumber).padStart(2, '0')}   `
		floor.forEach((node) => {
			if (!node.type) {
				str = str + ' '
			} else {
				str = str + node.type
			}
		})
		console.log(str)
	})
}
