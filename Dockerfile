FROM guergeiro/pnpm:lts-latest

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN pnpm install --prod --lockfile-only

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["node", "dist/src/main"]