DROP DATABASE if exists capstone_db;

CREATE DATABASE capstone_db;

USE capstone_db;

CREATE TABLE `Users` (
                         `id` bigint  not null auto_increment,
                         `full_name` varchar(75) not null,
                         `username` varchar(100) not null,
                         `email` varchar(100) not null,
                         `password` varchar(100) not null,
                         `bio` text not null,
                         `postal_code` char(5) not null,
                         `role` char(1),
                         PRIMARY KEY (`id`)
);

CREATE TABLE `Types` (
                         `id` bigint auto_increment,
                         `type` varchar(100) not null,
                         PRIMARY KEY (`id`)
);

CREATE TABLE `Posts` (
                         `id` bigint auto_increment,
                         `event_id` bigint,
                         `title` varchar(150) not null,
                         `body` text not null,
                         `create_date` datetime not null,
                         `user_id` bigint,
                         PRIMARY KEY (`id`),
                         FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
                         FOREIGN KEY (`event_id`) REFERENCES `Types`(`id`)
);

CREATE TABLE `Locations` (
                             `id` bigint auto_increment,
                             `address_line_1` varchar(255),
                             `address_line_2` varchar(255),
                             `city` varchar(100),
                             `state` char(2),
                             `lat` float not null,
                             `long` float not null,
                             `postal_code` char(5) not null,
                             PRIMARY KEY (`id`)
);

CREATE TABLE `Events` (
                          `id` bigint auto_increment,
                          `owner_id` bigint not null,
                          `event_id` bigint,
                          `title` varchar(150) not null,
                          `description` text not null,
                          `date_created` datetime not null,
                          `location_id` bigint not null,
                          `outdoor` char(1) not null,
                          PRIMARY KEY (`id`),
                          FOREIGN KEY (`event_id`) REFERENCES `Types`(`id`),
                          FOREIGN KEY (`owner_id`) REFERENCES `Users`(`id`)
);

CREATE TABLE `Comments` (
                            `id` bigint auto_increment,
                            `title` varchar(150),
                            `content` text not null,
                            `posted_date` datetime not null,
                            `user_id` bigint,
                            `event_id` bigint,
                            `post_id` bigint,
                            PRIMARY KEY (`id`),
                            FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
                            FOREIGN KEY (`post_id`) REFERENCES `Posts`(`id`),
                            FOREIGN KEY (`event_id`) REFERENCES `Events`(`id`)
);

CREATE TABLE `users_event_types` (
                                     `user_id` bigint,
                                     `type_id` bigint,
                                     FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
                                     FOREIGN KEY (`type_id`) REFERENCES `Types`(`id`)
);

CREATE TABLE `User_event` (
                              `user_id` bigint,
                              `event_id` bigint,
                              FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
                              FOREIGN KEY (`event_id`) REFERENCES `Events`(`id`)
);

CREATE TABLE `event_dates` (
                               `event_id` bigint,
                               `date` datetime,
                               FOREIGN KEY (`event_id`) REFERENCES `Events`(`id`)
);
