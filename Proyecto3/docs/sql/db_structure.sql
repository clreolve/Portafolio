-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-08-2022 a las 23:24:23
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto3sql`
--
CREATE DATABASE IF NOT EXISTS `proyecto3sql` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyecto3sql`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chats`
--

DROP TABLE IF EXISTS `chats`;
CREATE TABLE `chats` (
  `id_chat` int(11) NOT NULL,
  `key_chat` int(11) DEFAULT NULL,
  `icon` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chats_relations`
--

DROP TABLE IF EXISTS `chats_relations`;
CREATE TABLE `chats_relations` (
  `id_relation` int(11) NOT NULL,
  `id_chat` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `id_group` int(11) NOT NULL,
  `name_group` varchar(128) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `icon` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups_users`
--

DROP TABLE IF EXISTS `groups_users`;
CREATE TABLE `groups_users` (
  `id_group` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id_task` int(11) NOT NULL,
  `id_owner` int(11) DEFAULT NULL,
  `Nombre` varchar(128) DEFAULT NULL,
  `Descripción` varchar(256) DEFAULT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `espires` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks_users`
--

DROP TABLE IF EXISTS `tasks_users`;
CREATE TABLE `tasks_users` (
  `id_user` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` int(11) NOT NULL,
  `mail` int(11) NOT NULL,
  `pass` varchar(128) NOT NULL,
  `name` varchar(128) DEFAULT NULL,
  `lastname` varchar(128) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `icon` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ìmages`
--

DROP TABLE IF EXISTS `ìmages`;
CREATE TABLE `ìmages` (
  `id_image` int(11) NOT NULL,
  `path` varchar(256) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id_chat`),
  ADD KEY `FK_chats_ìmages` (`icon`);

--
-- Indices de la tabla `chats_relations`
--
ALTER TABLE `chats_relations`
  ADD PRIMARY KEY (`id_relation`),
  ADD KEY `FK__chats` (`id_chat`),
  ADD KEY `FK__users` (`id_user`),
  ADD KEY `FK__groups` (`id_group`);

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id_group`) USING BTREE,
  ADD KEY `FK_groups_ìmages` (`icon`);

--
-- Indices de la tabla `groups_users`
--
ALTER TABLE `groups_users`
  ADD PRIMARY KEY (`id_group`,`id_user`),
  ADD KEY `FK_groups_users_users` (`id_user`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id_task`),
  ADD KEY `FK_tasks_users` (`id_owner`);

--
-- Indices de la tabla `tasks_users`
--
ALTER TABLE `tasks_users`
  ADD PRIMARY KEY (`id_user`,`id_task`),
  ADD KEY `FK_tasks_users_groups` (`id_group`),
  ADD KEY `FK_tasks_users_tasks` (`id_task`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD KEY `FK_users_ìmages` (`icon`) USING BTREE;

--
-- Indices de la tabla `ìmages`
--
ALTER TABLE `ìmages`
  ADD PRIMARY KEY (`id_image`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `FK_chats_ìmages` FOREIGN KEY (`icon`) REFERENCES `ìmages` (`id_image`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `chats_relations`
--
ALTER TABLE `chats_relations`
  ADD CONSTRAINT `FK__chats` FOREIGN KEY (`id_chat`) REFERENCES `chats` (`id_chat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK__groups` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id_group`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK__users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `groups`
--
ALTER TABLE `groups`
  ADD CONSTRAINT `FK_groups_ìmages` FOREIGN KEY (`icon`) REFERENCES `ìmages` (`id_image`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `groups_users`
--
ALTER TABLE `groups_users`
  ADD CONSTRAINT `FK_groups_users_groups` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id_group`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_groups_users_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `FK_tasks_users` FOREIGN KEY (`id_owner`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tasks_users`
--
ALTER TABLE `tasks_users`
  ADD CONSTRAINT `FK_tasks_users_groups` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id_group`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_tasks_users_tasks` FOREIGN KEY (`id_task`) REFERENCES `tasks` (`id_task`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_tasks_users_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_users_ìmages` FOREIGN KEY (`icon`) REFERENCES `ìmages` (`id_image`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
