-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: welfaredb
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ben_keyword`
--

DROP TABLE IF EXISTS `ben_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ben_keyword` (
  `keyword_id` int NOT NULL,
  `benefit_no` int NOT NULL,
  PRIMARY KEY (`keyword_id`,`benefit_no`),
  KEY `benefit_no` (`benefit_no`),
  CONSTRAINT `ben_keyword_ibfk_1` FOREIGN KEY (`keyword_id`) REFERENCES `keyword` (`keyword_id`),
  CONSTRAINT `ben_keyword_ibfk_2` FOREIGN KEY (`benefit_no`) REFERENCES `benefits` (`benefit_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ben_keyword`
--

LOCK TABLES `ben_keyword` WRITE;
/*!40000 ALTER TABLE `ben_keyword` DISABLE KEYS */;
INSERT INTO `ben_keyword` VALUES (4,1),(5,1),(8,1),(5,2),(8,2),(5,3),(8,3),(3,4),(5,4),(5,5),(8,5),(9,5),(5,6),(8,6),(9,6),(5,7),(8,7),(9,7),(5,8),(8,8),(5,9),(8,9),(12,9),(5,10),(8,10),(12,10),(3,11),(13,11),(4,12),(5,12),(2,13),(7,13),(10,13),(13,13),(4,14),(12,14),(4,15),(5,15),(6,15),(10,15),(12,15),(7,16),(10,16),(2,17),(7,17),(10,17),(13,17),(1,18),(1,19),(6,19),(5,20),(6,20),(12,20),(2,21),(12,21),(4,22),(5,22),(8,22),(12,22),(5,23),(14,23),(2,24),(6,24),(13,24),(15,24),(5,25),(7,25),(10,25),(16,25),(17,25),(5,26),(7,26),(10,26),(13,27),(4,28),(9,28),(12,28),(14,28),(14,29),(15,29),(2,30),(4,30),(14,30),(2,31),(4,31),(7,31),(10,31),(14,31),(5,32),(6,32),(15,32),(4,33),(12,33),(4,34),(6,34),(12,34),(6,35),(2,36),(4,36),(7,36),(10,36),(4,37),(5,37),(7,37),(10,37),(2,38),(13,38),(17,38),(5,39),(14,39),(16,39),(4,40),(7,40),(10,40),(12,40),(7,41),(10,41),(16,41),(7,42),(10,42),(16,42),(7,43),(10,43),(16,43),(16,44),(17,44),(5,45),(7,45),(10,45),(16,45),(5,46),(16,46),(5,47),(16,47),(5,48),(14,48),(16,48),(17,48),(16,49),(17,49),(5,50),(7,50),(10,50),(16,50),(17,50),(7,51),(9,51),(10,51),(12,51),(12,52),(4,53),(5,53),(6,53),(2,54),(4,54),(6,54),(6,55),(6,56),(2,57),(6,57),(6,58),(6,59),(10,59),(15,59),(2,60),(6,60),(10,60),(6,61),(10,61),(15,61),(6,62),(15,62),(12,63),(12,64),(11,65),(12,65),(8,66),(12,66),(2,67),(4,67),(12,67),(12,68),(12,69),(7,70),(12,70),(5,71),(9,71),(2,72),(4,72),(6,72),(7,72),(10,72),(4,73),(5,73),(7,74),(10,74),(11,74),(7,75),(10,75),(15,75),(3,76),(4,77),(12,77),(7,78),(10,78),(3,79),(6,80),(7,80),(10,80),(7,81),(9,81),(10,81),(3,82),(4,83),(5,83),(7,83),(9,83),(10,83),(4,84),(5,84),(12,84),(9,85),(4,86),(12,86),(4,87),(7,87),(9,87),(10,87),(4,88),(12,88),(17,88),(4,89),(12,89),(11,90),(12,90),(12,91),(12,92),(3,93),(6,93),(7,94),(10,94),(4,95),(7,95),(10,95),(2,96),(4,96),(7,96),(10,96),(5,97),(7,97),(8,97),(10,97),(12,97),(2,98),(4,98),(7,98),(10,98),(3,99),(5,100),(16,100),(17,100),(4,101),(7,101),(10,101),(12,101),(7,102),(10,102),(10,103),(15,103),(10,104),(14,104),(15,104),(3,105),(14,105),(3,106),(8,106),(14,106),(7,107),(10,107),(7,108),(10,108),(14,108),(6,109),(7,109),(10,109),(14,109),(2,110),(6,110),(13,110),(6,111),(12,111),(6,112),(6,113),(6,114),(12,114),(11,115),(2,116),(7,116),(13,116),(17,116),(6,117),(15,117),(13,118),(7,119),(10,119),(6,120),(7,120),(10,120);
/*!40000 ALTER TABLE `ben_keyword` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-21 19:25:40
