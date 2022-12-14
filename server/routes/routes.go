package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/thiennc1107/go-react/controller"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controller.Register)
	app.Post("/api/login", controller.Login)
	app.Get("/api/user", controller.User)
	app.Post("/api/logout", controller.Logout)
}
