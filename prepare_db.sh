#!/bin/bash
# bash command: `source prepare_db.sh`

source .env

echo "source db/schema.sql;" | mysql -u $DB_USER -p$DB_PASSWORD

echo "database created. seeding tables..."

npm run seed