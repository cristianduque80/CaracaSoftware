-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-03-2026 a las 02:46:21
-- Versión del servidor: 8.4.3
-- Versión de PHP: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `caracasoftware`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL,
  `name` text NOT NULL,
  `lastname` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `name`, `lastname`) VALUES
(1, 'Astroduq', '$2y$10$.eYDUdIbQ1n275Hl0cSKI.1KqMID00qcWlEFBsL.jHLV5kuQ9A5cm', 'Cristian', 'Duque'),
(2, 'Prueba', '$2y$10$OSryUBrfkQNQgGVnekGT9eJ2ZOMwmlRl8GZj9cUUMT35tq/h2V.I6', 'Cristian', 'Aristobulo'),
(3, 'LittleDuque', '$2y$10$LxgZH3JkHGTlDJWrrnjtM.5ZZcDBrLFo/XmdN8KE/8PYu/U8rSS.6', 'Alex', 'Duque');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `investor`
--

CREATE TABLE `investor` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `lastname` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Volcado de datos para la tabla `investor`
--

INSERT INTO `investor` (`id`, `username`, `password`, `name`, `lastname`) VALUES
(1, 'Astroduq', '$2y$10$sqa1.Wh3WR/GVyL/Hs4eF.WVwy4t9dNVvyRjB3l7H/7eFgEztdSdO', 'Cristian', 'Duque'),
(2, 'Luih', '$2y$10$0TLwfKhnjMjIeK.SispdMewwNK2CuncpJFZibtE0wK1N5xkQVNa2y', 'Lui', 'Meiker');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project`
--

CREATE TABLE `project` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL,
  `description` varchar(255) NOT NULL,
  `management_time` varchar(50) NOT NULL,
  `time_d` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int NOT NULL,
  `priority` text
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Volcado de datos para la tabla `project`
--

INSERT INTO `project` (`id`, `title`, `description`, `management_time`, `time_d`, `user_id`, `priority`) VALUES
(8, 'Time proyect', 'TIME', '1 Year', '2026-03-09 17:55:07', 1, 'h'),
(12, 'Prueba tiempo', '123456578', '2 Year', '2026-03-09 22:40:45', 1, 'm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_evaluation`
--

CREATE TABLE `project_evaluation` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `management_time` varchar(50) NOT NULL,
  `time_p` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_votes`
--

CREATE TABLE `project_votes` (
  `user_id` int NOT NULL,
  `project_id` int NOT NULL,
  `voted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `lastname` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `name`, `lastname`) VALUES
(1, 'Astroduq', '$2y$10$Q/ka6fK62KWSHjE0hZZu/OLK8eFIXma0Yu3jM.xn6ZaJ33mAIZWvi', 'Cristian', 'Duque'),
(3, 'Luih', '$2y$10$tCYJvI7ORHKBTzMHMWnaLOVuPYiwuALlXhYtGoz3oSszOCnXhZHja', 'Luis', 'Meiker');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `investor`
--
ALTER TABLE `investor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `project_evaluation`
--
ALTER TABLE `project_evaluation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `project_votes`
--
ALTER TABLE `project_votes`
  ADD PRIMARY KEY (`user_id`,`project_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `investor`
--
ALTER TABLE `investor`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `project`
--
ALTER TABLE `project`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `project_evaluation`
--
ALTER TABLE `project_evaluation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `project_evaluation`
--
ALTER TABLE `project_evaluation`
  ADD CONSTRAINT `project_evaluation_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `project_votes`
--
ALTER TABLE `project_votes`
  ADD CONSTRAINT `project_votes_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project_evaluation` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `project_votes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `investor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
