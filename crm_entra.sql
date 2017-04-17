-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 17, 2017 at 08:26 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crm_entra`
--

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `page_id` int(11) NOT NULL,
  `page_title` varchar(255) NOT NULL,
  `page_detail` varchar(255) NOT NULL,
  `page_summary` text NOT NULL,
  `page_meta` varchar(255) NOT NULL,
  `page_metaContent` varchar(255) NOT NULL,
  `page_metaKeyword` varchar(255) NOT NULL,
  `page_metaTags` varchar(255) NOT NULL,
  `page_header` varchar(255) NOT NULL,
  `page_slider` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`page_id`, `page_title`, `page_detail`, `page_summary`, `page_meta`, `page_metaContent`, `page_metaKeyword`, `page_metaTags`, `page_header`, `page_slider`) VALUES
(1, 'QUIÉNES SOMOS', ' Somos referencia del mercado de oficinas en Madrid, con más de 30 años en el sector', ' Atención exclusiva, solo por profesionales', ' encontramos tu oficina en el menor tiempo posible', ' Nuestro valores son', ' PROFESIONALIDAD', ' Disponemos de las mejores ofertas inmobiliarias del sector para que rápidamente encuentres la oficina que necesitas', ' Más de 5.000 operaciones inmobiliarias nos avalan', ' EFICACIA'),
(2, 'ALQUILER', 'Especialistas en oficinas, te asesoramos a encontrar tu oficina en el menor tiempo posible y en las mejores ', 'condiciones económicas del mercado, Le asesoramos a optimizar el espacio que necesite', 'SOMOS TU SOLUCIÓN', 'Nuestro valores son', 'PROFESIONALIDAD', 'Disponemos de las mejores ofertas inmobiliarias del sector para que rápidamente encuentres la oficina que necesitas', 'Más de 5.000 operaciones inmobiliarias nos avalan', 'EFICACIA'),
(12, 'Editor', 'tresttestest', '', '', '', '', '', '', ''),
(13, 'test', 'testing', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`page_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
