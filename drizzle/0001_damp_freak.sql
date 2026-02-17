CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`whatsapp` varchar(20) NOT NULL,
	`email` varchar(320) NOT NULL,
	`revenue` varchar(50) NOT NULL,
	`unnichatContactId` varchar(255),
	`status` enum('pending','contacted','converted','failed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
