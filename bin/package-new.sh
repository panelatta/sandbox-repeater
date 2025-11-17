#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")"/.. && pwd)"
TARGET="$ROOT/target/repeater"
PLUGINS_DIR="$TARGET/plugins"
CFG_DIR="$TARGET/cfg"

# 1) 构建
mvn -f "$ROOT/pom.xml" -T 1C clean package -DskipTests

# 2) 目录 & 配置
mkdir -p "$PLUGINS_DIR" "$CFG_DIR"
cp "$ROOT/bin/repeater-logback.xml" "$CFG_DIR/repeater-logback.xml"
cp "$ROOT/bin/repeater.properties"   "$CFG_DIR/repeater.properties"
cp "$ROOT/bin/repeater-config.json"  "$CFG_DIR/repeater-config.json"

# 3) repeater-module（fat-jar）
MODULE_JAR=$(ls "$ROOT/repeater-module/target/"*-jar-with-dependencies.jar 2>/dev/null | head -n1)
[ -n "${MODULE_JAR:-}" ] || { echo "ERR: repeater-module fat-jar not found"; exit 1; }
cp "$MODULE_JAR" "$TARGET/repeater-module.jar"

# 4) 控制台启动 JAR（自动探测新旧两套目录）
BOOTSTRAP_CANDIDATES=(
  "$ROOT/console/console-web/target/"*.jar
  "$ROOT/console/console-start/target/"*.jar
  "$ROOT/repeater-console/repeater-console-start/target/repeater-console.jar"
)
FOUND_BOOT=""
for f in "${BOOTSTRAP_CANDIDATES[@]}"; do
  for g in $f; do
    if [ -f "$g" ]; then FOUND_BOOT="$g"; break 2; fi
  done
done
[ -n "$FOUND_BOOT" ] || { echo "ERR: bootstrap jar not found (console or repeater-console)"; exit 1; }
cp "$FOUND_BOOT" "$TARGET/repeater-bootstrap.jar"

# 5) 插件：通配遍历，不再硬编码
for d in "$ROOT/repeater-plugins"/*-plugin; do
  [ -d "$d" ] || continue
  FAT=$(ls "$d/target/"*-jar-with-dependencies.jar 2>/dev/null | head -n1 || true)
  JAR="$FAT"
  if [ -z "$JAR" ]; then
    JAR=$(ls "$d/target/"*.jar 2>/dev/null | grep -vE '(sources|javadoc|tests?)' | head -n1 || true)
  fi
  if [ -n "$JAR" ]; then
    cp "$JAR" "$PLUGINS_DIR/$(basename "$d").jar"
  else
    echo "WARN: no jar found for $(basename "$d")"
  fi
done

# 6) 打包
cd "$ROOT/target"
tar -zcvf repeater-stable-bin.tar repeater/
cd - >/dev/null
echo "OK: $ROOT/target/repeater-stable-bin.tar"

