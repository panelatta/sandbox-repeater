# console-web 中间件版本详细报告

## 版本信息汇总

### 1. MongoDB

| 依赖项 | 版本 | 来源类型 |
|--------|------|----------|
| spring-boot-starter-data-mongodb | **2.5.5** | 显式声明 |
| mongodb-driver-sync (MongoDB Java Driver) | **4.0.5** | 传递依赖 |
| mongodb-driver-core | **4.0.5** | 传递依赖 |
| bson | **4.0.5** | 传递依赖 |
| spring-data-mongodb | **3.0.5.RELEASE** | 传递依赖 |

**支持的 MongoDB 服务器版本：3.6 - 4.4**

### 2. Redis

| 依赖项 | 版本 | 来源类型 |
|--------|------|----------|
| spring-boot-starter-data-redis | **2.3.5.RELEASE** | 传递依赖 |
| spring-data-redis | **2.3.5.RELEASE** | 传递依赖 |
| lettuce-core (Redis 客户端) | **5.3.5.RELEASE** | 传递依赖 |

**支持的 Redis 服务器版本：2.6 - 7.x**

### 3. Kafka

| 依赖项 | 版本 | 来源类型 |
|--------|------|----------|
| spring-kafka | **2.5.7.RELEASE** | 传递依赖 |
| kafka-clients | **2.5.1** | 传递依赖 |

**支持的 Kafka 服务器版本：0.10.0 - 2.8.x**

---

## 详细来源追踪

### 📁 文件来源

#### MongoDB

1. **显式版本声明**
   - 文件：`/console/pom.xml`
   - 行号：150-155
   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-mongodb</artifactId>
       <version>2.5.5</version>
   </dependency>
   ```

2. **模块依赖**
   - 文件：`/console/console-mongo/pom.xml`
   - 行号：21-24
   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-mongodb</artifactId>
   </dependency>
   ```

3. **测试用嵌入式 MongoDB**
   - 文件：`/console/console-web/pom.xml`
   - 行号：64-69
   ```xml
   <dependency>
       <groupId>de.flapdoodle.embed</groupId>
       <artifactId>de.flapdoodle.embed.mongo</artifactId>
       <version>3.0.0</version>
       <scope>test</scope>
   </dependency>
   ```

4. **配置文件中的版本**
   - 文件：`/console/console-web/src/main/resources/application-local.yml`
   - 行号：1-9
   ```yaml
   spring:
     mongodb:
       embedded:
         version: 4.0.28   # 嵌入式 MongoDB 版本
   ```

#### Redis

1. **模块依赖**
   - 文件：`/console/console-service/pom.xml`
   - 行号：36-38
   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-redis</artifactId>
   </dependency>
   ```

2. **配置文件**
   - 文件：`/console/console-web/src/main/resources/application.properties`
   - 行号：91-94
   ```properties
   spring.redis.host=127.0.0.1
   spring.redis.password=password
   spring.redis.database=5
   spring.redis.port=6379
   ```

#### Kafka

1. **模块依赖**
   - 文件：`/console/console-service/pom.xml`
   - 行号：31-34
   ```xml
   <dependency>
       <groupId>org.springframework.kafka</groupId>
       <artifactId>spring-kafka</artifactId>
   </dependency>
   ```

2. **配置文件**
   - 文件：`/console/console-web/src/main/resources/application.properties`
   - 行号：57-85
   ```properties
   kafka.topic.record=repeator_topic
   kafka.topic.replay=repeator_repeat_topic
   spring.kafka.bootstrap-servers=common-kafka-test.com:39094
   spring.kafka.consumer.group-id=repeater-group
   ```

---

## 🔧 验证方法

### 方法 1：使用 Maven 命令

```bash
cd console/console-web

# 查看完整依赖树
mvn dependency:tree

# 查看 MongoDB 相关依赖
mvn dependency:tree | grep -i mongodb

# 查看 Redis 相关依赖
mvn dependency:tree | grep -i redis

# 查看 Kafka 相关依赖
mvn dependency:tree | grep -i kafka
```

### 方法 2：使用提供的脚本

```bash
# 运行版本检查脚本
./version-check.sh
```

### 方法 3：Maven 依赖插件

```bash
cd console/console-web

# 生成详细的依赖报告
mvn dependency:tree -Dverbose -DoutputFile=dependency-tree.txt

# 查看报告
cat dependency-tree.txt | grep -E "mongodb|redis|kafka" -i
```

---

## 📊 Maven 依赖树输出（实际结果）

### MongoDB 依赖树
```
[INFO] |     |  \- org.springframework.boot:spring-boot-starter-data-mongodb:jar:2.5.5:compile
[INFO] |     |     +- org.mongodb:mongodb-driver-sync:jar:4.0.5:compile
[INFO] |     |     |  +- org.mongodb:bson:jar:4.0.5:compile
[INFO] |     |     |  \- org.mongodb:mongodb-driver-core:jar:4.0.5:compile
[INFO] |     |     \- org.springframework.data:spring-data-mongodb:jar:3.0.5.RELEASE:compile
```

### Redis 依赖树
```
[INFO] |     +- org.springframework.boot:spring-boot-starter-data-redis:jar:2.3.5.RELEASE:compile
[INFO] |     |  +- org.springframework.data:spring-data-redis:jar:2.3.5.RELEASE:compile
[INFO] |     |  |  +- org.springframework.data:spring-data-keyvalue:jar:2.3.5.RELEASE:compile
[INFO] |     |  |  |  \- org.springframework.data:spring-data-commons:jar:2.3.5.RELEASE:compile
[INFO] |     |  |  \- org.springframework:spring-oxm:jar:5.2.10.RELEASE:compile
[INFO] |     |  \- io.lettuce:lettuce-core:jar:5.3.5.RELEASE:compile
```

### Kafka 依赖树
```
[INFO] |     +- org.springframework.kafka:spring-kafka:jar:2.5.7.RELEASE:compile
[INFO] |     |  +- org.springframework:spring-messaging:jar:5.2.10.RELEASE:compile
[INFO] |     |  +- org.springframework:spring-tx:jar:5.2.10.RELEASE:compile
[INFO] |     |  +- org.springframework.retry:spring-retry:jar:1.2.5.RELEASE:compile
[INFO] |     |  \- org.apache.kafka:kafka-clients:jar:2.5.1:compile
[INFO] |     |     +- com.github.luben:zstd-jni:jar:1.4.4-7:compile
[INFO] |     |     +- org.lz4:lz4-java:jar:1.7.1:compile
[INFO] |     |     \- org.xerial.snappy:snappy-java:jar:1.1.7.3:compile
```

---

## 📌 关键配置文件清单

| 配置文件 | 路径 | 包含的中间件配置 |
|---------|------|-----------------|
| application.properties | `/console/console-web/src/main/resources/` | MongoDB, Redis, Kafka |
| application-local.yml | `/console/console-web/src/main/resources/` | MongoDB (嵌入式) |
| application-k8s.yml | `/console/console-web/src/main/resources/` | MongoDB |
| console/pom.xml | `/console/` | MongoDB 版本管理 |
| console-web/pom.xml | `/console/console-web/` | 测试依赖 |
| console-service/pom.xml | `/console/console-service/` | Kafka, Redis 依赖 |
| console-mongo/pom.xml | `/console/console-mongo/` | MongoDB 依赖 |

---

## ✅ 推荐使用版本

基于客户端库的兼容性测试，建议使用以下服务器版本：

| 中间件 | 推荐最高版本 | 理由 |
|--------|------------|------|
| MongoDB | **4.4.x** | MongoDB Java Driver 4.0.5 完全支持 |
| Redis | **6.2.x 或 7.0.x** | Lettuce 5.3.5 向前兼容性好 |
| Kafka | **2.5.x - 2.8.x** | Kafka clients 2.5.1 最佳匹配 |

---

## 🔗 参考文档

- [MongoDB Java Driver Compatibility](https://www.mongodb.com/docs/drivers/java/sync/current/compatibility/)
- [Lettuce Redis Client](https://lettuce.io/)
- [Kafka Clients Compatibility](https://kafka.apache.org/protocol)
- [Spring Boot 2.3.x Reference](https://docs.spring.io/spring-boot/docs/2.3.x/reference/html/)

---

**生成时间：** 2025-10-30
**检查方式：** Maven 依赖树分析 + POM 文件审查

