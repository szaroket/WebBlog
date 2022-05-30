# WebBlog

The purpose of this task is to create an E2E experience of a Blog application.

# Technologies
Here is a list of technologies which should be used for this project:
* Backend:
  * Python (Django + DRF)
* Frontend:
  * Typescrip (React, minimal CSS - MUI5)
* Database:
  * PSQL

Nice to have:
* Firebase

## ToDo 

List of tasks which should be done for this project.

#### Backend
- [X] Create a REST API that will allow to:
  - [X] Create a post
  - [X] Edit a post
  - [X] Delete a post
  - [X] List all posts
  - [X] Get single post
- [ ] Add test coverage
- [ ] Prepare README:
  - [ ] Prepare README
  - [ ] Explain deployment steps

Nice to do:
- [ ] Count post views, save it in the database and return in endpoint responses
- [ ] Authorization
- [X] Swagger
- [ ] Permissions:
  - [ ] Admin user should be able to create, edit and delete posts
  - [ ] Standard user should be able to view and list posts

#### Frontend
- [X] Blog should contain a list of:
  - [X] All posts 
  - [X] A single post view.
- [X] Fetch data from the API
- [X] Send data to the API
- [ ] Prepare README
  - [ ] Explain local usage
  - [ ] Explain deployment steps

Nice to do:
- [ ] Count post views and display in the post view
- [ ] Responsive design (mobile and tablet friendly) - can use MUI5
- [ ] Authorization
- [X] Axios (HTTP requests)
- [ ] Permissions:
  - [ ] Admin user should be able to create, edit and delete posts
  - [ ] Standard user should be able to view and list posts


## Environment

### Python

The whole environment was set up with [conda](https://docs.conda.io/en/latest/) which can be downloaded and installed from [this link](https://docs.conda.io/en/latest/miniconda.html).

Creating environment with python 3.9:
```
conda create --name python python=3.9
```

To activate environment:
```
conda activate python
```

Installing Django:
```
conda install django
```

## PostgresSQL

Install PostgresSQL from the official PostgreSQL [download section](https://www.postgresql.org/download/).
You can follow [this instruction](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/02_installing_postgresql_with_the_graphical_installation_wizard/01_invoking_the_graphical_installer/).

After installation, open `pgAdmin` and create a new empty database - call it `blog-database`.

## How to run project locally

TBA

## Deployment steps

### Backend

1. As a first step, I prepared an environment. The whole environment was set up with [conda](https://docs.conda.io/en/latest/).
2. Create Django project with `django-admin startproject mainapp` command.
3. Create a new Django `webblog` app and add it in project settings (i.e. `mainapp/settings.py` file).
4. Install PostgresSQL and create new database by pgAdmin.
5. Connect PostgresSQL database with app by changing `DATABASES` in `mainapp/settings.py`.
6. Migrate schema to a database by `python manage.py migrate` command.
7. Create admin by `python manage.py createsuperuser` command.
8. Create a Post model which will store posts from blog. This model was also added to `webblog/adming.py` so admin can create post from the administration site.
9. Create first REST API: getting list of all posts.
10. Create all API methods: create, edit, delete, list all, get single. I decided to have separate API for each request instead of using `RetrieveUpdateDestroyAPIView`. In my opinion, it is more clear that way.

### Frontend

TBA