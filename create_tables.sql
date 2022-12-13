
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS categories(
	id BIGSERIAL PRIMARY KEY,
	name varchar(200) NOT NULL unique
);

CREATE TABLE IF NOT EXISTS products(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name varchar(200) NOT null,
	price decimal (10,2) NOT null,
	category_id integer,
	FOREIGN KEY (category_id) REFERENCES categories(id)
);


