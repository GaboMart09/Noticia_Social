/*
Navicat MySQL Data Transfer

Source Server         : MariaDBLenovo
Source Server Version : 50505
Source Host           : localhost:3307
Source Database       : noticia

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-11-29 21:08:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ciudad
-- ----------------------------
DROP TABLE IF EXISTS `ciudad`;
CREATE TABLE `ciudad` (
  `idCiudad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT '',
  `idPais` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCiudad`),
  KEY `idPais` (`idPais`),
  CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`idPais`) REFERENCES `pais` (`idPais`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ciudad
-- ----------------------------

-- ----------------------------
-- Table structure for comentario
-- ----------------------------
DROP TABLE IF EXISTS `comentario`;
CREATE TABLE `comentario` (
  `idComentario` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `idPublicacion` int(11) DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL,
  PRIMARY KEY (`idComentario`),
  KEY `idPublicacion` (`idPublicacion`),
  KEY `idPersona` (`idPersona`),
  CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`idPublicacion`) REFERENCES `publicacion` (`idPublicacion`),
  CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of comentario
-- ----------------------------

-- ----------------------------
-- Table structure for genero
-- ----------------------------
DROP TABLE IF EXISTS `genero`;
CREATE TABLE `genero` (
  `idGenero` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idGenero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of genero
-- ----------------------------

-- ----------------------------
-- Table structure for pais
-- ----------------------------
DROP TABLE IF EXISTS `pais`;
CREATE TABLE `pais` (
  `idPais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idPais`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of pais
-- ----------------------------

-- ----------------------------
-- Table structure for persona
-- ----------------------------
DROP TABLE IF EXISTS `persona`;
CREATE TABLE `persona` (
  `idPersona` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  `idGenero` int(11) DEFAULT NULL,
  `idCiudad` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPersona`),
  KEY `idGenero` (`idGenero`),
  KEY `idCiudad` (`idCiudad`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`idGenero`) REFERENCES `genero` (`idGenero`),
  CONSTRAINT `persona_ibfk_2` FOREIGN KEY (`idCiudad`) REFERENCES `ciudad` (`idCiudad`),
  CONSTRAINT `persona_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of persona
-- ----------------------------

-- ----------------------------
-- Table structure for publicacion
-- ----------------------------
DROP TABLE IF EXISTS `publicacion`;
CREATE TABLE `publicacion` (
  `idPublicacion` int(11) NOT NULL AUTO_INCREMENT,
  `foto1` varchar(255) DEFAULT NULL,
  `foto2` varchar(255) DEFAULT NULL,
  `foto3` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `fechaHora` datetime DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPublicacion`),
  KEY `idPersona` (`idPersona`),
  CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of publicacion
-- ----------------------------

-- ----------------------------
-- Table structure for reaccion
-- ----------------------------
DROP TABLE IF EXISTS `reaccion`;
CREATE TABLE `reaccion` (
  `idReaccion` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idReaccion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of reaccion
-- ----------------------------

-- ----------------------------
-- Table structure for seguidor
-- ----------------------------
DROP TABLE IF EXISTS `seguidor`;
CREATE TABLE `seguidor` (
  `idSeguidor` int(11) NOT NULL AUTO_INCREMENT,
  `idPersonaPerfil` int(11) DEFAULT NULL,
  `idPersonaSeguidor` int(11) DEFAULT NULL,
  PRIMARY KEY (`idSeguidor`),
  KEY `idPersonaPerfil` (`idPersonaPerfil`),
  CONSTRAINT `seguidor_ibfk_1` FOREIGN KEY (`idPersonaPerfil`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of seguidor
-- ----------------------------

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `pass` text DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usuario
-- ----------------------------

-- ----------------------------
-- Table structure for voto
-- ----------------------------
DROP TABLE IF EXISTS `voto`;
CREATE TABLE `voto` (
  `idVotos` int(11) NOT NULL AUTO_INCREMENT,
  `idPublicacion` int(11) DEFAULT NULL,
  `idReaccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`idVotos`),
  KEY `idPublicacion` (`idPublicacion`),
  KEY `idReaccion` (`idReaccion`),
  CONSTRAINT `voto_ibfk_1` FOREIGN KEY (`idPublicacion`) REFERENCES `publicacion` (`idPublicacion`),
  CONSTRAINT `voto_ibfk_2` FOREIGN KEY (`idReaccion`) REFERENCES `reaccion` (`idReaccion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of voto
-- ----------------------------
