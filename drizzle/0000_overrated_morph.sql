CREATE TABLE `sa_admins` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`player_steamid` varchar(128) NOT NULL,
	`player_name` varchar(128) NOT NULL,
	`flags` varchar(128) NOT NULL,
	`immunity` varchar(128) NOT NULL DEFAULT '0',
	`created` timestamp NOT NULL,
	`ends` timestamp,
	`server_id` int,
	CONSTRAINT `sa_admins_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sa_bans` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`player_steamid` varchar(128) NOT NULL,
	`player_name` varchar(128) NOT NULL,
	`player_ip` varchar(128),
	`admin_steamid` varchar(128) NOT NULL,
	`admin_name` varchar(128) NOT NULL,
	`reason` varchar(255) NOT NULL,
	`duration` int NOT NULL,
	`created` timestamp NOT NULL,
	`ends` timestamp NOT NULL,
	`server_id` int,
	`status` enum('ACTIVE','UNBANNED','EXPIRED','') NOT NULL DEFAULT 'ACTIVE',
	CONSTRAINT `sa_bans_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sa_mutes` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`player_steamid` varchar(128) NOT NULL,
	`player_name` varchar(128),
	`admin_steamid` varchar(128) NOT NULL,
	`admin_name` varchar(128) NOT NULL,
	`reason` varchar(255) NOT NULL,
	`duration` int NOT NULL,
	`created` timestamp NOT NULL,
	`ends` timestamp NOT NULL,
	`type` enum('GAG','MUTE','SILENCE','') NOT NULL DEFAULT 'GAG',
	`server_id` int,
	`status` enum('ACTIVE','UNMUTED','EXPIRED','') NOT NULL DEFAULT 'ACTIVE',
	CONSTRAINT `sa_mutes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sa_servers` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`address` varchar(128) NOT NULL,
	`hostname` varchar(128) NOT NULL,
	CONSTRAINT `sa_servers_id` PRIMARY KEY(`id`)
);
