CREATE TABLE `Barberos` (
	`ID_Barbero` int AUTO_INCREMENT NOT NULL,
	`Nombre` varchar(255) NOT NULL,
	`Correo` varchar(255) NOT NULL,
	`Contrasena` varchar(255) NOT NULL,
	CONSTRAINT `Barberos_ID_Barbero` PRIMARY KEY(`ID_Barbero`)
);
--> statement-breakpoint
CREATE TABLE `Citas` (
	`ID_Cita` int AUTO_INCREMENT NOT NULL,
	`ID_Cliente` int NOT NULL,
	`ID_Barbero` int NOT NULL,
	`Hora` varchar(255) NOT NULL,
	`Fecha` datetime NOT NULL DEFAULT NOW(),
	CONSTRAINT `Citas_ID_Cita` PRIMARY KEY(`ID_Cita`)
);
--> statement-breakpoint
CREATE TABLE `Clientes` (
	`ID_Cliente` int AUTO_INCREMENT NOT NULL,
	`Nombre` varchar(255) NOT NULL,
	`Correo` varchar(255) NOT NULL,
	`Contrasena` varchar(255) NOT NULL,
	`Telefono` varchar(255) NOT NULL,
	CONSTRAINT `Clientes_ID_Cliente` PRIMARY KEY(`ID_Cliente`)
);
--> statement-breakpoint
CREATE INDEX `clientefk` ON `Citas` (`ID_Cliente`);--> statement-breakpoint
CREATE INDEX `barberofk` ON `Citas` (`ID_Barbero`);