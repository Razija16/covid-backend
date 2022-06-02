CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `is_admin` boolean,
  `is_super_admin` boolean,
  `created_at` datetime
);

CREATE TABLE `Case` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `created_at` datetime,
  `closed_at` datetime,
  `active` boolean,
  `isolation_days` int,
  `user_id` int
);

CREATE TABLE `CaseDay` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `created_at` datetime,
  `case_id` int,
  `alert_type` int
  `temperature` float
);

CREATE TABLE `PossibleSymptom` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `created_at` datetime,
  `name` varchar(255),
  `description` text
);

CREATE TABLE `CaseDaySymptoms` (
  `case_day_id` int,
  `possible_symptom_id` int,
);

CREATE TABLE `Intervention` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `alert_type` int,
  `intervention_team_id` int,
  `user_id` int,
  `report` text,
  `case_day_symptoms_id` int
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
  `intervention_team_id` int
);

ALTER TABLE `Case` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `CaseDay` ADD FOREIGN KEY (`case_id`) REFERENCES `Case` (`id`);

ALTER TABLE `CaseDaySymptoms` ADD FOREIGN KEY (`case_day_id`) REFERENCES `CaseDay` (`id`);

ALTER TABLE `CaseDaySymptoms` ADD FOREIGN KEY (`possible_symptom_id`) REFERENCES `PossibleSymptom` (`id`);

ALTER TABLE `Intervention` ADD FOREIGN KEY (`intervention_team_id`) REFERENCES `InterventionTeam` (`id`);

ALTER TABLE `Intervention` ADD FOREIGN KEY (`case_day_symptoms_id`) REFERENCES `CaseDaySymptoms` (`case_day_id`);

ALTER TABLE `Intervention` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `InterventionTeamMember` ADD FOREIGN KEY (`intervention_team_id`) REFERENCES `InterventionTeam` (`id`);
