import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { init } from '@paralleldrive/cuid2'

const createId = init({
  length: 12,
})

export const components = sqliteTable('components', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  slug: text('slug').$defaultFn(() => createId()),
  description: text('description').notNull(),
  code: text('code'),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).$default(() => new Date()),
})