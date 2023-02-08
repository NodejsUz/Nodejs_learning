package main

import "fmt";

func main() {
    go printNumbers()
    fmt.Println("main function")
}

func printNumbers() {
    for i := 1; i <= 10; i++ {
        fmt.Println(i)
    }
}