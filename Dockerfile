# 使用更小的基础镜像
ARG NODE_VERSION=node:22.14-alpine

# 第一阶段：构建依赖项
FROM ${NODE_VERSION} AS dependency-base

# 设置工作目录，后续操作都在 /app 目录进行
WORKDIR /app

# 复制package.json和package-lock.json 这里的 ./ 表示 /app 目录
COPY package.json package-lock.json ./

# 安装依赖
RUN npm install && \
	npm cache clean --force   # 清理构建缓存

# 第二阶段：构建应用程序
FROM dependency-base AS production-base

# 把宿主机当前目录所有内容，复制到容器的 /app 目录
COPY . .

ARG AMAP_KEY
ENV AMAP_KEY=${AMAP_KEY}

ARG AMAP_SECURITY_CODE
ENV AMAP_SECURITY_CODE=${AMAP_SECURITY_CODE}

# 构建项目
RUN npm run build

# 第三阶段：生成生产镜像
FROM $NODE_VERSION AS production

COPY --from=production-base /app/.output /app/.output

WORKDIR /app

# 暴露端口
EXPOSE 3000

# 启动命令
CMD [ "node", "/app/.output/server/index.mjs"]