.PHONY: help
help: ## Display this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help

# Example targets below - customize as needed

.PHONY: build
build: ## Build the project
	@echo "Building the project..."

.PHONY: test
test: ## Run tests
	@echo "Running tests..."

.PHONY: clean
clean: ## Clean build artifacts
	@echo "Cleaning build artifacts..."
