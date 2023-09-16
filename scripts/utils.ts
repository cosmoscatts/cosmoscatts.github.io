import * as path from 'node:path'

export const resolvePath = (p: string) => path.resolve(__dirname, '..', p)
