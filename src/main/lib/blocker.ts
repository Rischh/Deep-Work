import * as fs from 'fs'
import { writeFile } from 'node:fs/promises'

// path
const filePath = '/etc/hosts'
const redirectPath = '0.0.0.0'

// Website to block
const unprodWebsites = [
  'www.tiktok.com',
  'www.facebook.com',
  'www.instagram.com',
  'www.netflix.com'
]

const delay = 100000

const blocker = async (
  filePath: string,
  redirectPath: string,
  unprodWebsites: string[],
  delay: number
): Promise<void> => {
  // write content on host file
  const content = await writeFile(filePath, `${redirectPath} ${unprodWebsites}`, {
    flag: 'a'
  })
  console.log(content)

  const oldText = `${redirectPath} ${unprodWebsites}`
  const reset = ''

  // clear le contenu au bout du delay convenu
  //const timeoutID =
  setTimeout((): void => {
    let remplacement = fs.readFileSync(filePath, 'utf8')
    remplacement = remplacement.replace(new RegExp(oldText, 'g'), reset)
    fs.writeFileSync(filePath, remplacement, 'utf8')
  }, delay)

  // prévoir clearTimeout(timeoutID) si jamais
}

export { delay, filePath, redirectPath, unprodWebsites }
