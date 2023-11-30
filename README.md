[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/fajarutamaa/binar-mock-test/blob/main/LICENSE)

## binar-mock-test

The Binar Academy mock test to-do list is a simulated test project that focuses on a to-do list application. This application is developed using various libraries and frameworks, showcasing impressive capabilities.

## Questions and Answers

**1. Apakah Kegunaan JSON pada REST API?**

    Jawab :
        
        Berikut ini merupakan kegunaan JSON pada REST API :

        Bertukar data: JSON dapat mempermudah programmer dalam melakukan pertukaran data.
        Menyimpan data: JSON dapat digunakan untuk menyimpan data, seperti dalam Database Mongodb.
        Menyimpan konfigurasi project: JSON dapat digunakan untuk menyimpan konfigurasi project, seperti dalam file composer.
        Format data: JSON adalah salah satu format standar dalam transaksi data.

**2. Jelaskan bagaimana REST API bekerja!**

    Jawab :

        RESTful API beroperasi dengan memanipulasi sumber daya dan representasinya.
        Representasi ini ditukar antara pengguna dan server melalui antarmuka standar serta protokol komunikasi khusus,
        umumnya menggunakan HTTP. Ketika pengguna ingin menggunakan fungsi dari suatu aplikasi,
        perangkatnya mengirimkan permintaan melalui HTTP ke server. Server kemudian mencari sumber daya dan merespons dengan
        representasi status kepada pengguna melalui protokol yang sama. Representasi ini dapat dibuat dalam berbagai format, seperti JSON atau XML.

## Installation Guide

Clone the project from GitHub repository:

      git clone https://github.com/fajarutamaa/binar-mock-test.git

Change Directory:

      cd binar-mock-test

Install all package dependencies:

      npm install

Compile and hot-reload for development:

      npm start

## Environment Variables Setting

Create an `.env` file in your project root folder and add your variables. See `.env.example` for assistance.

## API Endpoints

this project running on Base URL : `http://localhost:3000/api/v1/`

| Methods | URLs                       | Actions                  |
| ------- | -------------------------- | ------------------------ |
| POST    | /auth/register             | Register account         |
| POST    | /auth/login                | Login account            |
| POST    | /forgot-password           | Send password reset link |
| POST    | /reset-password/:token     | Reset user password      |
| GET     | /users/                    | List Users               |
| GET     | /users/:username           | View detail profile user |
| PUT     | /users/change-photo        | Change profile photo     |
| DELETE  | /users/:username           | Delete user              |
| POST    | /todo-list/post            | Create Todo list         |
| GET     | /todo-list/                | List Todos               |
| GET     | /todo-list/view-detail/:id | View detail              |
| PUT     | /todo-list/:id             | Update todo list         |
| DELETE  | /todo-list/:id             | Delete Todo list         |

## Error Handling

This table outlines the status codes, their meanings, and corresponding error messages for the API:

| Status Code | Meaning               | Error Message         |
| ----------- | --------------------- | --------------------- |
| 200         | Success               | Request successful    |
| 400         | Bad Request           | Invalid request       |
| 401         | Unauthorized          | Authentication failed |
| 404         | Not Found             | Data not found        |
| 500         | Internal Server Error | Internal server error |

These status codes and messages are essential for understanding and troubleshooting API responses.

## License

This project is available for use under the MIT License.
