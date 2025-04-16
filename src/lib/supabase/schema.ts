import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

export const workspace = pgTable("workspace", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at',{
    withTimezone:true,
    mode:'string'
  }),
  workspaceOwnner: uuid('workspace_ownner').notNull(),
  title: text('title').notNull(),
  iconid: text('iconid').notNull(),
  data: text('data').notNull(),
  inTrash: text('in_trash').notNull(),
  logo: text('logo').notNull(),
  bannerurl: text('bannerurl').notNull(),
});