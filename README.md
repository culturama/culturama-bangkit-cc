# Culturama Backend Documentation
Repository for cloud computing

## Database Schema Culturama
### Tabel User
| Column     | Data Type | Constraints         |
|----------|------|--------------|
| id_user     | INT   | PRIMARY KEY, AUTO_INCREMENT      |
| nama | VARCHAR(255)   | NOT NULL      |
| email      | VARCHAR(255)   | NOT NULL     |
| password      | VARCHAR(255)   | NOT NULL     |

### Tabel Content
| Column     | Data Type | Constraints         |
|----------|------|--------------|
| id_destination     | INT   | PRIMARY KEY, AUTO_INCREMENT      |
| title_dest | VARCHAR(255)   | NOT NULL      |
| categories      | VARCHAR(255)   | NOT NULL     |
| rating      | INT   | NOT NULL     |
| image     | VARCHAR(255)  |  NOT NULL  |
|  price    |  INT        |   NOT NULL    |
|  content    |  TEXT        |   NOT NULL    |

## Culturama API Documentation
### Authentication
#### Register

* Endpoint: /api/auth/register
* Method: POST
* Request Body:
  * fullname (string): User’s fullname
  * email (string): User's email
  * password (string): User's password

* Response
  * If successful:
    * Status Code: 200
    * JSON Response:
      ```json
      {
        "error": false,
        "message": "Berhasil Mendaftarkan Akun. Silahkan Login"
      }

  * If email is already taken:
    * Status Code: 404
    * JSON Response:
      ```json
      {
        "error": true,
        "message": "Email Sudah Digunakan oleh orang lain"
      }

#### Login 
* Endpoint: /api/auth/login
* Method: POST
* Request Body:
  * email (string): User's email
  * password (string): User's password

* Response:
  * If successful:
    * Status Code: 200
    * JSON Response:
     ```json
     {
       "error": false,
       "loginResult": {
         "email": "muhammadfattah@gmail.com",
         "fullname": "Muhammad Fattah Al Rasyidin",
         "token": "<access_token>",
         "userid": 1
       },
       "message": "Login Success"
     }
  * If email or password is incorrect:
    * Status Code: 200
    * JSON Response:
      ```json
      {
        "error": true,
        "message": "Wrong Password or Account not found"
      }


### Traditional Building
#### Get All Traditional Building
* Endpoint: /api/traditional_building
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
* Response:
  * If successful:
    * Status Code: 200
    * JSON Response:
      ```json
      [
       {
         "id": 1,
         "name": "Traditional Building 1",
         "categories": "Traditional Building",
         "rate": "4.6",
         "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
       },
       {
         "id": 2,
         "name": "Traditional Building 2",
         "categories": "Traditional Building",
         "rate": "4.6",
         "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
       }
      ]

#### Get Traditional Building By ID
* Endpoint: /api/traditional_building/<traditional_building_id>
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
  * Response:
    * If product exists:
      * Status Code: 200
      * JSON Response:
        ```json
        {
          "error": false,
          "product": {
            "id": 1,
            "name": "Traditional Building 1",
            "categories": "Traditional Building",
             "rate": "4.6",
             "price": "20000",
            "description": " Traditional Building 1 description",
            "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
          }
        }
    * If not found:
      * Status Code: 200
      * JSON Response:
        ```json
        {
          "error": true,
          "message": " Traditional Building not found"
        }

### Local Culinary
#### Get All Local Culinary
* Endpoint: /api/local_culinary
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
  * Response:
    * If successful:
    * Status Code: 200
    * JSON Response:
      ```json
      [
        {
          "id": 1,
          "name": " Local Culinary 1",
          "categories": "local culinary ",
          "rate": "4.6",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        },
        {
          "id": 2,
          "name": "Local Culinary 2",
          "categories": " local culinary ",
          "rate": "4.6",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        }
      ]

#### Get Local Culinary By ID
* Endpoint: /api/ local_culinary/< local_culinary_id>
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
* Response:
  * If product exists:
    * Status Code: 200
    * JSON Response:
      ```json
      {
        "error": false,
        "product": {
          "id": 1,
          "name": "Local Culinary 1",
          "categories": " local culinary ",
           "rate": "4.6",
           "price": "20000",
          "description": " local culinary 1 description",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        }
      }
    * If not found:
      * Status Code: 200
      * JSON Response:
        ```json
        {
          "error": true,
          "message": " local culinary not found"
        }

### Myth
#### Get All Myth
* Endpoint: /api/myth
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
* Response:
  * If successful:
    * Status Code: 200
    * JSON Response:
      ```json
      [
        {
          "id": 1,
          "name": " myth 1",
          "categories": "myth ",
          "rate": "4.6",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        },
        {
          "id": 2,
          "name": "Myth 2",
          "categories": "myth ",
          "rate": "4.6",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        }
      ]


#### Get Myth By ID
* Endpoint: /api/ myth/< myth_id>
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
* Response:
  * If product exists:
    * Status Code: 200
    * JSON Response:
      ```json
      {
        "error": false,
        "product": {
          "id": 1,
          "name": "Myth 1",
          "categories": " myth ",
           "rate": "4.6",
          "description": " myth 1 description",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        }
      }
 * If not found:
   * Status Code: 200
   * JSON Response:
     ```json
     {
       "error": true,
       "message": " myth not found"
     }


### Local Stories
#### Get All Local Stories
* Endpoint: /api/local_stories
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
* Response:
  * If successful:
    * Status Code: 200
    * JSON Response:
      ```json
      [
        {
          "id": 1,
          "name": " Local Stories 1",
          "categories": "local stories ",
          "rate": "4.6",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        },
        {
          "id": 2,
          "name": "Local Stories 2",
          "categories": " local stories ",
          "rate": "4.6",
          "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
        }
      ]


#### Get Local Stories By ID
* Endpoint: /api/ local_stories/< local_stories_id>
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
  * Response:
    * If product exists:
      * Status Code: 200
      * JSON Response:
        ```json
        {
          "error": false,
          "product": {
            "id": 1,
            "name": "Local Stories 1",
            "categories": " local stories ",
             "rate": "4.6",
            "description": " local stories 1 description",
            "img_url": "https://storage.googleapis.com/bucket_name/image_folder/image_filename.jpg"
          }
        }
     * If not found:
       * Status Code: 200
       * JSON Response:
         ```json
         {
           "error": true,
           "message": " local stories not found"
         }

