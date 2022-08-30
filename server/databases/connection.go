package databases

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/thiennc1107/go-react/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	godotenv.Load(".env")
	url := os.Getenv("DB_URL")
	dns := fmt.Sprintf("root:1234@tcp(%s)/go_react?parseTime=true", url)
	conn, err := gorm.Open(mysql.Open(dns), &gorm.Config{})

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
