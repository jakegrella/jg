'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
const payload = await getPayload({ config })

export async function addEmailAction(email: string) {
  await payload.create({
    collection: 'email-subscribers',
    data: { email },
  })
}
