CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `is_admin` boolean,
  `createdAt` varchar(255)
) ENGINE = INNODB;

CREATE TABLE `Case` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` varchar(255),
  `lastFormFill` varchar(255),
  `active` boolean,
  `isolation_days` int,
  `userId` int
) ENGINE = INNODB;

CREATE TABLE `CaseDay` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` varchar(255),
  `caseId` int,
  `alert_type` int,
  `temperature` float
)ENGINE = INNODB;

CREATE TABLE `PossibleSymptom` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `alert_type` int
)ENGINE = INNODB;

CREATE TABLE `CaseDaySymptoms` (
  `casedayId` int,
  `possiblesymptomId` int
)ENGINE = INNODB;

CREATE TABLE `Intervention` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` varchar(255),
  `alert_type` int,
  `interventionteamId` int,
  `handled` boolean,
  `userId` int,
  `report` text,
  `casedayId` int
)ENGINE = INNODB;

CREATE TABLE `InterventionTeam` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `alert_type` int,
  `name` varchar(255)
)ENGINE = INNODB;

CREATE TABLE `InterventionTeamMember` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `interventionteamId` int
)ENGINE = INNODB;

ALTER TABLE `Case` ADD CONSTRAINT `case_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE;

ALTER TABLE `CaseDay` ADD CONSTRAINT `caseday_1` FOREIGN KEY (`caseId`) REFERENCES `Case` (`id`) ON DELETE CASCADE;

ALTER TABLE `CaseDaySymptoms` ADD CONSTRAINT `casedaysymptoms_1` FOREIGN KEY (`casedayId`) REFERENCES `CaseDay` (`id`) ON DELETE CASCADE;

ALTER TABLE `CaseDaySymptoms` ADD CONSTRAINT `casedaysymptoms_2` FOREIGN KEY (`possiblesymptomId`) REFERENCES `PossibleSymptom` (`id`) ON DELETE CASCADE;

ALTER TABLE `Intervention` ADD CONSTRAINT `intervention_1` FOREIGN KEY (`interventionteamId`) REFERENCES `InterventionTeam` (`id`) ON DELETE CASCADE;

ALTER TABLE `Intervention` ADD CONSTRAINT `intervention_2` FOREIGN KEY (`casedayId`) REFERENCES `CaseDay` (`Id`) ON DELETE CASCADE;

ALTER TABLE `Intervention` ADD CONSTRAINT `intervention_3` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE;

ALTER TABLE `InterventionTeamMember` ADD CONSTRAINT `interventionteammember_1` FOREIGN KEY (`interventionteamId`) REFERENCES `InterventionTeam` (`id`) ON DELETE CASCADE;