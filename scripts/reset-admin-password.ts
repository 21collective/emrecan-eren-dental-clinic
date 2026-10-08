import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// Usage: npm run reset-admin-password -- <email> <new-password>
// Lists existing users when called without arguments.
async function main() {
  const [email, password] = process.argv.slice(2)

  if (!email || !password) {
    const users = await prisma.user.findMany({ select: { email: true, role: true } })
    console.log('Usage: npm run reset-admin-password -- <email> <new-password>')
    console.log('Existing users:', users.length ? users : 'none')
    return
  }

  if (password.length < 8) {
    console.error('Password must be at least 8 characters.')
    process.exit(1)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: { email, password: hashedPassword, name: 'Admin', role: 'admin' },
  })

  console.log(`Password updated for ${email}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
