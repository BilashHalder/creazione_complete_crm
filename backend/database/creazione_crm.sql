-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 12, 2022 at 09:13 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `creazione_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `agreement`
--

DROP TABLE IF EXISTS `agreement`;
CREATE TABLE IF NOT EXISTS `agreement` (
  `agreement_id` int(11) NOT NULL AUTO_INCREMENT,
  `invesment_id` int(11) NOT NULL,
  `upload_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `file_url` varchar(100) NOT NULL,
  PRIMARY KEY (`agreement_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agreement`
--

INSERT INTO `agreement` (`agreement_id`, `invesment_id`, `upload_on`, `file_url`) VALUES
(1, 0, NULL, 'TestFile.pdf'),
(2, 1, '2022-09-10 13:13:53', '8c3df6dd5373fb7f76ac36217f6507e3#_#1662795833026.pdf'),
(3, 1, '2022-09-10 13:14:08', '8c3df6dd5373fb7f76ac36217f6507e3#_#1662795848633.pdf'),
(4, 1, '2022-09-10 13:20:50', '8c3df6dd5373fb7f76ac36217f6507e3#_#1662796250225.pdf'),
(5, 17, '2022-09-10 13:21:00', '8c3df6dd5373fb7f76ac36217f6507e3#_#1662796260283.pdf'),
(6, 17, '2022-09-10 13:23:59', '8c3df6dd5373fb7f76ac36217f6507e3#_#1662796439838.pdf'),
(7, 17, '2022-09-10 13:24:54', '8c3df6dd5373fb7f76ac36217f6507e3#_#1662796494888.pdf'),
(8, 70, '2022-09-10 13:25:38', '8c3df6dd5373fb7f76ac36217f6507e3#_#1662796538566.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `associate`
--

DROP TABLE IF EXISTS `associate`;
CREATE TABLE IF NOT EXISTS `associate` (
  `associate_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '0-male 1-female 2-others',
  `email` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `document_id` int(11) DEFAULT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`associate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `associate`
--

INSERT INTO `associate` (`associate_id`, `name`, `gender`, `email`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(1, 'Associate New', 0, 'associate@gmail.com', '9876543210', 1, 'hqwgdjwqhgdjqwhgdjgdvajhasjdhfsadasfjdashdjafhd', '', 1),
(2, 'Associate user', 1, 'associate@gmail.com', '9898989898', NULL, '$2b$10$kZj4GdIAtqc2x8XKlWjgQ.c59DOisU2q0PgKFRlQH.gK63vd0w3ou', '7af91f951b43200c0786517742caf90e#_#1662811037921.jpg', 1),
(4, 'thunder ', 1, 'email@email.com', '1111111', NULL, '$2b$10$sV11BBIj/EN3Sj1k/ch8sec2XqDHu/kVoX5q5VmnuRd4glh/3ENY.', '0f04ba650595a3cab8f3dad2321caf46#_#1662906596207.png', 1),
(5, 'thunder ', 1, 'email@email.com', '1111111', NULL, '$2b$10$J05C2FHuIPeeNSXS5RG6ueLqVQQc7LM/PtxIzDJz.mOYIcoZHTmbK', '0f04ba650595a3cab8f3dad2321caf46#_#1662906751162.png', 1),
(6, 'update name', 0, 'update@u', '12292929', NULL, '$2b$10$87mXRDOyX8HijjSDp9C5PuyBF1ae4hMl1sEfF2gMPL5qWinRc2R/S', '0f04ba650595a3cab8f3dad2321caf46#_#1662908315791.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `bank_account`
--

DROP TABLE IF EXISTS `bank_account`;
CREATE TABLE IF NOT EXISTS `bank_account` (
  `account_no` varchar(40) NOT NULL,
  `ifsc_code` varchar(40) NOT NULL,
  `branch` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL COMMENT '1-customer 2- associate 3-employee',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  UNIQUE KEY `account_no` (`account_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank_account`
--

INSERT INTO `bank_account` (`account_no`, `ifsc_code`, `branch`, `user_id`, `user_type`, `status`) VALUES
('123456', 'IFSC00001', 'America', 1, 2, 1),
('12345644', 'IFSC00', 'America New Branch', 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '0-male 1-female 2-others',
  `email` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `document_id` int(11) DEFAULT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `name`, `gender`, `email`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(1, 'Customer Bhai', 1, 'customer@gmail.com', '1234567890', 0, 'sjadksgdsjgdkjasgdkasjdgkasgdakj', '', 1),
(2, 'customer 1', 1, 'bbb@bb.op', '555555555', NULL, '$2b$10$s9ISQvB.HwTms.yVkhSdVOcx0GdU4OzQ/c5HQiVLabk2p5AKZXACy', '83f317fa3fd7378b5f63efc3888bef19#_#1662824083203.jpg', 1),
(3, 'Bilash Halder', 0, 'ibilashhalder@gmail.com', '39876543210', NULL, '$2b$10$mh3Bgm0zxT/spViED/UZHezcXkKn86z0KB/dqPqq9v6WjqB1qgotG', '16f59cbaad05b1d49117497f2e6741b0#_#1662879301495.jpg', 1),
(4, 'Bilash Halder', 0, 'ibilashhalder@gmail.com', '39876543210', NULL, '$2b$10$DW8mGp2uQr.nNG5thXiwB.f3olajZF8WcdfOp9vrTPNsRfLiWZrA.', '16f59cbaad05b1d49117497f2e6741b0#_#1662879431026.jpg', 1),
(5, 'Bilash Halder', 0, 'ibilashhalder@gmail.com', '39876543210', NULL, '$2b$10$RfFGzzlY.q2TrX08Pm3zLu9rR8uZda3NdsOHd3emK4Bcr/xwXjt0C', '16f59cbaad05b1d49117497f2e6741b0#_#1662879457161.jpg', 1),
(6, 'Bilash Halder', 0, 'ibilashhalder@gmail.com', '39876543210', NULL, '$2b$10$jQFCd9wz2x3Rm189VnIYBO.qCa8LkVy6za0udbmLgKApC/U94uYi.', '16f59cbaad05b1d49117497f2e6741b0#_#1662879478668.jpg', 1),
(7, 'Sachin', 2, 'Sachin@gmail.com', '6666666666', NULL, '$2b$10$.j216TPrbiITPtw88.V2bejOWkRphv9DjItFqJMEs6A1h1xbLhWD2', '4a7beacc921ed4c4b0fdc72e9676026f#_#1662879516407.jpg', 1),
(8, 'Sachin', 2, 'Sachin@gmail.com', '6666666666', NULL, '$2b$10$gjQZhuQepHIts34fpfTfC.ME7zZwjxY9Qg0Ai4cc3cXHbp56pfyZW', '4a7beacc921ed4c4b0fdc72e9676026f#_#1662879603274.jpg', 1),
(9, 'update name', 0, 'update@u', '12292929', NULL, '$2b$10$kFyHEs8Py1/nl/5LchkMgOGPmetzm9IP8hPsZ0li.1HoTCUXAA1GO', '0f04ba650595a3cab8f3dad2321caf46#_#1662909223443.png', 1),
(11, 'Dummy User', 0, 'dummy@user.com', '9876543232', NULL, '$2b$10$0QxnypzdLeNCMSdIlFVbIuWXGnmtdhGHgwR7q/nwWJ6aAguY.uUDi', '4ff34c5498fa99db7a51952b9271078d___1662967905098.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

DROP TABLE IF EXISTS `designation`;
CREATE TABLE IF NOT EXISTS `designation` (
  `designation_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`designation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designation`
--

INSERT INTO `designation` (`designation_id`, `title`) VALUES
(1, 'developer'),
(3, 'Manager'),
(4, 'Software Developer');

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
CREATE TABLE IF NOT EXISTS `document` (
  `document_id` int(11) NOT NULL AUTO_INCREMENT,
  `adhar_no` varchar(20) NOT NULL,
  `pan_no` varchar(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  `adhar_verified` tinyint(1) NOT NULL,
  `pan_verified` tinyint(1) NOT NULL,
  PRIMARY KEY (`document_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`document_id`, `adhar_no`, `pan_no`, `address`, `adhar_verified`, `pan_verified`) VALUES
(1, '88282828282', 'JAJJAJAJAJ', 'Kolkata', 1, 1),
(2, '124343434343434', 'ADADDA111', 'Kolkataaaa', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '0-male 1-female 2-others',
  `email` varchar(80) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `document_id` int(11) DEFAULT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `name`, `gender`, `email`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(1, 'Employee One', 0, 'employee@gmail.com', '8778786543', 0, 'jbsakdjkasgdjas cnbsjbcxasuhdiuqsydqwiydqw', NULL, 1),
(2, '123456', 1, 'customer@gmail.ccm', '123456222', NULL, '$2b$10$ZrhxVf/1UpvJ6/NhQwZQuOlSMGVQr7QQgT2Kky0HoIKHMQILvlRd2', '736ec0d93068fe61207fccff789a7e2e#_#1662827507275.jpg', 1),
(3, 'Employee rrr', 1, 'customer@gmail.ccm', '123456222', NULL, '$2b$10$Dxy8EVwp5qcBnWiqdXMiTOJTpnACTUHI0ge8MDgoub1OU3CKRjBxC', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee_info`
--

DROP TABLE IF EXISTS `employee_info`;
CREATE TABLE IF NOT EXISTS `employee_info` (
  `employee_id` int(11) NOT NULL,
  `designation_id` int(11) NOT NULL,
  `salary_id` int(11) NOT NULL,
  `dob` date NOT NULL,
  `report_to` int(11) DEFAULT NULL,
  `joining_date` date NOT NULL,
  `acceptance_file` varchar(100) NOT NULL,
  `id_card` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

DROP TABLE IF EXISTS `investment`;
CREATE TABLE IF NOT EXISTS `investment` (
  `investment_id` int(11) NOT NULL AUTO_INCREMENT,
  `ammount` float NOT NULL,
  `date_time` datetime NOT NULL,
  `roi` float NOT NULL,
  `nominee_id` int(11) NOT NULL,
  `account_no` varchar(40) NOT NULL,
  `payment_id` varchar(100) NOT NULL,
  `agreement_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1-active 0-close',
  PRIMARY KEY (`investment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `nominee`
--

DROP TABLE IF EXISTS `nominee`;
CREATE TABLE IF NOT EXISTS `nominee` (
  `nominee_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL COMMENT '1-customer 2-associate',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`nominee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nominee`
--

INSERT INTO `nominee` (`nominee_id`, `name`, `dob`, `user_id`, `user_type`, `status`) VALUES
(1, 'Nominee 1', '2014-09-09', 1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `transaction_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `purpose` varchar(50) NOT NULL,
  `payment_mode` varchar(40) NOT NULL,
  `to_account` varchar(40) NOT NULL,
  `ammount` double NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1-success 0-failed 2-pending',
  `transaction_id` varchar(40) NOT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `transaction_time`, `purpose`, `payment_mode`, `to_account`, `ammount`, `status`, `transaction_id`) VALUES
(1, '2022-09-11 02:03:14', 'salary', 'online', '333334444', 20000, 1, '788888yy888uu8'),
(2, '2022-09-11 02:11:11', 'invesment', 'cheque', '3838383838', 50000, 1, '63663638388383');

-- --------------------------------------------------------

--
-- Table structure for table `qualification`
--

DROP TABLE IF EXISTS `qualification`;
CREATE TABLE IF NOT EXISTS `qualification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `degree_name` varchar(100) NOT NULL,
  `year_of_pass` int(11) NOT NULL,
  `degree_from` varchar(100) NOT NULL,
  `marks` float NOT NULL,
  `document_url` varchar(100) NOT NULL,
  `employee_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `qualification`
--

INSERT INTO `qualification` (`id`, `degree_name`, `year_of_pass`, `degree_from`, `marks`, `document_url`, `employee_id`) VALUES
(1, 'B.Tech', 2020, 'MAKAUT', 78, '', 1),
(2, 'Madhya', 2020, 'WBSppp', 100, '8c3df6dd5373fb7f76ac36217f6507e3#_#1662841482800.pdf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `request_id` int(11) NOT NULL AUTO_INCREMENT,
  `request_type` tinyint(4) NOT NULL COMMENT '1-csp 2-associate 3-others',
  `customer_id` int(11) NOT NULL,
  `request_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comments` varchar(200) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '2' COMMENT '0-reject 1-accepted 2-pending 3-others',
  PRIMARY KEY (`request_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`request_id`, `request_type`, `customer_id`, `request_date`, `comments`, `status`) VALUES
(3, 3, 2, '2022-09-11 15:49:44', 'Updated cmment', 1);

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

DROP TABLE IF EXISTS `salary`;
CREATE TABLE IF NOT EXISTS `salary` (
  `salary_id` int(11) NOT NULL AUTO_INCREMENT,
  `basic` float NOT NULL DEFAULT '0',
  `hra` float NOT NULL DEFAULT '0',
  `conveyance` float NOT NULL DEFAULT '0',
  `medical` float NOT NULL DEFAULT '0',
  `special` float NOT NULL DEFAULT '0',
  `pf` float NOT NULL DEFAULT '0',
  `insurance` float NOT NULL DEFAULT '0',
  `tax` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`salary_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`salary_id`, `basic`, `hra`, `conveyance`, `medical`, `special`, `pf`, `insurance`, `tax`) VALUES
(1, 111.666, 222.99, 99.99, 999.999, 1.99, 444.99, 11.99, 11.99),
(4, 111.666, 222, 0, 999, 1, 444, 11, 11),
(5, 111.666, 222.99, 99.99, 999.999, 1.99, 444.99, 11.99, 11.99);

-- --------------------------------------------------------

--
-- Table structure for table `withdraw_request`
--

DROP TABLE IF EXISTS `withdraw_request`;
CREATE TABLE IF NOT EXISTS `withdraw_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL,
  `account_no` varchar(40) NOT NULL,
  `ammount` float NOT NULL,
  `request_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '2' COMMENT '0-rejected 1-success 2-pending',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `withdraw_request`
--

INSERT INTO `withdraw_request` (`id`, `user_id`, `user_type`, `account_no`, `ammount`, `request_time`, `status`) VALUES
(4, 5, 1, '999999', 100000, '2022-09-11 15:46:47', 2);

-- --------------------------------------------------------

--
-- Table structure for table `work_report`
--

DROP TABLE IF EXISTS `work_report`;
CREATE TABLE IF NOT EXISTS `work_report` (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) NOT NULL,
  `report_date` date NOT NULL,
  `start_time` time NOT NULL,
  `submit_time` time DEFAULT NULL,
  `report` varchar(1000) DEFAULT NULL,
  `document_url` varchar(100) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '2' COMMENT '1-accept 0-reject 2-pending',
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `work_report`
--

INSERT INTO `work_report` (`report_id`, `employee_id`, `report_date`, `start_time`, `submit_time`, `report`, `document_url`, `status`) VALUES
(1, 1, '2022-09-11', '02:33:12', NULL, NULL, NULL, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
