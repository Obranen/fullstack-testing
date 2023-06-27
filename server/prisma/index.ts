import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const post = await prisma.post.create({
    data: {
      title: 'My first post - title',
      body: 'My first post - body'
    }
  })
  console.log(post)
}


main()
// .then(async () => {
//   await prisma.$disconnect()
// })
// .catch(async (e) => {
//   console.error(e)
//   await prisma.$disconnect()
//   process.exit(1)
// })
