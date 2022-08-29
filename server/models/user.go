package models

import "time"

type User struct {
	Id        int    `json:"id"`
	Name      string `json:"name"`
	Email     string `gorm:"unique" json:"email"`
	Password  []byte `json:"-"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
