const TelegramApi = require('node-telegram-bot-api');

const token = '1826553744:AAGoKSFpCtrybbt78JZUOVb6MRNlc9jmH0o';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg => {
	const text = msg.text;
	const chatId = msg.chat.id;

	bot.setMyCommands([
		{command: '/start', description: "Стартуем"},
		{command: '/info', description: "Приветики"},
		{command: '/click', description: "Нажми меня"}

	]);

	if (text === '/start') {
		return bot.sendMessage(chatId, 'Здрафствуйте');
	}

	if (text === '/info') {
		return bot.sendMessage(chatId, `Ты получается ${msg.from.first_name} ${msg.from.last_name}`);
	}

	if (text === '/click') {
		bot.sendPhoto(chatId, 'https://sun9-67.userapi.com/impg/-u7ZH3KKPpRP12SlTwUVvrCME_a_Qh6eu_lANw/B3452A2TUvQ.jpg?size=828x1472&quality=96&sign=79f2b73ab8a43965d796a4d7fd1c68a6&type=album');
		return bot.sendMessage(chatId, 'На, смотри');
	}

	return bot.sendMessage(chatId, 'Каво? Команды открой, ало!');



});