// const faker = require('faker');


const genId = (context, events, done) => {
  context.vars['id'] = Math.random() * (10000001 - 1) + 1; // set the "query" variable for the virtual user
  context.vars['helpful'] = Math.random() * (800 - 1) + 1;
  return done();
};

const genNewReview = (context, events, done) => {
  context.vars['id'] = Math.random() * (10000001 - 1) + 1;
  context.vars['rating'] = faker.random.number(10);
  context.vars['hours'] = faker.finance.amount(0, 100, 1);
  context.vars['description'] = removeLines(faker.lorem.paragraphs());
  context.vars['helpful'] = Math.random() * (800 - 1) + 1;
  context.vars['funny'] = faker.random.number(1000);
  context.vars['thread_length'] = faker.random.number(50);
  context.vars['user_username'] = faker.internet.userName();
  context.vars['user_recommended'] = faker.random.boolean();
  context.vars['user_steam_purchaser'] = faker.random.boolean();
  context.vars['user_numproducts'] = faker.random.number(500);
  context.vars['user_numreviews'] = faker.random.number(500);
  context.vars['user_icon'] = faker.random.arrayElement(images);
  context.vars['user_player_type'] = faker.random.arrayElement(playerTypes);
  context.vars['user_xp'] = faker.random.number(1000);
  context.vars['user_friend_level'] = faker.random.number(50);
  context.vars['user_steam_level'] = faker.random.number(1000);
  return done();
};



module.exports = { genId };
