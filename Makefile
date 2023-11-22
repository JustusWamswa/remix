# Define the targets and their dependencies
start-server: install-server-deps
	@echo "Starting the Node.js server..."
	cd backend && node index.js

start-frontend: install-frontend-deps
	@echo "Starting the React frontend..."
	cd frontend && npm run dev

# Define the dependency targets to install dependencies
install-server-deps:
	@echo "Installing Node.js server dependencies..."
	cd backend && npm install

install-frontend-deps:
	@echo "Installing React frontend dependencies..."
	cd frontend && npm install

# The default target, which will start both the server and frontend
start: start-server start-frontend

# Clean up dependencies
# clean:
# 	rm -rf node_modules
# 	cd frontend && rm -rf node_modules