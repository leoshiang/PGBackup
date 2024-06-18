# PGBackup

這是一個備份 PostgreSQL 的小工具，支援 Windows/Linux/MacOS。

## 下載程式

git clone https://github.com/leoshiang/PGBackup

## 修改權限

如果是 linux 系統，請用以下指令修改執行權限

```bash
chmod +x PGBackup.js
```

## 修改設定檔

使用文字編輯器修改 .env 檔案

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

# 在星期幾進行周備份。 1 = 代表星期一
WEEKLY_BACKUP_AT=1

# 周備份保留週期，以周計算，4 代表保留4周前到這周的備份。
WEEKLY_BACKUP_RETENTION_PERIOD=4
```

## 執行程式

Windows

```
node PGBackup.js
```

Linux

```bash
./PGBackup.js
```

