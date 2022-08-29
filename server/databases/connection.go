package databases

import (
	"log"

	"github.com/thiennc1107/go-react/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	conn, err := gorm.Open(mysql.Open("root:1234@tcp(localhost:3309)/go_react?parseTime=true"), &gorm.Config{})

	if err != nil {
		log.Fatal("Unable to connect database" + err.Error())
	}

	modelList := []interface{}{
		&models.User{},
	}

	DB = conn

	if err := migrate(modelList, conn); err != nil {
		log.Fatal("Unable to migrate data:" + err.Error())
	}
}

func migrate(model []interface{}, conn *gorm.DB) error {
	for _, m := range model {
		if err := conn.AutoMigrate(m); err != nil {
			return err
		}
	}
	return nil
}
