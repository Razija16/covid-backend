CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `is_admin` boolean,
  `createdAt` varchar(255)
);

CREATE TABLE `Case` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` varchar(255),
  `closedAt` varchar(255),
  `active` boolean,
  `isolation_days` int,
  `userId` int
);

CREATE TABLE `CaseDay` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` varchar(255),
  `caseId` int,
  `alert_type` int,
  `temperature` float
);

CREATE TABLE `PossibleSymptom` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `alert_type` int
);

CREATE TABLE `CaseDaySymptoms` (
  `casedayId` int,
  `possiblesymptomId` int
);

CREATE TABLE `Intervention` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` varchar(255),
  `alert_type` int,
  `interventionteamId` int,
  `handled` boolean,
  `userId` int,
  `report` text,
  `casedayId` int
);

CREATE TABLE `InterventionTeam` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `alert_type` int,
  `name` varchar(255)
);

CREATE TABLE `InterventionTeamMember` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `interventionteamId` int
);

ALTER TABLE `Case` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`id`);

ALTER TABLE `CaseDay` ADD FOREIGN KEY (`caseId`) REFERENCES `Case` (`id`);

ALTER TABLE `CaseDaySymptoms` ADD FOREIGN KEY (`casedayId`) REFERENCES `CaseDay` (`id`);

ALTER TABLE `CaseDaySymptoms` ADD FOREIGN KEY (`possiblesymptomId`) REFERENCES `PossibleSymptom` (`id`);

ALTER TABLE `Intervention` ADD FOREIGN KEY (`interventionteamId`) REFERENCES `InterventionTeam` (`id`);

ALTER TABLE `Intervention` ADD FOREIGN KEY (`casedayId`) REFERENCES `CaseDay` (`Id`);

ALTER TABLE `Intervention` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`id`);

ALTER TABLE `InterventionTeamMember` ADD FOREIGN KEY (`interventionteamId`) REFERENCES `InterventionTeam` (`id`);