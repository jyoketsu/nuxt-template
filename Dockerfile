# 使用官方的 Node.js 镜像作为基础镜像
FROM node:22.14 AS build

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json
COPY package.json package-lock.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

ARG AMAP_KEY
ENV AMAP_KEY=${AMAP_KEY}

ARG AMAP_SECURITY_CODE
ENV AMAP_SECURITY_CODE=${AMAP_SECURITY_CODE}

# 构建项目
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动命令
CMD [ "node", ".output/server/index.mjs"]