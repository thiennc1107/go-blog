package controller

import (
	"github.com/gofiber/fiber/v2"
	"github.com/thiennc1107/go-react/databases"
	"github.com/thiennc1107/go-react/models"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	newPassword, err := bcrypt.GenerateFromPassword(user.Password, 14)
	if err != nil {
		return err
	}

	user.Password = newPassword

	databases.DB.Create(&user)

	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data models.User

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var user models.User

	databases.DB.Where("email = ?", data.Email).First(&user)

	if user.Id == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "User not found",
		})
	}
	if err := bcrypt.CompareHashAndPassword(user.Password, data.Password); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "Wrong password",
		})
	}
	return c.Status(204).Send(nil)
}
