module.exports = function(robot) {
    robot.hear(/(Hello|hello|Hi|hi|你好|早安|午安|晚安|哈囉)/, function(response) {
        re = ['Hello', 'Hi', '你好', '你好啊', '哈囉', response.match[1]];
        response.send(response.random(re));
    });

    robot.respond(/(What's your name?|what's ur name?)/, function(response) {
        re = ['My name is Lucy!', 'I am Lucy.Nice to meet you. :)', response.match[1]];
        response.send(response.random(re));
    });

    robot.hear(/(How are you?|How're you doing?|how are you?)/, function(response) {
        re = ['Fine', 'Great :)', 'Not bad', 'so so', '還OK', '普通', '還過得去', response.match[1]];
        response.send(response.random(re));
    });

    robot.respond(/(what can you do?|功能)/, function(response) {
        response.send('我可以:回應你');
    })

    robot.respond(/(Bye|掰掰|再見|bye)/, function(response) {
        response.send('Bye!Have a nice day!');
    });
}
