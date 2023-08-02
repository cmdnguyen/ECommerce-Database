#!/bin/bash
# bash command: `source prepare_db.sh`

source .env

echo "source db/schema.sql;" | mysql -u $DB_USER -p$DB_PASSWORD

echo "database created. seeding tables..."

node seeds/category-seeds.js
node seeds/product-seeds.js
node seeds/product-tag-seeds.js
node seeds/tag-seeds.js