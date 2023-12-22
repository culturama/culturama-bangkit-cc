# Culturama Backend Documentation
Repository for cloud computing

## Database Schema Culturama
### Tabel Users
| Column     | Data Type | Constraints         |
|----------|------|--------------|
| User_Id     | INT   | PRIMARY KEY, AUTO_INCREMENT      |
| name | VARCHAR(255)   | NOT NULL      |
| email      | VARCHAR(255)   | NOT NULL     |
| password      | VARCHAR(255)   | NOT NULL     |

### Tabel Contents
| Column        | Type          | Description         |
|---------------|---------------|-------------------|
| Place_Id      | INTEGER       | Primary key, auto-increment |
| Place_Name    | STRING        | Name of the place |
| Description   | TEXT          | Description of the place |
| City          | STRING        | City where the place is located |
| Rating        | INTEGER       | Rating of the place |
| Time_Minutes  | STRING        | Time in minutes to reach the place |
| Coordinate    | STRING        | Coordinate information |
| Lat           | STRING        | Latitude |
| Long          | STRING        | Longitude |
| Image_Link    | STRING        | Link to the image of the place |
| Unnamed1      | STRING        | Additional field (Unnamed1) |
| Unnamed2      | STRING        | Additional field (Unnamed2) |


### Table Articles
| Column         | Type          | Options             |
| -------------- | ------------- | ------------------- |
| Article_Id     | INTEGER       | PRIMARY KEY, AUTO_INCREMENT |
| Article_Name   | STRING        |      NULL               |
| Description    | TEXT          |      NULL               |
| Image_Link     | STRING        |      NULL               |

### Table Ratings
| Column          | Type          | Options             |
| --------------- | ------------- | ------------------- |
| Rating_Id       | INTEGER       | PRIMARY KEY, AUTO_INCREMENT |
| Place_Id        | INTEGER       |  NULL                   |
| User_Id         | INTEGER       |       NULL                |
| Category        | STRING        |      NULL                 |
| Place_Ratings   | INTEGER       |      NULL                 |




## Culturama API Documentation
### Authentication
#### Register

* Endpoint: /register
* Method: POST
* Request Body:
  * name (string): User’s fullname
  * email (string): User's email
  * password (string): User's password

* Response
  * If successful:
    * Status Code: 200
    * JSON Response:
      ```json
      {
        "error": false,
        "message": "User added successfully"
      }

#### Login 
* Endpoint: /login
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
         "token": "<access_token>",
       },
       "message": "Login Success"
     }
  *if email not found :
     *JSON Response:
      ```json
      {
        "message": "user not found"
      }
  * If email or password is incorrect:
    * Status Code: 500
    * JSON Response:
      ```json
      {
        "error": true,
        "message": "Invalid credentials"
      }
      
#### Logout
* Endpoint: /api/auth/logout
* Method: POST
* Request Body:
  * Token (string): User’s access token 

* Response
  * If successful:
    * Status Code: 200
    * JSON Response:
      ```json
      {
        "error": false,
        "message": "Logout Success."
      }

### Content
#### Get All Content
* Endpoint: /content
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
         {
            "Place_id": 1,
            "Place_Name": "Tempat A",
            "Description": "Deskripsi tempat A.",
            "City": "Kota A",
            "Rating": 4,
            "Time_Minutes": "30",
            "Coordinate": "123.456,789.012",
            "Lat": "12.345",
            "Long": "67.890",
            "Image_Link": "https://example.com/imageA.jpg",
            "Unnamed1": "Nilai Unnamed1",
            "Unnamed2": "Nilai Unnamed2"
          }
       },
       {
            "Place_id": 2,
            "Place_Name": "Tempat B",
            "Description": "Deskripsi tempat B.",
            "City": "Kota B",
            "Rating": 4,
            "Time_Minutes": "30",
            "Coordinate": "123.456,789.012",
            "Lat": "12.345",
            "Long": "67.890",
            "Image_Link": "https://example.com/imageB.jpg",
            "Unnamed1": "Nilai Unnamed1",
            "Unnamed2": "Nilai Unnamed2"
          }
      ]

#### Get Content By ID
* Endpoint: /content/{id}
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
  * Response:
  * If not found:
      * Status Code: 404
      * JSON Response:
        ```json
        {
          "error": true,
          "message": " Content not found"
        }
        
    * If product exists:
      * Status Code: 200
      * JSON Response:
        ```json
        {
          "error": false,
          "content": {
            "Place_id": 1,
            "Place_Name": "Tempat A",
            "Description": "Deskripsi tempat A.",
            "City": "Kota A",
            "Rating": 4,
            "Time_Minutes": "30",
            "Coordinate": "123.456,789.012",
            "Lat": "12.345",
            "Long": "67.890",
            "Image_Link": "https://example.com/imageA.jpg",
            "Unnamed1": "Nilai Unnamed1",
            "Unnamed2": "Nilai Unnamed2"
          }
        }
    
    * If filed:
      * Status Code: 500
      * JSON Response:
        ```json
        {
          "status":"filed"
          "message": " filed to get content"
        }


### Article
#### Get All Article
* Endpoint: /article
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
            {          
               "Article_id": 1,
               "Article_Name": "Contoh Artikel",
               "Description": "Ini adalah contoh deskripsi artikel. Artikel ini berisi informasi yang sangat menarik dan bermanfaat.",
               "Image_Link": "https://example.com/image.jpg"
           },
          }
       {
           "Article_id": 1,
               "Article_Name": "Contoh Artikel",
               "Description": "Ini adalah contoh deskripsi artikel. Artikel ini berisi informasi yang sangat menarik dan bermanfaat.",
               "Image_Link": "https://example.com/image.jpg"
          }
      ]

#### Get Article By ID
* Endpoint: /article/{id}
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
  * Response:
  * If not found:
      * Status Code: 404
      * JSON Response:
        ```json
        {
          "error": true,
          "message": " Article not found"
        }
        
    * If product exists:
      * Status Code: 200
      * JSON Response:
        ```json
        {
          "Article_id": 1,
               "Article_Name": "Contoh Artikel",
               "Description": "Ini adalah contoh deskripsi artikel. Artikel ini berisi informasi yang sangat menarik dan bermanfaat.",
               "Image_Link": "https://example.com/image.jpg"
        }
    
    * If filed:
      * Status Code: 500
      * JSON Response:
        ```json
        {
          "status":"filed"
          "message": " filed to get article"
        }

      
### Miscellaneous
#### Homepage
* Endpoint: /index
* Method: GET
* Request Headers:
  * Authorization: Bearer <access_token>
*	Response:
  *	If successful:
    * Status Code: 200
    * Response Body: Hi! Ariq

#### Root
* Endpoint: /
*	Method: GET
*	Response:  
    *	Culturama




      


