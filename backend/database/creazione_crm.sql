-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 16, 2022 at 09:18 AM
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
  `commission_rate` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL COMMENT '0-admin anyid-employee id',
  `phone` varchar(15) NOT NULL,
  `document_id` int(11) DEFAULT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`associate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `associate`
--

INSERT INTO `associate` (`associate_id`, `name`, `gender`, `email`, `commission_rate`, `employee_id`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(9, 'supriya mondal', 0, 'rahul@gmail.com', 1, NULL, '9647157187', NULL, '$2b$10$WQ8qziKncRhTNVoldag51Om0nzbuZUN7E7Jy2fff7ccDO7dHWxtee', '2ecf6cad2010d0402807802f0311fc8a__1663315731732.jpg', 1);

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
('123456', 'IFSC00001', 'America', 1, 1, 1),
('12345644', 'IFSC00', 'America New Branch', 12, 1, 1),
('4545454563633', 'IGSGGSHHS', 'Mananan', 12, 1, 1),
('454554546', 'IFSC9929', 'Kolkata', 12, 1, 1),
('45455454633', 'IFSC9292929', 'Kolkata', 12, 1, 1),
('90101001010', 'IGSGGSHHS', 'Mananan', 12, 1, 1);

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
  `associate_id` int(11) DEFAULT NULL,
  `pass` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '1-active 0-not active',
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `name`, `gender`, `email`, `phone`, `document_id`, `associate_id`, `pass`, `image`, `status`) VALUES
(22, 'shaoli pandey', 0, 'rahul@gmail.com', '9647157187', NULL, 9, '$2b$10$q3OdRqLwaFGJTnEPTQJSF.PuvPBQEmCgk7BctcpIiF8RMm/Z6ekDK', '7dd8cb08149743d65524479be35b5d48__1663315881773.jpg', 1),
(23, 'NILOTPAL PRASAD', 0, 'avishek.creazioneservices@gmail.com', '9073191111', NULL, 9, '$2b$10$V8Q1Pqrb.ydaa6glXawOFeugz/o7pXf1EjINvQ5iNJ/uY1FpbHgRm', '0679033f36a20adefcf1760c9a59a885__1663318363104.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

DROP TABLE IF EXISTS `designation`;
CREATE TABLE IF NOT EXISTS `designation` (
  `designation_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`designation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designation`
--

INSERT INTO `designation` (`designation_id`, `title`) VALUES
(7, 'Web developer');

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
(1, '88282828282', 'ACD123456', 'DN 36, Collegemore, 36, Street Number 13, DN Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091\n', 1, 1),
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `name`, `gender`, `email`, `phone`, `document_id`, `pass`, `image`, `status`) VALUES
(11, 'moumita mondal', 1, 'mondal.moumita@gmail.com', '9647157187', NULL, '$2b$10$JQY/bag2.apoLa2t1/d/S.rFSOnwYxvsjRBXUuv3rn7GuIOwKxSTa', '15220c3cc3612ded92fc5c40ba586802__1663315606653.jpg', 1);

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
  `acceptance_file` varchar(100) DEFAULT NULL,
  `id_card` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_info`
--

INSERT INTO `employee_info` (`employee_id`, `designation_id`, `salary_id`, `dob`, `report_to`, `joining_date`, `acceptance_file`, `id_card`) VALUES
(7, 4, 4, '2022-08-30', NULL, '2022-09-28', NULL, 0),
(8, 4, 5, '2022-09-28', NULL, '2022-09-20', NULL, 0),
(9, 4, 6, '1994-11-08', NULL, '2022-11-11', NULL, 0),
(10, 4, 5, '1999-11-11', NULL, '2022-11-11', NULL, 0),
(11, 7, 10, '2000-02-10', NULL, '2021-12-08', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `investment`
--

DROP TABLE IF EXISTS `investment`;
CREATE TABLE IF NOT EXISTS `investment` (
  `investment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ammount` float NOT NULL,
  `date_time` datetime NOT NULL,
  `roi` float NOT NULL,
  `nominee_id` int(11) NOT NULL,
  `account_no` varchar(40) NOT NULL,
  `payment_id` varchar(100) NOT NULL,
  `agreement_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1-active 0-close',
  PRIMARY KEY (`investment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `investment`
--

INSERT INTO `investment` (`investment_id`, `user_id`, `ammount`, `date_time`, `roi`, `nominee_id`, `account_no`, `payment_id`, `agreement_id`, `status`) VALUES
(1, 12, 2000, '2022-09-14 04:59:54', 5, 1, '93993939393', 'YYYBSBSBBSBSBS', 1, 1),
(2, 12, 3000, '2022-09-14 06:25:12', 3, 2, '2828288282', '22929292929', 1, 0);

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nominee`
--

INSERT INTO `nominee` (`nominee_id`, `name`, `dob`, `user_id`, `user_type`, `status`) VALUES
(1, 'Nominee 1', '2014-09-09', 1, 1, 1),
(3, 'Lorem User', '2022-04-18', 1, 1, 1),
(4, 'Next nominee', '2022-09-05', 1, 1, 1),
(9, 'full_name', '2022-09-12', 12, 1, 1),
(10, 'phone_no', '2022-08-29', 12, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `offline_transaction`
--

DROP TABLE IF EXISTS `offline_transaction`;
CREATE TABLE IF NOT EXISTS `offline_transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `transaction_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `transaction_id` varchar(50) NOT NULL,
  `amount` double NOT NULL,
  `file_url` varchar(100) NOT NULL,
  `status` int(11) NOT NULL COMMENT '0-pending 1-accepted 2-used 3-rejected',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offline_transaction`
--

INSERT INTO `offline_transaction` (`id`, `customer_id`, `transaction_time`, `transaction_id`, `amount`, `file_url`, `status`) VALUES
(1, 12, '2022-09-15 00:19:43', '788888yy888uu8', 80000, 'jppppkkkkk', 1),
(2, 12, '2022-09-15 00:25:18', 'TRAN128282828', 89999, '8c3df6dd5373fb7f76ac36217f6507e3__1663181767914.pdf', 2),
(3, 12, '2022-09-15 01:13:25', '2424424242', 12219, '8c3df6dd5373fb7f76ac36217f6507e3__1663184605123.pdf', 0),
(4, 12, '2022-09-15 01:15:10', '25255252552525', 3393939, '8c3df6dd5373fb7f76ac36217f6507e3__1663184710849.pdf', 0),
(5, 12, '2022-09-15 01:15:44', '25255252', 3393939, '8c3df6dd5373fb7f76ac36217f6507e3__1663184744754.pdf', 0);

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`salary_id`, `basic`, `hra`, `conveyance`, `medical`, `special`, `pf`, `insurance`, `tax`) VALUES
(10, 4500, 500, 1500, 500, 500, 1500, 500, 100),
(11, 4000, 4000, 1000, 500, 500, 100, 100, 100);

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
