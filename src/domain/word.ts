interface Word {
  position: number
  cells: Cell[]
}

interface Cell {
  letter: string
  status: '' | 'partially' | 'absent' | 'exactly'
}

export { Word, Cell }
