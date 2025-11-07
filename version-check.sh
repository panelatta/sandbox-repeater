#!/bin/bash
# 版本检查脚本
# 用于验证 console-web 项目的中间件依赖版本

echo "=========================================="
echo "console-web 中间件版本检查脚本"
echo "=========================================="
echo ""

cd "$(dirname "$0")/console/console-web"

echo "🔍 检查 MongoDB 依赖..."
echo "----------------------------------------"
mvn dependency:tree | grep -E "mongodb" -i | grep -v "omitted"
echo ""

echo "🔍 检查 Redis 依赖..."
echo "----------------------------------------"
mvn dependency:tree | grep -E "redis|lettuce" -i | grep -v "omitted"
echo ""

echo "🔍 检查 Kafka 依赖..."
echo "----------------------------------------"
mvn dependency:tree | grep -E "kafka" -i | grep -v "omitted"
echo ""

echo "=========================================="
echo "✅ 版本检查完成"
echo "=========================================="

