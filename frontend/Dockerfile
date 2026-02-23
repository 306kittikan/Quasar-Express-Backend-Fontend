# Stage 1: Build
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package files
COPY package*.json ./

# ติดตั้ง dependencies (จะรวม @quasar/app มาด้วยถ้ามีใน package.json)
RUN npm install

# Copy ไฟล์ทั้งหมด (รวมถึงไฟล์ตั้งค่าที่สร้างใหม่ในข้อ 1)
COPY . .

# ใช้ npx เพื่อรัน quasar จาก node_modules โดยตรง
RUN npx quasar build

# Stage 2: Production
FROM nginx:stable-alpine
# ก๊อปปี้ไฟล์ที่ build ได้ไปยังโฟลเดอร์ของ Nginx
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]