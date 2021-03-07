init:
	cd backend; docker-compose build --no-cache;
	cd backend; docker-compose up -d;

up:
	cd backend; docker-compose up -d;

ps:
	cd backend; docker-compose ps;

down:
	cd backend; docker-compose down;
