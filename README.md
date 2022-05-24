# WebBlog

## ToDo list

#### Backend
- [ ] Create a REST API that will allow to:
  - [ ] Create a post
  - [ ] Edit a post
  - [ ] Delete a post
  - [ ] List all posts
  - [ ] Get single post
- [ ] Add test coverage
- [ ] Prepare README:
  - [ ] Prepare README
  - [ ] Explain deployment steps

Nice to do:
- [ ] Count post views, save it in the database and return in endpoint responses
- [ ] Authorization
- [ ] Swagger
- [ ] Permissions:
  - [ ] Admin user should be able to create, edit and delete posts
  - [ ] Standard user should be able to view and list posts

#### Frontend
Blog should contain a list of all posts and a single post view.
- [ ] Fetch data from the API
- [ ] Send data to the API
- [ ] Prepare README
  - [ ] Explain local usage
  - [ ] Explain deployment steps

Nice to do:
- [ ] Count post views and display in the post view
- [ ] Responsive design (mobile and tablet friendly) - can use MUI5
- [ ] Authorization
- [ ] Axios (HTTP requests)
- [ ] Permissions:
  - [ ] Admin user should be able to create, edit and delete posts
  - [ ] Standard user should be able to view and list posts

# Technologies
 Backend -> Python (Django + DRF)
 Frontend -> Typescrip (React, minimal CSS - MUI5)
 Database -> PSQL
 
 Nice to have:
 Firebase

# Envoiroment

The whole envoiroment was setup with [conda](https://docs.conda.io/en/latest/). You can download and install minoconda from [this link](https://docs.conda.io/en/latest/miniconda.html).

Creating envoiroment with python 3.9
```
conda create --name python python=3.9
```

To activate envoiroment:
```
conda activate python
```

Installing Django:
```
conda install django
```
