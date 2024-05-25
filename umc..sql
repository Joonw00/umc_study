CREATE TABLE `Users` (
	`userID`	INT	NULL,
	`email`	VARCHAR(255)	NOT NULL,
	`username`	VARCHAR(255)	NOT NULL,
	`gender`	VARCHAR(1)	NOT NULL,
	`birth`	datetime	NULL,
	`address`	varchar(255)	NULL,
	`prefer_food`	varchar(2)	NULL,
	`point`	varchar(10)	NULL
);

CREATE TABLE `Regions` (
	`regionID`	INT	NULL,
	`regionName`	VARCHAR(255)	NOT NULL
);

CREATE TABLE `Stores` (
	`storeID`	INT	NULL,
	`storeName`	VARCHAR(255)	NOT NULL,
	`address`	VARCHAR(255)	NULL,
	`description`	TEXT	NULL,
	`regionID`	INT	NULL
);

CREATE TABLE `Missions` (
	`missionID`	INT	NULL,
	`missionTitle`	VARCHAR(255)	NOT NULL,
	`missionDescription`	TEXT	NULL,
	`missionPoints`	INT	NULL,
	`storeID`	INT	NULL
);

CREATE TABLE `UserMissions` (
	`userMissionID`	INT	NULL,
	`completionDate`	DATE	NULL,
	`status`	VARCHAR(50)	NULL,
	`userID`	INT	NULL,
	`missionID`	INT	NULL
);

CREATE TABLE `Reviews` (
	`reviewID`	SERIAL	NULL,
	`rating`	INT	NULL,
	`reviewText`	TEXT	NULL,
	`reviewDate`	TIMESTAMP	NULL,
	`userID`	INT	NULL
);

ALTER TABLE `Users` ADD CONSTRAINT `PK_USERS` PRIMARY KEY (
	`userID`
);

ALTER TABLE `Regions` ADD CONSTRAINT `PK_REGIONS` PRIMARY KEY (
	`regionID`
);

ALTER TABLE `Stores` ADD CONSTRAINT `PK_STORES` PRIMARY KEY (
	`storeID`
);

ALTER TABLE `Missions` ADD CONSTRAINT `PK_MISSIONS` PRIMARY KEY (
	`missionID`
);

ALTER TABLE `UserMissions` ADD CONSTRAINT `PK_USERMISSIONS` PRIMARY KEY (
	`userMissionID`
);

ALTER TABLE `Reviews` ADD CONSTRAINT `PK_REVIEWS` PRIMARY KEY (
	`reviewID`
);

