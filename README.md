

# Timbre


This is a small react calculator web app 

## To Run 
Build Docker Image:  docker image build -t react:app .
Run App Locally: docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react:app
Run App Test: docker container run -it -v $(pwd):/app react:app test

## Design Docs

**Objective:** Functioning react Calculator 

- [x] addition, subtraction, division, multiplication
- [x] react jest test for each operation
- [x] docker enviroment set up
- [x] some light css 
