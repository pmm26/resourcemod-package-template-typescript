import {
  int,
  bigint,
  mysqlEnum,
  mysqlTable,
  uniqueIndex,
  timestamp,
  varchar,
  serial,
} from "drizzle-orm/mysql-core";

// `sa_bans` (
//   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   `player_steamid` VARCHAR(64),
//   `player_name` VARCHAR(128),
//   `player_ip` VARCHAR(128),
//   `admin_steamid` VARCHAR(64) NOT NULL,
//   `admin_name` VARCHAR(128) NOT NULL,
//   `reason` VARCHAR(255) NOT NULL,
//   `duration` INT NOT NULL,
//   `ends` TIMESTAMP NOT NULL,
//   `created` TIMESTAMP NOT NULL,
// `server_id` INT NULL,
//   `status` ENUM('ACTIVE', 'UNBANNED', 'EXPIRED', '') NOT NULL DEFAULT 'ACTIVE'

export const saBans = mysqlTable("sa_bans", {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  player_steamid: varchar("player_steamid", { length: 128 }).notNull(),
  player_name: varchar("player_name", { length: 128 }).notNull(),
  player_ip: varchar("player_ip", { length: 128 }),
  admin_steamid: varchar("admin_steamid", { length: 128 }).notNull(),
  admin_name: varchar("admin_name", { length: 128 }).notNull(),
  reason: varchar("reason", { length: 255 }).notNull(),
  duration: int("duration").notNull(),
  created: timestamp("created").notNull(),
  ends: timestamp("ends").notNull(),
  server_id: int("server_id"),
  status: mysqlEnum("status", ["ACTIVE", "UNBANNED", "EXPIRED", ""])
    .notNull()
    .default("ACTIVE"),
});

// `sa_mutes` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `player_steamid` varchar(64) NOT NULL,
//   `player_name` varchar(128) NULL,
//   `admin_steamid` varchar(64) NOT NULL,
//   `admin_name` varchar(128) NOT NULL,
//   `reason` varchar(255) NOT NULL,
//   `duration` int(11) NOT NULL,
//   `ends` timestamp NOT NULL,
//   `created` timestamp NOT NULL,
//   `type` enum('GAG','MUTE','SILENCE','') NOT NULL DEFAULT 'GAG',
//   `server_id` INT NULL,
//   `status` enum('ACTIVE','UNMUTED','EXPIRED','') NOT NULL DEFAULT 'ACTIVE',
//   PRIMARY KEY (`id`)

export const saMutes = mysqlTable("sa_mutes", {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  player_steamid: varchar("player_steamid", { length: 128 }).notNull(),
  player_name: varchar("player_name", { length: 128 }),
  admin_steamid: varchar("admin_steamid", { length: 128 }).notNull(),
  admin_name: varchar("admin_name", { length: 128 }).notNull(),
  reason: varchar("reason", { length: 255 }).notNull(),
  duration: int("duration").notNull(),
  created: timestamp("created").notNull(),
  ends: timestamp("ends").notNull(),
  type: mysqlEnum("type", ["GAG", "MUTE", "SILENCE", ""]).notNull().default("GAG"),
  server_id: int("server_id"),
  status: mysqlEnum("status", ["ACTIVE", "UNMUTED", "EXPIRED", ""])
    .notNull()
    .default("ACTIVE"),
});

// `sa_admins` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `player_steamid` varchar(64) NOT NULL,
//   `player_name` varchar(128) NOT NULL,
//   `flags` TEXT NOT NULL,
//   `immunity` varchar(64) NOT NULL DEFAULT '0',
//   `server_id` INT NULL,
//   `ends` timestamp NULL,
//   `created` timestamp NOT NULL,
//   PRIMARY KEY (`id`)

export const saAdmins = mysqlTable("sa_admins", {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  player_steamid: varchar("player_steamid", { length: 128 }).notNull(),
  player_name: varchar("player_name", { length: 128 }).notNull(),
  flags: varchar("flags", { length: 128 }).notNull(),
  immunity: varchar("immunity", { length: 128 }).notNull().default("0"),
  created: timestamp("created").notNull(),
  ends: timestamp("ends"),
  server_id: int("server_id"),
});


// `sa_servers` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `address` varchar(64) NOT NULL,
//   `hostname` varchar(64) NOT NULL,
//   PRIMARY KEY (`id`),
//   UNIQUE KEY `address` (`address`)

export const saServers = mysqlTable("sa_servers", {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  address: varchar("address", { length: 128 }).notNull(),
  hostname: varchar("hostname", { length: 128 }).notNull(),
});