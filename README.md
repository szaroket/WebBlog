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

# Environment

## Python

The whole environment was set up with [conda](https://docs.conda.io/en/latest/). You can download and install minoconda from [this link](https://docs.conda.io/en/latest/miniconda.html).

Creating environment with python 3.9
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

After installation, we can open `pgAdmin` and create a new empty database - we can call it `blog-database`.

# Deployment steps

1. As a first step, I prepared an environment. he whole environment was set up with [conda](https://docs.conda.io/en/latest/).
2. Create Django project with `django-admin startproject mainapp` command.
3. Create a new Django `webblog` app and add it in project settings (i.e. `mainapp/settings.py` file).
4. Install PostgresSQL and create new database by pgAdmin.
5. Connect PostgresSQL database with app by changing `DATABASES` in `mainapp/settings.py`.
6. Migrate schema to a database by `python manage.py migrate` command.
7. Create admin by `python manage.py createsuperuser` command.
8. Create a Post model which will store posts from blog. This model was also added to `webblog/adming.py` so admin can create post from the administration site.
9. Create first REST API: getting list of all posts.