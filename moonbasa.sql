# Host: localhost  (Version: 5.5.53)
# Date: 2018-10-22 10:43:36
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodinfo"
#

DROP TABLE IF EXISTS `goodinfo`;
CREATE TABLE `goodinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodinfo"
#

/*!40000 ALTER TABLE `goodinfo` DISABLE KEYS */;
INSERT INTO `goodinfo` VALUES ('001','梦芭莎优雅时尚圆领撞色荷叶','当季新品连衣裙',199,4,'秋一波：加利福尼亚的西域印象','img/d_yuan1.jpg','img/d_yuan1.jpg','img/d_yuan2.jpg','img/d_yuan3.jpg','img/d_yuan4.jpg','img/d_yuan5.jpg','img/d_yuan6.jpg','S','M','L','299.00','梦芭莎女装旗舰店','21',''),('002','梦芭莎优雅彩色千年格子大衣女','当季新品大衣',229,1253,'秋一波：加利福尼亚的西域印象','img/460918403-126-01-L.jpg','img/460918403-126-01-L.jpg','','','','','','S','M','L','399.00','梦芭莎女装旗舰店','4560',''),('003','梦芭莎时尚短款外套百搭','秋季大衣',229,1253,'秋一波：加利福尼亚的西域印象','img/460918405-076-01-L.jpg','img/460918405-076-01-L.jpg','','','','','','S','M','L','500.00','梦芭莎女装旗舰店','32','');
/*!40000 ALTER TABLE `goodinfo` ENABLE KEYS */;

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` char(100) NOT NULL,
  `pwd` char(16) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('',''),('13333333333','555555555'),('14222222222','22222222'),('15555555555','1111111111'),('16666666666','11111111'),('17749161016','11111111'),('17777777777','44444444'),('18729636052','111111111'),('18888888888','666666666'),('手机号/邮箱',''),('手机号/邮箱324213','2342'),('手机号64556/邮箱','4564');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
