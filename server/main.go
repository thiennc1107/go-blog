package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/thiennc1107/go-react/databases"
	"github.com/thiennc1107/go-react/routes"
)

func main() {

	databases.Connect()

	app := fiber.New()

	routes.Setup(app)

	app.Listen(":8000")
}
