-- Schema creation.
create schema api;

-- Users table.
create table api."001_users" (
	"001_id" serial not null,
	"001_name" varchar not null,
	"001_mail" varchar not null,
	"001_create_date" timestamp default now(),
	constraint "001_pk" primary key("001_id")
);
comment on table api."001_users" is 'Table where user information resides.';

-- Applications table.
create table api."002_applications" (
	"002_id" int not null,
	"002_name" varchar not null,
	constraint "002_pk" primary key("002_id")
);
comment on table api."002_applications" is 'Table where possible linked applications resides.';
insert into api."002_applications" values (1, 'Twitch');

-- User applications table.
create table api."003_user_applications" (
	"003_id" serial not null,
	"003_001_id" int not null,
	"003_002_id" int not null,
	constraint "003_pk" primary key("003_id"),
	constraint "003_fk_003_001_id" foreign key("003_001_id") references api."001_users"("001_id"),
	constraint "003_fk_003_002_id" foreign key("003_002_id") references api."002_applications"("002_id"),
	constraint "003_uk_003_001_id_003_002_id" unique("003_001_id", "003_002_id")
);
comment on table api."003_user_applications" is 'Table which links users to applications they use.';

-- Application data types table.
create table api."004_application_data_types" (
	"004_id" int not null,
	"004_name" varchar not null,
	constraint "004_pk" primary key("004_id")
);
comment on table api."004_application_data_types" is 'Table where application data types resides, such as "OAUTH2_TOKEN';
insert into api."004_application_data_types" values (1, 'OAUTH2_TOKEN');

-- User application data table.
create table api."005_user_application_data" (
	"005_id" serial not null,
	"005_003_id" int not null,
	"005_004_id" int not null,
	constraint "005_pk" primary key("005_id"),
	constraint "005_fk_005_003_id" foreign key("005_003_id") references api."003_user_applications"("003_id"),
	constraint "005_fk_005_004_id" foreign key("005_003_id") references api."004_application_data_types"("004_id"),
	constraint "005_uk_005_003_id_005_004_id" unique("005_003_id", "005_004_id")
);
comment on table api."005_user_application_data" is 'Table where user specific application data resides.'