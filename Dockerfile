ARG GO_VERSION=1
ARG TARGETPLATFORM
FROM --platform=$BUILDPLATFORM golang:${GO_VERSION}-bookworm AS builder

WORKDIR /usr/src/app
COPY go.mod go.sum ./
RUN --platform=$TARGETPLATFORM go mod download && go mod verify
COPY . .
RUN --platform=$TARGETPLATFORM CGO_ENABLED=0 GOOS=linux go build -v -o /run-app ./main.go

FROM --platform=$BUILDPLATFORM debian:bookworm-slim

RUN --platform=$TARGETPLATFORM apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=builder /run-app /usr/local/bin/

USER nobody
EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/run-app"]
