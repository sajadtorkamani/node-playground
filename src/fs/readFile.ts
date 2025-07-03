import { readFile } from 'node:fs/promises'
import { getRootDir } from '../_utils/root-dir.js'
import path from 'node:path'

const rootDir = await getRootDir()
const exampleTxtFile = path.join(rootDir, 'data', 'example.txt')
const exampleTxtFileContents = await readFile(exampleTxtFile, {
  encoding: 'utf-8',
})

console.log(exampleTxtFileContents)
