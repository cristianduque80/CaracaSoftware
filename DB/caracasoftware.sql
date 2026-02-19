-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 19-02-2026 a las 21:42:28
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
-- Estructura de tabla para la tabla `project`
--

CREATE TABLE `project` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Volcado de datos para la tabla `project`
--

INSERT INTO `project` (`id`, `title`, `description`, `user_id`) VALUES
(7, 'Prueba', '1234', 1),
(10, 'Reparacion', 'Programa para la reparacion de equipos', 1),
(17, 'Prueba2', 'PruebaPruebaPrueba', 1),
(18, 'Prueba Luis Meiker', 'Sin luz mi niño', 1),
(19, 'Prueba Luis', '12354', 3);

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
-- Indices de la tabla `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

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
-- AUTO_INCREMENT de la tabla `project`
--
ALTER TABLE `project`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
