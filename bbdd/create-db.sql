create table api."001_users" (
	"001_id" serial primary key,
	"001_name" varchar not null,
	"001_mail" varchar not null,
	"001_create_date" timestamp default now()
);
comment on table api."001_users" is 'Table where user information resides.';


create table api."002_applications" (
	"002_id" int primary key,
	"002_name" varchar not null
);
comment on table api."002_applications" is 'Table where possible linked applications resides.';
insert into api."002_applications" values (1, 'Twitch');

create table api."003_user_applications" (
	"003_001_id" int not null,
	"003_002_id" int not null,
	primary key("003_001_id", "003_002_id"),
	constraint "fk_003_001_id" foreign key("003_001_id") references api."001_users"("001_id"),
	constraint "fk_003_002_id" foreign key("003_002_id") references api."002_applications"("002_id")
)