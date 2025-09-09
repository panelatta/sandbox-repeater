# Makefile to run the repeater-console application.

# By declaring run-console as .PHONY, we ensure 'make' will always execute the command,
# regardless of whether a file named 'run-console' exists in the directory.
.PHONY: run-console

# This target executes the Maven command to run the Spring Boot application.
# -pl specifies the project module to build.
# -am also builds projects required by the specified project.
# -DskipTests skips running the tests.
# spring-boot:run is the goal that starts the application.
run-console:
	@echo "Starting repeater-console application via Spring Boot..."
	mvn -pl repeater-console/repeater-console-start -am -DskipTests spring-boot:run

