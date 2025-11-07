# Makefile to build & run the repeater-console application.

.PHONY: build-console run-console run-console-jar clean

MVN     ?= mvn
MODULE  ?= console/console-web
PROFILE ?= local

## 只编译（包含依赖模块，且跳过测试）
build-console:
	@echo "Building $(MODULE) (skip tests)..."
	$(MVN) clean install -pl $(MODULE) -am -DskipTests

## 运行（基于 spring-boot:run），使用本地 profile 覆盖
run-console:
	@echo "Running Spring Boot (profile=$(PROFILE))..."
	cd $(MODULE) && $(MVN) spring-boot:run -Dspring-boot.run.profiles=$(PROFILE)

## 可选：以打包后的 JAR 方式运行（会先构建）
run-console-jar: build-console
	@echo "Running packaged JAR (profile=$(PROFILE))..."
	java -jar $(shell ls -1 $(MODULE)/target/*.jar | grep -v '\-sources\.jar' | grep -v '\-javadoc\.jar' | head -n 1) --spring.profiles.active=$(PROFILE)

clean:
	$(MVN) clean

