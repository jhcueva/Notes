# NotesApp build with Django + React + Docker

## For local development

Install requirements, make sure to be in project folder

    pip install -r requirements.txt

Install Frontend dependencies, make sure to be in frontend folder

    npm install 

Run django server, make sure to be in project folder

    python3 manage.py runserver

Run Frontend for development, make sure to be in frontend folder

    npm run dev


Build frontend for production, make sure to be in frontend folder

    npm run build

## Run with docker

Make sure to be in the root folder

Build docker image

    docker compose build

Start all image containers

    docker compose up

