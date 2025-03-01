package main

import (
	"log"

	"github.com/pocketbase/pocketbase"
)

func main() {
	log.Println("Initializing PocketBase...")
	app := pocketbase.New()
	log.Println("Starting server...")
	if err := app.Start(); err != nil {
		log.Fatal("Failed to start the project server:", err)
	}
	log.Println("Server running!") // Won’t reach if Start() blocks
}
