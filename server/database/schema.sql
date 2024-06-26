create table users (
  id int  primary key auto_increment not null,
  username varchar(50) not null,
  email varchar(255) not null unique,
  password varchar(50) not null
);

create table categories (
  id int  primary key auto_increment not null,
  name varchar(50) not null
);

create table excuses (
  id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Foreign Key (users_id) REFERENCES users(id),
  Foreign Key (categories_id) REFERENCES categories(id),
  users_id INT NOT NULL,
  categories_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL

);
