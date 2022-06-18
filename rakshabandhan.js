
const figlet = require("figlet");
const chalk = require("chalk");
log = console.log;

figlet('Happy Rakshabandhan', function (err, message) {
if (err) {
    log('OOPS! Something went wrong :(', err);
} else {
    log(chalk.red.bold('\n\nWishing\n\n') + 
        chalk.white.bold('You\n\n') +
        chalk.green.bold('A Very\n\n')
    );

    log(chalk.green.bold(message));

    log(chalk.blue.bold('\n\nAuthor: ') +
        chalk.yellow.bold('Saroj Kumar Pandey')
    );
    
    log(chalk.cyan.bold('\nFollow on GitHub at ') + 
        chalk.magenta.bold('https://github.com/saroj425') + 
        '\n\n'
    );
}
});
