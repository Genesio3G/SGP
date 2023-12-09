-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 09-Dez-2023 às 07:16
-- Versão do servidor: 8.0.27
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sgp`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `dados_pessoais`
--

DROP TABLE IF EXISTS `dados_pessoais`;
CREATE TABLE IF NOT EXISTS `dados_pessoais` (
  `dadospessoaisID` int NOT NULL AUTO_INCREMENT,
  `nomeCompleto` varchar(100) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sexoID` int DEFAULT NULL,
  `utilizadorID` int DEFAULT NULL,
  PRIMARY KEY (`dadospessoaisID`),
  KEY `sexoID` (`sexoID`),
  KEY `utilizadorID` (`utilizadorID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `dados_pessoais`
--

INSERT INTO `dados_pessoais` (`dadospessoaisID`, `nomeCompleto`, `senha`, `telefone`, `email`, `sexoID`, `utilizadorID`) VALUES
(1, 'Genesio Gabriel', 'marcelina1@', '930769896', 'genesiogabriel101998@hotmail.com', 1, 1),
(2, 'Ricardo', '', '', '', NULL, NULL),
(3, 'José', '', '', '', NULL, NULL),
(4, 'Josenia', '', '', '', NULL, NULL),
(5, NULL, 'amor', '', 'jessica@hotmail.com', NULL, NULL),
(6, 'Maria Gabriel', 'jessica1@', '930769896', 'maria@gmail.com', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `genero`
--

DROP TABLE IF EXISTS `genero`;
CREATE TABLE IF NOT EXISTS `genero` (
  `sexoID` int NOT NULL AUTO_INCREMENT,
  `nomeGenero` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`sexoID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `genero`
--

INSERT INTO `genero` (`sexoID`, `nomeGenero`) VALUES
(1, 'Masculino'),
(2, 'Feminino');

-- --------------------------------------------------------

--
-- Estrutura da tabela `projeto`
--

DROP TABLE IF EXISTS `projeto`;
CREATE TABLE IF NOT EXISTS `projeto` (
  `projetoID` int NOT NULL AUTO_INCREMENT,
  `titulo_projeto` varchar(50) DEFAULT NULL,
  `descricao_projeto` varchar(200) DEFAULT NULL,
  `membro` int DEFAULT NULL,
  `tarefaID` int DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_conclusao` date DEFAULT NULL,
  PRIMARY KEY (`projetoID`),
  KEY `membro` (`membro`),
  KEY `tarefaID` (`tarefaID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `projeto`
--

INSERT INTO `projeto` (`projetoID`, `titulo_projeto`, `descricao_projeto`, `membro`, `tarefaID`, `data_inicio`, `data_conclusao`) VALUES
(1, 'Arroz', '', 1, 0, '0000-00-00', '0000-00-00'),
(2, 'deu certo', 'genesio', 1, 1, '2023-12-08', '2023-12-08'),
(3, 'mama', 'amam', 1, 0, '0011-11-11', '0011-11-11'),
(4, 'deu certo', 'a', 2, 0, '0011-01-01', '0001-01-01'),
(5, 'poxa', 'sadalkdjalk', 3, 1, '0001-11-11', '0000-00-00'),
(6, 'deu certo', '', 3, 0, '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `status`
--

DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `statusID` int NOT NULL AUTO_INCREMENT,
  `nomeStatus` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`statusID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `status`
--

INSERT INTO `status` (`statusID`, `nomeStatus`) VALUES
(1, 'em Andamento'),
(2, 'concluido');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefa`
--

DROP TABLE IF EXISTS `tarefa`;
CREATE TABLE IF NOT EXISTS `tarefa` (
  `tarefaID` int NOT NULL AUTO_INCREMENT,
  `titulo_tarefa` varchar(200) DEFAULT NULL,
  `descricao_tarefa` varchar(200) DEFAULT NULL,
  `responsavel` int DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_conclusao` date DEFAULT NULL,
  `statusID` int DEFAULT NULL,
  PRIMARY KEY (`tarefaID`),
  KEY `responsavel` (`responsavel`),
  KEY `statusID` (`statusID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `tarefa`
--

INSERT INTO `tarefa` (`tarefaID`, `titulo_tarefa`, `descricao_tarefa`, `responsavel`, `data_inicio`, `data_conclusao`, `statusID`) VALUES
(1, 'criar mapa mental', NULL, NULL, NULL, NULL, NULL),
(2, 'risco', 'ola', 2, '0012-12-12', '0001-12-12', 0),
(3, 'am', 'am', 1, '0001-11-11', '0001-11-11', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
CREATE TABLE IF NOT EXISTS `utilizador` (
  `utilizadorID` int NOT NULL AUTO_INCREMENT,
  `tipoUtilizador` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`utilizadorID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `utilizador`
--

INSERT INTO `utilizador` (`utilizadorID`, `tipoUtilizador`) VALUES
(1, 'Membro');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
