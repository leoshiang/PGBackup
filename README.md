# PGBackup

這是一個備份 PostgreSQL 的小工具，支援 Windows/Linux/MacOS。

## 使用 Telegram 傳送訊息

### 下載檔案

如果要用 Telegram 傳送訊息，請至 https://github.com/leoshiang/TGMsg/releases 下載 TGMsg 執行檔。

### 重新命名

如果你的作業系統是 Windows，請將下載檔案改名為 TGMsg.exe。
如果你的作業系統是 Linux，請將下載檔案改名為 TGMsg。
並將其所在位置加入環境變數 PATH。

### Token 與 ChatId

在 Telegram 建立 Bot 和 Channel，記下 TOKEN & CHAT_ID

## 建立 .env 檔案

使用文字編輯器建立 .env 檔案

```
# 備份之後要執行的指令
AFTER_BACKUP_SCRIPT=

# 備份資料夾
BACKUP_DIR=C:\Temp

# 備份之前要執行的指令
BEFORE_BACKUP_SCRIPT=

# 是否壓縮備份檔案。如果是 yes，輸出檔會被壓縮成 .gz 檔案。
COMPRESS_OUTPUT_FILE=yes

# 每日備份保留週期，以天計算，７代表保留七天前到今天的備份。
DAILY_BACKUP_RETENTION_PERIOD=7

# 要備份的資料庫名稱，以逗號分隔。
DB_BACKUP_LIST=testdb,testdb2,testdb3

# 不備份的資料庫名稱，以逗號分隔。
DB_EXCLUDE="template1 postgres"

# 資料庫主機，IP 或是名稱
DB_HOST=127.0.0.1

# 資料庫
DB_NAME=postgres

# 資料庫使用者密碼
DB_PASSWORD=

# 資料庫主機通訊埠
DB_PORT=5432

# 資料庫使用者名稱
DB_USERNAME=testuser

# 在每月的幾號進行月備份。 1 = 代表個月的 1 號
MONTHLY_BACKUP_AT=1

# 月備份保留週期，以月計算，3 代表保留3個月前到這個月的備份。
MONTHLY_BACKUP_RETENTION_PERIOD=3

# 在星期幾進行週備份。 1 = 代表星期一
WEEKLY_BACKUP_AT=1

# 週備份保留週期，以週計算，4 代表保留4週前到這週的備份。
WEEKLY_BACKUP_RETENTION_PERIOD=4

TG_TOKEN=
TG_CHAT_ID=
```

## 執行程式

將執行檔與 .nev 放在同一個目錄。

Windows

```
PGBackup
```

Linux

```bash
sudo ./PGBackup
```

## 安裝建置執行檔時所需軟體

### pkg

```bash
npm install -g pkg
```

### VerMgr

1. 前往 VerMgr 下載最新的執行檔。

> https://github.com/leoshiang/VerMgr/releases

2. 在此 repo. 建立 VerMgr 目錄。
3. 將下載的 vermgr-win-x64-x.x.x-PROD-YYYYMMDD.exe 放在 VerMgr目錄。
4. 將 vermgr-win-x64-x.x.x-PROD-YYYYMMDD.exe 更名為 vermgr.exe。

## 建置執行檔

目前僅支援在 Windows 作業系統建置。

```bash
npm run build
```

輸出檔案會產生在 release 目錄裡面。

