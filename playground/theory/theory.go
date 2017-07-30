package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("Hai")
	os.Stdout.Write([]byte("OK!\n"))
}
